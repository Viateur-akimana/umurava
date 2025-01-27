import React from 'react';
import Image from 'next/image';

const collaborators = [
  { name: 'Tori', img: '/tori.png' },
  { name: 'GDG Kigali', img: '/gdg_kigali.png' },
  { name: 'The Education Collaborative', img: '/educationcollaborative.png' },
  { name: 'Kepler', img: '/kepler.png' },
  { name: 'HiiL', img: '/hiil.png' },
  { name: 'CIBA', img: '/CIBA.png' },
  { name: 'ARED', img: '/ared.png' },
  { name: 'IGIHE', img: '/igihe.png' },
  { name: 'Viamo', img: '/viamo.png' },
  { name: 'Laterite', img: '/laterite.png' },
  { name: 'SokoFund', img: '/Sokofund.png' },
];

function Collaborators() {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-center text-2xl font-semibold mb-8">
        Join a few Educational Institutions using Skills Challenges by Umurava
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {collaborators.map((collaborator, index) => (
          <div key={index} className="flex items-center justify-center">
            <Image
              src={collaborator.img}
              alt={collaborator.name}
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collaborators;
