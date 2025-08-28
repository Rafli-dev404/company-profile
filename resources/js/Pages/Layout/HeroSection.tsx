import React from "react";

export default function HeroSection() {
    return (
        <section className="bg-gray-900 text-white py-20 px-8 md:px-20">
            <div className="max-w-4xl mx-auto text-center">
                {/* Judul */}
                <h1 className="text-3xl md:text-5xl font-bold leading-snug mb-6">
                    Waktunya untuk fokus pada pertumbuhan bisnis Anda
                </h1>

                {/* Subjudul */}
                <p className="text-gray-300 text-base md:text-lg mb-10">
                    Biarkan kami mempercepat dan mengautomasikan proses akuntansi serta
                    keuangan bisnis agar Anda bisa terus maju dengan percaya diri
                </p>

                {/* Tombol */}
                <a
                    href="/contact"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full shadow-md transition"
                >
                    Hubungi Kami
                </a>
            </div>
        </section>
    );
}
