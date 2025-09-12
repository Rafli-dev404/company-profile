import React from 'react';
import { TeamSectionProps } from '../Interface/TeamInterface';
import TeamCard from './TeamCard';
import { motion } from 'framer-motion';

// Variants untuk container card (stagger)
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3, // delay antar card
    },
  },
};

// Variants untuk judul dan paragraf
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const TeamSection: React.FC<TeamSectionProps> = ({ teamMembers }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E45EFC] via-[#A5DBFB] to-[#387AFF] py-20">
      <div className="container mx-auto px-4 pt-20">
        {/* Judul + paragraf */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate="show"
          variants={textVariants}
        >
          <h1 className="text-6xl font-bold text-black">Our Team</h1>
          <p className="text-gray-800 mt-4 max-w-xl mx-auto">
            Kami terus berupaya untuk menghadirkan solusi untuk meningkatkan produktivitas
            dengan mempermudah kegiatan operasional perusahaan Anda.
          </p>
        </motion.div>

        {/* Grid TeamCard dengan stagger */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TeamSection;
