import React from 'react';
import { TeamMember } from '../Interface/TeamInterface';


const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="relative">
      <div className="mt-20 w-full h-150 overflow-hidden rounded-lg">
        <img src={member.image} alt={`${member.name}'s profile`} className="w-full h-full object-cover" />
      </div>
      <div className="mt-2 text-center">
        <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
        <p className="text-md text-gray-800">{member.title}</p>
        <p className="text-lg text-bold">Maksi Integrasi Teknologi</p>
        <div className="flex justify-center mt-5 space-x-2">
          {member.instagram && (
            <a href={member.instagram} target="_blank" rel="noopener noreferrer">

            </a>
          )}
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">

            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
