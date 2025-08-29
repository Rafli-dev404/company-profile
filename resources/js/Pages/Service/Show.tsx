import React from "react";
import LayoutMain from "../Layout/LayoutMain";
import { Link, usePage } from "@inertiajs/react";
import { CheckCircle2 } from "lucide-react";
import ServiceCard from "./Components/ServiceCard";

export default function Show() {
    const { url } = usePage();
    const model = url.split("/").pop();
    // Data Dummy Belum Menggunakan Dari Backend

    const services: Record<string, any> = {
        "1": {
            name: "Pengembangan Aplikasi",
            title: "Pengembangan Aplikasi",
            heroImage: "/images/service-hero.png",
            detailImage: "/images/service-consulting.png",
            description:
                "Layanan implementasi Accurate untuk membantu perusahaan Anda menggunakan software dengan efektif dan efisien.",
            features: [
                "Instalasi software",
                "Setup awal database",
                "Training karyawan",
                "Pendampingan awal",
            ],
        },
        "2": {
            name: "Integrasi Sistem",
            title: "    Integrasi Sistem",
            heroImage: "/images/service-hero.png",
            detailImage: "/images/service-consulting.png",
            description:
                "Konsultasi bisnis untuk optimalisasi penggunaan Accurate sesuai kebutuhan spesifik perusahaan.",
            features: ["Analisis kebutuhan", "Custom workflow", "Best practice", "Optimasi proses"],
            location: "Jakarta",
        },
        "3": {
            name: "Training",
            title: "Training Service",
            heroImage: "/images/service-hero.png",
            detailImage: "/images/service-consulting.png",
            description:
                "Pelatihan komprehensif untuk memastikan tim Anda memahami cara menggunakan Accurate secara maksimal.",
            features: ["Pelatihan onsite", "Pelatihan online", "Materi terstruktur", "Sertifikat"],
        },
        "4": {
            name: "Support",
            title: "Support Service",
            heroImage: "/images/service-hero.png",
            detailImage: "/images/service-consulting.png",
            description:
                "Dukungan teknis dan troubleshooting jika Anda mengalami kendala dalam penggunaan Accurate.",
            features: ["Technical support", "Troubleshooting", "Update sistem", "Pendampingan jarak jauh"],
        },
    };

    const service = services[model ?? ""];

    if (!service) {
        return (
            <LayoutMain title="Service tidak ditemukan">
                <div className="py-32 text-center">
                    <h1 className="text-3xl font-bold">Service tidak ditemukan</h1>
                    <Link href="/" className="text-blue-600 underline">
                        Kembali ke Home
                    </Link>
                </div>
            </LayoutMain>
        );
    }

    return (
        <LayoutMain title={`Service | ${service.name}`}>
            <div className="px-6 pt-32 pb-16 flex flex-col items-start relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
                    <div>
                        <h1 className="text-6xl font-bold text-black mb-6">{service.title}</h1>
                        <p className="text-xl leading-relaxed text-gray-800 mb-8">
                            {service.description}
                        </p>
                        <div className="text-gray-700 text-lg">
                            <Link href="/" className="hover:underline">
                                Home
                            </Link>{" "}
                            <span className="mx-1">›</span>
                            <Link href="/service" className="hover:underline">
                                Service
                            </Link>{" "}
                            <span className="mx-1">›</span>
                            {service.name}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src={service.heroImage}
                            alt={service.name}
                            className="max-w-md rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </div>
            <ServiceCard
                title={service.title}
                description={service.description}
                features={service.features}
                image={service.detailImage}
                location={service.location}
                link="/contact"
                reverse={false}
                bg="white"
            />
        </LayoutMain>
    );
}
