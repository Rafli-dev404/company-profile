import React from 'react'
import { Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

export default function TeamSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E45EFC] via-50% via-[#A5DBFB] to-[#387AFF]">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
          {/* Teks di sebelah kiri */}
          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-black">Team</h1>
            </div>

            <div className="space-y-4 text-lg text-gray-800 max-w-lg">
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

          {/* Foto di sebelah kanan */}
           <div className="flex-1 relative">
            <div className="flex items-end h-full min-h-[400px]">
              <div className="relative w-full">
              <img
                src="gambar.png"
                alt="Tim"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
