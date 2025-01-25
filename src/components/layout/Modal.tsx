import React from 'react';
import { Send } from 'lucide-react';
import Link from 'next/link';
import { CircleX } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-[530px] h-[469px] border border-[#E4E7EC] rounded-lg p-6 relative">
        <div className="flex justify-center items-center w-[133px] h-[134px] bg-[#D0E0FC] mt-8 rounded-full mx-auto">
          <Send className="h-[64px] w-[64px] text-[#2B71F0]" />
        </div>
        <div className="mt-6 text-center">
          <h2 className="text-2xl mb-4 text-[#101928] font-semibold">Join our WhatsApp community</h2>
          <p className=" text-[#475367]">Get notified on the latest projects and hackathons</p>
        </div>
        <div className="flex justify-center mt-8">
          <Link href="https://whatsap" target="_blank" rel="noopener noreferrer">
            <button className="px-12 py-3 font-bold text-xl bg-[#2B71F0] text-white rounded-xl hover:bg-[#1F5EC5] transition">
              Join
            </button>
          </Link>
        </div>
        <button onClick={onClose} className="absolute top-4 right-4 text-[#475367] hover:text-[#101928] transition">
          <CircleX className='text-[#2B71F0] text-2xl'/>
        </button>
      </div>
    </div>
  );
};

export default Modal;
