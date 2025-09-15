import Navbar from '@/Pages/Layout/Navbar'
import { Head } from '@inertiajs/react'
import React from 'react'
import Footer from './Footer'
import HeroSection from './HeroSection';
import SocialSection from './SocialSection';
import LayoutMainProps from './Interface/LayoutMainInterface';

export default function LayoutMain({ children, title }: LayoutMainProps) {
  return (
    <>
      {/* Navbar + Head */}
      <Navbar />
      <Head title={title} />

      {/* Bagian konten utama dengan bg gradient */}
      <div className="min-h-full bg-gradient-to-br from-[#E45EFC] via-[#A5DBFB] to-[#387AFF]">
        {children}
      </div>

      {/* Section-section bawaan layout */}
      <HeroSection />
      <SocialSection />
      <Footer />
    </>
  )
}

