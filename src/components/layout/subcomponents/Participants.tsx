import React from 'react';
import { User } from 'lucide-react';

interface Participant {
  name: string;
  role: string;
  online?: boolean;
}

const Participants = () => {
  const participants: Participant[] = [
    {
      name: "Hilary Sh",
      role: "Product Designer",
      online: true
    },
    {
      name: "Christian Maral",
      role: "UX/UI Designer",
      online: true
    },
    {
      name: "Jelly Market",
      role: "Content Creator",
      online: true
    },
    {
      name: "Dr. Samuel Smith",
      role: "Mental Health Professional",
      online: true
    },
    {
      name: "Dr. Lily Chen",
      role: "Dermatologist",
      online: false
    }
  ];

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">Participants</h2>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {participants.length}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {participants.map((participant, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <User className="w-8 h-8 text-gray-600 bg-gray-100 rounded-full p-1" />
                {participant.online && (
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{participant.name}</p>
                <p className="text-xs text-gray-500">{participant.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 text-center text-sm text-white bg-blue-600 hover:bg-blue-700 font-medium py-2 rounded-lg transition-colors">
        View All
      </button>
    </div>
  );
};

export default Participants;