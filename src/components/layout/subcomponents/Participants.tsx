import React, { useEffect, useState } from "react";
import { User } from "lucide-react";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchChallengeParticipants } from "@/lib/redux/features/participantsSlice";
import { AppDispatch, RootState } from "@/lib/redux/store";

const Participants = () => {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : ""; // Ensure id is a string
  const dispatch = useDispatch<AppDispatch>();

  // Select participants, totalParticipants, loading, and error from Redux store
  const { participants, totalParticipants, loading, error } = useSelector(
    (state: RootState) => state.participants
  );

  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(fetchChallengeParticipants({ challengeId: id }));
    }
  }, [id, dispatch]);

  if (loading) {
    return <div>Loading participants...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  // Ensure participants is an array
  const participantsList = participants || [];

  // Determine the list of participants to display
  const displayedParticipants = showAll
    ? participantsList
    : participantsList.slice(0, 5);

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">Participants</h2>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {totalParticipants}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {displayedParticipants.map((participant, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <User className="w-8 h-8 text-gray-600 bg-gray-100 rounded-full p-1" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {participant.fullName}
                </p>
                <p className="text-xs text-gray-500">{participant.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showAll && participantsList.length > 5 && (
        <button
          className="w-full mt-4 text-center text-sm text-white bg-blue-600 hover:bg-blue-700 font-medium py-2 rounded-lg transition-colors"
          onClick={() => setShowAll(true)}
        >
          View All
        </button>
      )}
    </div>
  );
};

export default Participants;
