import React from 'react'
import LayoutMain from '../Layout/LayoutMain'
import Footer from '../Layout/Footer'
import TeamSection from './Components/TeamSection'
import { TeamMember } from './Interface/TeamInterface'
import TeamCard from './Components/TeamCard'

export default function Index() {
  const teamMembers: TeamMember[] = [
    // TODO: data masih dummy belum  diambil dari backend
    {
      id: 1,
      name: 'Agus Risan',
      title: 'Chief Officer',
      image: '/images/IMG_4510.JPG',
      instagram: 'https://instagram.com/agus_risan',
      linkedin: 'https://linkedin.com/in/agus-risan',
    },
    {
      id: 2,
      name: 'Yopie Hilman',
      title: 'Chief Officer',
      image: "/images/IMG_1430.JPG",
      instagram: 'https://instagram.com/yopie_hilman',
      linkedin: 'https://linkedin.com/in/yopie-hilman',
    },
    {
      id: 3,
      name: "Ihsan",
      title: "Backend Developer",
      image: "/images/IMG_7170.JPG",
      instagram: 'https://instagram.com/rina_susanti',
      linkedin: 'https://linkedin.com/in/rina-susanti',
    },
    {
      id: 4,
      name: "Ardien",
      title: "Frontend Developer",
      image: "/images/IMG_1429.JPG",
      instagram: 'https://instagram.com/budi_santoso',
      linkedin: 'https://linkedin.com/in/budi-santoso',
    },
    {
      id: 5,
      name: "Lukman",
      title: "Backend & Database",
      image: "/images/IMG_1431.JPG",
      instagram: 'https://instagram.com/lina_wijaya',
      linkedin: 'https://linkedin.com/in/lina-wijaya',
    },
    {
      id: 6,
      name: "Anna",
      title: "UI/UX Designer",
      image: "/images/IMG_1428.JPG",
      instagram: 'https://instagram.com/dedi_pratama',
      linkedin: 'https://linkedin.com/in/dedi-pratama',
    },
    {
      id: 7,
      name: "Hanifah",
      title: "Admin MIT",
      image: "/images/IMG_1427.JPG",
      instagram: 'https://instagram.com/siti_aisyah',
      linkedin: 'https://linkedin.com/in/siti-aisyah',
    },
  ];

  return (
    <LayoutMain title="Our Team">
      <TeamSection teamMembers={teamMembers} />
    </LayoutMain>
  );
}
