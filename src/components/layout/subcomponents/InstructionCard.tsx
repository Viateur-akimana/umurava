import { Challenge } from "@/types/challenge";
import { InstructionCardProps } from "@/types/instructions";
import { Calendar,Mail,CircleDollarSign,Globe } from 'lucide-react';
import { usePathname,useRouter } from "next/navigation";

interface CombinedProps extends InstructionCardProps {
  challenge?: Challenge;
}

export default function InstructionCard({
  category,
  duration,
  prize,
  challenge
}: CombinedProps) {
  const pathname = usePathname();
  const router = useRouter()
  const isAdmin = pathname.startsWith("/admin");
  const isTalent = pathname.startsWith("/talent");
  const handleChallengeClick = (id: number) => {
    router.push(`/admin/challenges/${id}/edit`);
  };
  return (
    <div className="max-w-md mb-4 mx-auto bg-white  h-[480px] rounded-lg p-6 space-y-6 border border-[#E4E7EC]">
      <h2 className="text-xl  text-black font-bold">Key instructions:</h2>
      <p className="text-lg text-[#475367]">You are free to schedule the clarification call with the team via this</p>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-blue-100 rounded-full">
            <Mail className="text-blue-500" />
          </div>
          <div>
            <p className="text-md font-medium">talent@umurava.africa</p>
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
      {isTalent && (
      <button className="w-full bg-blue-500 text-white text-sm font-medium py-2 rounded-lg hover:bg-blue-600 transition">
        Submit your work
      </button>
      )}
      {isAdmin && ( 
        <div className="flex gap-6">
                <button className="bg-[#E5533C] hover:bg-red-700 duration-500 rounded-lg py-2 text-white text-lg font-semibold w-[50%]">
                  Delete
                </button>
                <button onClick={() => handleChallengeClick(challenge.id)} className="bg-[#2B71F0] hover:bg-blue-700 duration-500 rounded-lg py-2 text-white text-lg font-semibold w-[50%]">
                  Edit
                </button>
              </div>
      )}
    </div>
  );
}
