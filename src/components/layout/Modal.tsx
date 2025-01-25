import React from 'react';
import { Send } from 'lucide-react';
import Link from 'next/link';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-[542px] h-[489px] border border-[#E4E7EC] rounded-lg p-6 relative">
        <div className="flex justify-center items-center w-[133px] h-[134px] bg-[#D0E0FC] rounded-full mx-auto">
          <Send className="h-[64px] w-[64px] text-[#2B71F0]" />
        </div>
        <div className="mt-6 text-center">
          <h2 className="text-xl text-[#101928] font-semibold">Join the WhatsApp Community</h2>
          <p className="mt-4 text-[#475367]">Get notified on the latest projects and hackathons</p>
        </div>
        <div className="flex justify-center mt-8">
          <Link href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-2 bg-[#2B71F0] text-white rounded-lg hover:bg-[#1F5EC5] transition">
              Join
            </button>
          </Link>
        </div>
        <button onClick={onClose} className="absolute top-4 right-4 text-[#475367] hover:text-[#101928] transition">
          <span className="material-icons">close</span>
        </button>
      </div>
    </div>
  );
};

export default Modal;
