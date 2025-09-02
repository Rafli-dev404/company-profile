
import React from 'react';
import ExpertiseCardProps from '../Interfaces/ExpertiseInterface';

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-gradient-to-br from-purple-500 to-purple-400 rounded-xl p-6 text-white">
      <div className="mb-4">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-pink-100">{description}</p>
    </div>
  );
};

export default ExpertiseCard;
