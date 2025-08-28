import React from "react";
import { Link } from "@inertiajs/react";

export default function ProductSection() {
    return (
        <div className="px-6 pt-32 pb-16 flex flex-col items-start min-h-screen relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
                <div>
                    <h1 className="text-6xl font-bold text-black mb-6">Produk</h1>
                    <p className="text-xl leading-relaxed text-gray-800 mb-8">
                        Semua solusi dari Maksi telah dirancang secara khusus untuk meningkatkan
                        produktivitas dengan mempermudah kegiatan operasional perusahaan Anda.
                    </p>
                    <div className="text-gray-700 text-lg">
                        <Link href="/" className="hover:underline">
                            Beranda
                        </Link>{" "}
                        <span className="mx-1">›</span>
                        Produk
                    </div>
                </div>
                <div className="flex justify-center">
                    <img
                        src="/images/product-hero.png"
                        alt="Produk"
                        className="max-w-md rounded-xl shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
}
