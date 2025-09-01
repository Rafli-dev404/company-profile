import React from 'react'

import Navbar from '@/Pages/Layout/Navbar'
import { Settings, Cloud, Network } from "lucide-react"

interface ExpertiseCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

function ExpertiseCard({ icon: Icon, title, description }: ExpertiseCardProps) {
  return (
    <div className="bg-gradient-to-br from-purple-500 to-purple-400 rounded-xl p-6 text-white">
      <div className="mb-4">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-pink-100">{description}</p>
    </div>
  )
}

export default function Page() {
  const expertiseData = [
    {
      id: 1,
      icon: Settings,
      title: "Custom Software Development",
      description: "We build bespoke software applications that streamline your operations and drive growth.",
    },
    {
      id: 2,
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Leverage the power of the cloud with our scalable and secure cloud solutions.",
    },
    {
      id: 3,
      icon: Network,
      title: "IT Consulting",
      description: "Our expert consultants provide strategic guidance to optimize your IT infrastructure.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-16">
              {/* Code Image Card - Full Width */}
              <div className="relative rounded-xl overflow-hidden bg-gray-900 h-[500px]">
                <img
                  src="/images/Developer programmer-Программист-разработчик.jpeg"
                  alt="Programming code with colorful syntax highlighting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-end justify-start z-10">
                  <div className="px-6 pb-8 max-w-4xl">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-600 bg-clip-text text-transparent text-balance">
                      Empowering Businesses with Innovative Technology Solutions
                    </h1>
                    <p className="text-base md:text-lg text-white/90 max-w-2xl">
                      Maksi Integrasi Teknologi is a leading provider of cutting-edge technology solutions, helping
                      businesses thrive in the digital age.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Expertise Section */}
        <section className="py-16 px-4 -mt-30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-left mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
              <p className="text-lg text-gray-600 max-w-2xl text-left">
                We offer a comprehensive suite of technology services tailored to meet the unique needs of your
                business.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {expertiseData.map((expertise) => (
                <ExpertiseCard
                  key={expertise.id}
                  icon={expertise.icon}
                  title={expertise.title}
                  description={expertise.description}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
