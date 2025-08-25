import React from "react";

export default function SocialSection() {
    return (
        <section className="bg-white py-16 px-8 md:px-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Text */}
                <div className="text-center md:text-left max-w-3xl">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Ikuti Sosial Media Kami!
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg">
                        Yuk cek profil kami di <span className="font-bold text-black">🎵 TikTok</span>
                        dan dapatkan informasi yang menarik dari{" "}
                        <span className="font-bold text-black">#maksimediaindonesia</span>
                        untuk bisnis Anda.
                    </p>
                </div>

                {/* Tombol */}
                <div className="flex-shrink-0">
                    <a
                        href="https://www.tiktok.com/@maksimediaindonesia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full shadow-md transition"
                    >
                        Ikuti Kami
                    </a>
                </div>
            </div>
        </section>
    );
}
