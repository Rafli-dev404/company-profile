import React from 'react';
import { TeamMember } from '../Interface/TeamInterface';
import { motion } from 'framer-motion';

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <motion.div
      className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, delay: 0.2 } }, // delay untuk gambar lebih lambat
      }}
    >
      {/* Container gambar */}
      <motion.div
        className="w-full relative pb-[100%] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }} // gambar muncul lebih perlahan
      >
        <img
          src={member.image}
          alt={member.name}
          className="absolute top-0 left-0 w-full h-full object-cover object-top"
          style={{ objectPosition: '50% 50%' }}
        />
      </motion.div>

      <div className="p-4 text-center">
        <h3 className="text-xl font-bold">{member.name}</h3>
        <p className="text-gray-700">{member.title}</p>
        <div className="flex justify-center mt-3 space-x-3">
          {member.instagram && (
            <a href={member.instagram} target="_blank" rel="noopener noreferrer">
              IG
            </a>
          )}
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
