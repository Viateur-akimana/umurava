import { InstructionCardProps } from "@/types/instructions";
import { Calendar,Mail,CircleDollarSign,Globe } from 'lucide-react';


export default function InstructionCard({
  category,
  duration,
  prize,
  buttonText,
}: InstructionCardProps) {
  return (
    <div className=" bg-white  h-[480px] rounded-lg p-6 space-y-6 border border-[#E4E7EC]">
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
      <button className="w-full bg-blue-500 text-white text-sm font-medium py-2 rounded-lg hover:bg-blue-600 transition">
        {buttonText}
      </button>
    </div>
  );
}
