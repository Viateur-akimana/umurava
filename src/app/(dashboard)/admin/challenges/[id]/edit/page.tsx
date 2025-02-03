// "use client"

// import EditChallengeForm from '@/components/layout/EditChallengeForm';
// import { useChallengeById } from '@/hooks/useChallenges';
// import { useParams } from 'next/navigation';

// const ChallengeEditPage = () => {

//   const { id } = useParams();
//   const { challenge, loading } = useChallengeById(id as string);

//   if (loading) return <p>Loading...</p>;


//   return (
//     <div className="flex mx-auto top-4 right-4 sm:px-4">
//       <EditChallengeForm challenge={challenge} />
//     </div>
//   )
// }

// export default ChallengeEditPage

"use client";

import EditChallengeForm from "@/components/layout/EditChallengeForm";
import { useChallengeById } from "@/hooks/useChallenges";
import { useParams } from "next/navigation";

const ChallengeEditPage = () => {
  const { id } = useParams();
  const { challenge, loading } = useChallengeById(id as string);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex mx-auto top-4 right-4 sm:px-4">
      <EditChallengeForm challenge={challenge} />
    </div>
  );
};

export default ChallengeEditPage;
