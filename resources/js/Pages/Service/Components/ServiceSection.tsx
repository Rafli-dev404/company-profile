import React from "react";
import { Link } from "@inertiajs/react";
import ServiceCard from "./ServiceCard";
import ServiceFeaturesSection from "./ServiceFeaturesSection";
import { useService } from "@/components/context/serviceContentContext";

export default function ServiceSection() {
  const { services } = useService(); // ambil dari context

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
        <ServiceCard key={service.id || index} {...service} />
      ))}

      {/* Tambahan Section */}
      <ServiceFeaturesSection />
    </>
  );
}
