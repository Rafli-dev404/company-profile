import Footer from "@/Pages/Layout/Footer";
import React from "react";


import { useState, useEffect } from "react"

export default function AboutSection() {
  const [showButton, setShowButton] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const visionSection = document.getElementById("vision-mission-section")
      if (visionSection) {
        const visionSectionTop = visionSection.offsetTop
        const scrollPosition = window.scrollY + window.innerHeight

        // Show button if user scrolls back up above the vision section
        if (window.scrollY < visionSectionTop - 200) {
          setShowButton(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleVisionMissionClick = () => {
    const visionSection = document.getElementById("vision-mission-section")
    if (visionSection) {
      visionSection.scrollIntoView({ behavior: "smooth" })
      setTimeout(() => {
        setShowButton(false)
      }, 1000)
    } else {
    }
  }


  return (

    <div className="px-6 py-30 flex flex-col items-start min-h-screen relative">
      <div className="max-w-4xl ml-16">
        <h1 className="text-6xl font-bold text-black mb-6">About Us</h1>
        <h2 className="text-2xl text-gray-800 mb-12">PT Maksi Integrasi Teknologi</h2>
        <div className="max-w-4xl">
          <p className="text-xl leading-relaxed text-gray-800 mb-16">
            Berawal dari PT Maksi Media Indonesia yang berdiri sejak 2019, kami telah banyak membantu berbagai
            perusahaan dari sektor manufaktur, jasa, hingga retail dalam implementasi sistem dan akuntansi. Seiring
            waktu, kebutuhan dunia usaha terhadap solusi teknologi yang lebih kompleks dan terintegrasi terus meningkat.
            Inilah yang mendorong lahirnya PT Maksi Integrasi Teknologi (MIT) pada November 2024. Dengan pengalaman yang
            kami bawa, MIT hadir sebagai mitra strategis untuk membantu bisnis Anda melalui pengembangan aplikasi,
            integrasi sistem, dan deployment solusi teknologi yang inovatif dan tepat guna.
          </p>
        </div>
      </div>
    </div>
  )
}
