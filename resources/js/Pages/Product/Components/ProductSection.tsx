import React from "react";
import { Link } from "@inertiajs/react";
import ProductCard from "./ProductCard";
import ProductCardProps from "../Interface/ProductCardInterface";

export default function ProductSection() {
    const products: ProductCardProps[] = [
        {
            title: "Maximple (Excel to Accurate Online)",
            description:
                "Mengimport semua jenis transaksi dari Excel ke Accurate Online menjadi sangat mudah, cepat, dan murah.",
            features: [
                "Jurnal umum",
                "Pembayaran",
                "Penerimaan Penjualan",
                "Dan masih banyak modul lainnya",
            ],
            image: "/images/product-detail.png",
            link: "/produk/maximple",
            reverse: false,
            bg: "white",
        },
        {
            title: "Maxcode (Print / Scan Barcode)",
            description:
                "Software berbasis web yang terintegrasi dengan Accurate Online, memudahkan pengguna untuk melakukan Print / Scan Barcode.",
            features: [
                "Print Barcode dengan input kode barang",
                "Print Barcode ketika Penerimaan Barang",
                "Update kode barcode ketika Penerimaan Barang dengan cara scan",
                "Setting layout kertas label",
            ],
            image: "/images/product-maxcode.png",
            link: "/produk/maxcode",
            reverse: true,
            bg: "gradient",
        },
        {
            title: "UUDP (Uang Untuk di Pertanggung Jawabkan)",
            description:
                "Sebuah aplikasi untuk mempermudah karyawan melakukan pengajuan uang perjalanan.",
            features: [
                "Auto Syc data dari Accurate",
                "Pengajuan",
                "Approval",
                "Pencairan & Pertanggung Jawabanan",
            ],
            image: "/images/product-ajuin.png",
            link: "/produk/Ajuin",
            reverse: false,
            bg: "white",
        },
        {
            title: "Konsolidasi Laporan AOL",
            description:
                "Sebuah aplikasi untuk mempermudah melakukan penggabungan laporan keuangan.",
            features: [
                "Upload report neraca format dari accurate",
                "Upload report laba rugi format dari accurate",
                "Jurnal Eliminasi",
                "Report Neraca ( sebelum eliminasi & sesudah eliminasi )",
                "Report Laba Rugi ( sebelum eliminasi & sesudah eliminasi )",
            ],
            image: "/images/product-maxipos.png",
            link: "/produk/Maxipos",
            reverse: true,
            bg: "gradient",
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <div className="px-6 pt-32 pb-16 flex flex-col items-start min-h-screen relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
                    <div>
                        <h1 className="text-6xl font-bold text-black mb-6">
                            Produk
                        </h1>
                        <p className="text-xl leading-relaxed text-gray-800 mb-8">
                            Semua solusi dari Maksi telah dirancang secara
                            khusus untuk meningkatkan produktivitas dengan
                            mempermudah kegiatan operasional perusahaan Anda.
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

            {/* List Produk */}
            {products.map((product, index) => (
                <ProductCard key={index} {...product} />
            ))}
        </>
    );
}
