"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type Challenge = {
  id: string;
  title: string;
  description: string;
  status: string;
};

const AdminChallengeView = () => {
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [updatedChallenge, setUpdatedChallenge] = useState<Challenge>({
    id: "",
    title: "",
    description: "",
    status: "active",
  });
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); 

  useEffect(() => {
    if (id) {
      fetch(`/api/challenges/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setChallenge(data);
          setUpdatedChallenge(data);
        });
    }
  }, [id]);

  const handleUpdate = async () => {
    if (!id) return;

    const response = await fetch(`/api/challenges/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedChallenge),
    });

    if (response.ok) {
      const updatedData = await response.json();
      setChallenge(updatedData);
      setEditMode(false);
    }
  };

  if (!challenge) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      {editMode ? (
        <div>
          <h1 className="text-2xl font-bold">Edit Challenge</h1>
          <input
            className="border p-2 w-full mt-4"
            value={updatedChallenge.title}
            onChange={(e) =>
              setUpdatedChallenge({ ...updatedChallenge, title: e.target.value })
            }
          />
          <textarea
            className="border p-2 w-full mt-4"
            value={updatedChallenge.description}
            onChange={(e) =>
              setUpdatedChallenge({
                ...updatedChallenge,
                description: e.target.value,
              })
            }
          />
          <select
            className="border p-2 w-full mt-4"
            value={updatedChallenge.status}
            onChange={(e) =>
              setUpdatedChallenge({ ...updatedChallenge, status: e.target.value })
            }
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <div className="mt-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
              onClick={handleUpdate}
            >
              Save Changes
            </button>
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded"
              onClick={() => setEditMode(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold">{challenge.title}</h1>
          <p className="mt-4">{challenge.description}</p>
          <span
            className={`inline-block mt-2 ${
              challenge.status === "active" ? "text-green-500" : "text-red-500"
            }`}
          >
            {challenge.status}
          </span>
          <div className="mt-4">
            <button
              className="px-4 py-2 bg-yellow-500 text-white rounded"
              onClick={() => setEditMode(true)}
            >
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminChallengeView;
