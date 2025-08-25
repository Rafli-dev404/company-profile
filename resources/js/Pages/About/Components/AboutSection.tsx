import React from "react"
import { useState, useEffect } from "react"
import Navbar from "@/Components/Navbar"

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
    console.log("[v0] Vision & Mission button clicked, showButton state:", showButton)
    const visionSection = document.getElementById("vision-mission-section")
    if (visionSection) {
      console.log("[v0] Scrolling to vision section")
      visionSection.scrollIntoView({ behavior: "smooth" })
      setTimeout(() => {
        console.log("[v0] Hiding button after scroll")
        setShowButton(false)
      }, 1000)
    } else {
      console.log("[v0] Vision section not found")
    }
  }

  console.log("[v0] Component rendered, showButton:", showButton)

  return (
    <div className="px-6 py-32 flex flex-col items-start min-h-screen relative">
      <div className="max-w-4xl ml-16 mt-16">
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

      <div className="h-48"></div>

      <div id="vision-mission-section" className="relative w-full max-w-6xl mt-32 mx-auto">
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
          <svg width="60" height="200" viewBox="0 0 60 200" className="text-black-300">
            <circle cx="10" cy="20" r="4" fill="currentColor" />
            <line x1="10" y1="24" x2="10" y2="60" stroke="currentColor" strokeWidth="2" />
            <line x1="10" y1="60" x2="30" y2="60" stroke="currentColor" strokeWidth="2" />
            <line x1="30" y1="60" x2="30" y2="100" stroke="currentColor" strokeWidth="2" />
            <circle cx="30" cy="100" r="4" fill="currentColor" />
            <line x1="30" y1="104" x2="30" y2="140" stroke="currentColor" strokeWidth="2" />
            <line x1="30" y1="140" x2="10" y2="140" stroke="currentColor" strokeWidth="2" />
            <line x1="10" y1="140" x2="10" y2="180" stroke="currentColor" strokeWidth="2" />
            <circle cx="10" cy="180" r="4" fill="currentColor" />
          </svg>
        </div>

        <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
          <svg width="60" height="200" viewBox="0 0 60 200" className="text-black-300">
            <circle cx="50" cy="30" r="4" fill="currentColor" />
            <line x1="50" y1="34" x2="50" y2="70" stroke="currentColor" strokeWidth="2" />
            <line x1="50" y1="70" x2="30" y2="70" stroke="currentColor" strokeWidth="2" />
            <line x1="30" y1="70" x2="30" y2="110" stroke="currentColor" strokeWidth="2" />
            <circle cx="30" cy="110" r="4" fill="currentColor" />
            <line x1="30" y1="114" x2="30" y2="150" stroke="currentColor" strokeWidth="2" />
            <line x1="30" y1="150" x2="50" y2="150" stroke="currentColor" strokeWidth="2" />
            <line x1="50" y1="150" x2="50" y2="170" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="170" r="4" fill="currentColor" />
          </svg>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-5xl font-bold text-black mb-2">Our Vision & Mission</h3>
          <p className="text-xl text-gray-600">PT Maksi Integrasi Teknologi</p>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-12 shadow-xl border border-gray-100 max-w-4xl w-full">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mr-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path
                    d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h4 className="text-4xl font-bold text-black">Our Vision</h4>
            </div>
            <p className="text-xl leading-relaxed text-gray-800">
              Menjadi pemimpin dalam solusi teknologi untuk pengelolaan bisnis yang inovatif dan terintegrasi.
            </p>
          </div>

          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-12 shadow-xl border border-gray-100 max-w-4xl w-full">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mr-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                  <path d="M12 2v4M12 18v4M22 12h-4M6 12H2" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h4 className="text-4xl font-bold text-black">Our Mission</h4>
            </div>
            <p className="text-xl leading-relaxed text-gray-800">
              Menyediakan aplikasi pengelolaan bisnis yang intuitif, aman, serta terintegrasi, untuk meningkatkan
              efisiensi dan pertumbuhan bisnis melalui layanan berkualitas dan adaptasi teknologi terkini.
            </p>
          </div>
        </div>
      </div>

      {showButton && (
        <div className="fixed bottom-8 right-8 z-10">
          <button
            onClick={handleVisionMissionClick}
            className="px-4 py-2 rounded-lg text-xl font-semibold hover:text-blue-600 hover:white transition-all duration-200 "
          >
            Vision & Mission
          </button>
        </div>
      )}
    </div>
  )
}
