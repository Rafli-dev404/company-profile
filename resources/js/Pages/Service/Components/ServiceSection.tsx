import React from "react";
import { Link } from "@inertiajs/react";
import ServiceCard from "./ServiceCard";
import ServiceCardInterface from "../Interface/ServiceCardInterface";
import ServiceFeaturesSection from "./ServiceFeaturesSection";

export default function ServiceSection() {
  const services: ServiceCardInterface[] = [
    {
      title: "Pengembangan Aplikasi",
      description:
        "Kami menciptakan aplikasi yang disesuaikan dengan kebutuhan spesifik bisnis Anda. Mulai dari aplikasi mobile, web, hingga solusi enterprise.",
      features: [
        "Aplikasi Mobile",
        "Aplikasi Web",
        "Solusi Enterprise",
        "Custom sesuai kebutuhan",
      ],
      image: "/images/service-app.png",
      link: "/service/pengembangan-aplikasi",
      bg: "white",
    },
    {
      title: "Integrasi Sistem",
      description:
        "Kami menghubungkan berbagai sistem dan platform yang dimiliki perusahaan Anda agar saling terhubung dengan lancar.",
      features: [
        "Integrasi API",
        "Konektivitas antar sistem",
        "Sinkronisasi data",
        "Efisiensi proses bisnis",
      ],
      image: "/images/service-integration.png",
      link: "/service/integrasi-sistem",
      bg: "white",
    },
    {
      title: "Deployment Solusi",
      description:
        "Kami memastikan implementasi sistem berjalan cepat, aman, dan sesuai standar industri.",
      features: [
        "Setup server & cloud",
        "Deployment cepat",
        "Keamanan standar industri",
        "Dukungan teknis penuh",
      ],
      image: "/images/deployment.png",
      link: "/service/deployment-solusi",
      bg: "white",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="px-6 pt-32 pb-16 flex flex-col items-start min-h-screen relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div>
            <h1 className="text-6xl font-bold text-black mb-6">Our Service</h1>
            <p className="text-xl leading-relaxed text-gray-800 mb-8">
              Semua layanan dari Maksi dirancang untuk mendukung transformasi
              digital perusahaan Anda.
            </p>
            <div className="text-gray-700 text-lg">
              <Link href="/" className="hover:underline">
                Beranda
              </Link>{" "}
              <span className="mx-1">›</span>
              Service
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/service-hero1.png"
              alt="Service"
              className="max-w-md rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* List Service */}
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />

      ))}
      {/* Tambahan Section */}
      <ServiceFeaturesSection />

    </>
  );
}
