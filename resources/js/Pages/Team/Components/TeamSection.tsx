import React from 'react'
import { Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { TeamSectionProps, TeamMember } from '../Interface/TeamInterface';
import TeamCard from './TeamCard';

export default function TeamSection({ teamMembers }: TeamSectionProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E45EFC] via-50% via-[#A5DBFB] to-[#387AFF]">
      <div className="container mx-auto px-4 py-35">
        <div className="flex flex-col items-center gap-12 max-w-7xl mx-auto">
          {/* Teks di bagian atas */}
          <div className="space-y-6 text-center">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-black">Team</h1>
            </div>

            <div className="space-y-4 text-lg text-gray-800 max-w-lg mx-auto">
              <p>
                Kami terus berupaya untuk menghadirkan solusi untuk meningkatkan produktivitas dengan mempermudah
                kegiatan operasional perusahaan Anda.
              </p>
            </div>

            <nav className="text-gray-600 text-sm">
              <Link href="/" className="hover:text-gray-800 transition-colors">
                Beranda
              </Link>
              <span className="mx-2">▸</span>
              <span>Team</span>
            </nav>
          </div>

          {/* Kartu tim di bagian bawah */}
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {teamMembers.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
