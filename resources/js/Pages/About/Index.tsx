// resources/js/Pages/About/Index.tsx
import React from "react";
import Navbar from "@/Components/Navbar";
import LayoutMain from "../Layout/LayoutMain";

export default function Index() {
    return (
        <LayoutMain title="About Us">
            <section className="px-16 py-20">
                <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
                <p className="text-lg text-white max-w-2xl">
                    Kami adalah perusahaan teknologi yang berfokus pada solusi digital inovatif.
                    Dengan tim profesional berpengalaman, kami membantu bisnis berkembang
                    melalui layanan IT, integrasi sistem, dan pengembangan aplikasi modern.
                </p>
            </section>
        </LayoutMain>
    );
}
