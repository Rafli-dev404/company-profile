import React from 'react'
import ServiceCard from './ServiceCard'


const services = [
  {
    title: "Pengembangan aplikasi",
    description:
      "Kami menciptakan aplikasi yang disesuaikan dengan kebutuhan spesifik bisnis Anda. Mulai dari aplikasi mobile, web, hingga solusi enterprise, tim kami siap mengubah ide Anda menjadi kenyataan yang berdampak.",
  },
  {
    title: "Integrasi Sistem",
    description:
      "Kami menghubungkan berbagai sistem dan platform yang berbeda untuk menciptakan ekosistem digital yang efisien dan terhubung. Dengan pendekatan integrasi yang canggih, kami memastikan bahwa seluruh data dan sistem Anda dapat bekerja selaras dan optimal.",
  },
  {
    title: "Deployment Solusi",
    description:
      "Kami tidak hanya membangun solusi, tetapi juga memastikan proses implementasi berjalan cepat, aman, dan sesuai dengan standar industri. Kami percaya bahwa keberhasilan sebuah sistem tidak hanya ditentukan oleh kualitas pengembangannya, tetapi juga oleh implementasi dalam tahap deployment.",
  },
  {
    title: "Identity and Access Management (IAM)",
    description: "Layanan untuk mengelola autentikasi dan otorisasi pengguna di berbagai sistem yang terintegrasi.",
  },
  {
    title: "Database Integration Services",
    description:
      "Layanan yang memungkinkan integrasi dan pengelolaan data antar-basis data atau antara basis data dan aplikasi.",
  },
  {
    title: "API Services",
    description:
      "Layanan yang memungkinkan aplikasi atau sistem berbeda untuk berkomunikasi dan berbagi data secara real-time. API berfungsi sebagai perantara untuk mengintegrasikan fungsi antar-platform.",
  },
]

export default function ServicesSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#E45EFC] via-50% via-[#A5DBFB] to-[#387AFF] pt-7">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-left mb-12 py-20">
          <h2 className="text-4xl font-bold text-black mb-4">Our Service</h2>
          <p className="text-black text-lg">Temukan solusi anda di Maksi Integrasi Teknologi.</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 -mt-10">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

