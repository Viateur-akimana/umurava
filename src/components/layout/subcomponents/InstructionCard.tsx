import { useAppDispatch } from "@/lib/redux/store"; 
import { removeChallenge } from "@/lib/redux/features/challengesSlice"; 
import { useParticipateInChallenge, useParticipationStatus } from "@/hooks/useParticipateChallenge";
import { Challenge } from "@/types/challenge";
import { InstructionCardProps } from "@/types/instructions";
import { Calendar, Mail, CircleDollarSign, Globe } from 'lucide-react';
import { usePathname, useRouter } from "next/navigation";

interface CombinedProps extends InstructionCardProps {
  challenge?: Challenge;
}

export default function InstructionCard({ contact, category, duration, prize, challengeId }: CombinedProps) {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isAdmin = pathname.startsWith("/admin");
  const isTalent = pathname.startsWith("/talent");
  
  const { participationStatus, loading: statusLoading, refetch } = useParticipationStatus(challengeId);
  const { participate, loading: participateLoading } = useParticipateInChallenge();

  const handleDelete = async (id: string) => {
    try {
      await dispatch(removeChallenge(id)).unwrap();
      router.push("/admin/challenges")
    } catch (error) {
      console.error('Failed to delete challenge:', error);
    }
  };

  const handleChallengeClick = (id: string) => {
    router.push(`/admin/challenges/${id}/edit`);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg p-6 space-y-6 border border-[#E4E7EC]">
      <h2 className="text-xl  text-black font-bold">Key instructions:</h2>
      <p className="text-lg text-[#475367]">You are free to schedule the clarification call with the team via this</p>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-blue-100 rounded-full">
            <Mail className="text-blue-500" />
          </div>
          <div>
            <p className="text-md font-medium">{contact}</p>
            <p className="text-xs text-gray-500">Contact Email</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-blue-100 rounded-full">
            <Globe className="text-blue-500" />
          </div>
          <div>
            <p className="text-md font-medium">{category}</p>
            <p className="text-xs text-gray-500">Challenge Category</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-blue-100 rounded-full">
            <Calendar className="text-blue-500" />
          </div>
          <div>
            <p className="text-md font-medium">{duration}</p>
            <p className="text-xs text-gray-500">Duration</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-blue-100 rounded-full">
            <CircleDollarSign className="text-blue-500" />
          </div>
          <div>
            <p className="text-md font-medium">{prize}</p>
            <p className="text-xs text-gray-500">Money Prize</p>
          </div>
        </div>
      </div>
      {isTalent && !statusLoading && (
        <div className="flex gap-3">
          {participationStatus ? (
            <button className="w-full bg-blue-500 text-white text-sm font-medium py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              Submit your work
            </button>
          ) : (
            <button
              onClick={() => participate(challengeId, refetch)}
              disabled={participateLoading}
              className="w-full bg-blue-500 text-white text-sm font-medium py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              {participateLoading ? "Joining..." : "Start"}
            </button>
          )}
        </div>
      )}

      {isAdmin && (
        <div className="flex gap-6">
          <button
            onClick={() => handleDelete(challengeId)}
            className="bg-[#E5533C] hover:bg-red-700 duration-500 rounded-lg py-2 text-white text-lg font-semibold w-[50%]"
          >
            Delete
          </button>
          <button 
            onClick={() => handleChallengeClick(challengeId)} 
            className="bg-[#2B71F0] hover:bg-blue-700 duration-500 rounded-lg py-2 text-white text-lg font-semibold w-[50%]"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}