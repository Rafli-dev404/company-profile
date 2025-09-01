import React from 'react'
import { Link } from "@inertiajs/react"

interface TeamMember {
  id: number
  name: string
  position: string
  image: string
}

interface TeamCardProps {
  member: TeamMember
}

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <div className="flex-shrink-0 text-center">
      <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
        <img
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          width={192}
          height={192}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-semibold text-lg text-gray-900">{member.name}</h3>
      <p className="text-gray-600">{member.position}</p>
    </div>
  )
}

export default function TeamSection() {
  const teamData: TeamMember[] = [
    {
      id: 1,
      name: "Ihsan",
      position: "Backend Developer",
      image: "/images/IMG_7170.JPG",
    },
    {
      id: 2,
      name: "Ardien",
      position: "Frontend Developer",
      image: "/images/IMG_1429.JPG",
    },
    {
      id: 3,
      name: "Lukman",
      position: "Backend & Database",
      image: "/images/IMG_1431.JPG",
    },
    {
      id: 4,
      name: "Anna",
      position: "UI/UX Designer",
      image: "/images/IMG_1428.JPG",
    },
    {
      id: 5,
      name: "Pak Yopie",
      position: "Team MIT",
      image: "/images/IMG_1430.JPG",
    },
    {
      id: 6,
      name: "Pak Agus",
      position: "Team MIT",
      image: "/images/IMG_4510.JPG",
    },
    {
      id: 7,
      name: "Pak Asep",
      position: "Team MIT",
      image: "/images/IMG_4516.JPG",
    },
    {
      id: 8,
      name: "Hanifah",
      position: "Admin MIT",
      image: "/images/IMG_1427.JPG",
    },
  ]

  return (
    <section className="py-32 px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-balance">
              Hemat waktu & uang dengan memilih kami.
            </h2>
            <p className="text-gray-600 text-xl mb-8 leading-relaxed">
              Kami terus berupaya untuk menghadirkan solusi untuk meningkatkan produktivitas dengan mempermudah kegiatan
              operasional perusahaan Anda.
            </p>
            <Link href="/team">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Semua Team
              </button>
            </Link>
          </div>

          {/* Right Content - Team Members */}
          <div>
            <h3 className="text-xl text-center font-semibold text-gray-900 mb-6">Team Maksi Integrasi teknologi</h3>
            <div className="overflow-x-auto">
              <div className="flex gap-8 pb-4" style={{ width: "max-content" }}>
                {teamData.map((member) => (
                  <TeamCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

