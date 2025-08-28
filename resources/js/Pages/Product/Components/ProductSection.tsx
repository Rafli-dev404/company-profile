import React from "react";
import { Link } from "@inertiajs/react";
import { CheckCircle2 } from "lucide-react";

export default function ProductSection() {
    return (
        <>
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
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative flex justify-center">
                        <div className="absolute -top-6 -left-6 w-78 h-78 bg-yellow-400 rounded-3xl -z-10"></div>
                        <img
                            src="/images/product-detail.png"
                            alt="Maximple"
                            className="rounded-xl shadow-lg relative"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            Maximple (Excel to Accurate Online)
                        </h2>
                        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                            Mengimport semua jenis transaksi dari Excel ke Accurate Online menjadi
                            sangat mudah, cepat, dan murah.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Jurnal umum",
                                "Pembayaran",
                                "Penerimaan Penjualan",
                                "Dan masih banyak modul lainnya",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                                    <span className="text-gray-800">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/produk/maximple"
                            className="font-semibold text-black underline hover:text-gray-700"
                        >
                            Pelajari lebih lanjut
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-[#E45EFC] via-[#A5DBFB] to-[#387AFF]">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            Maxcode (Print / Scan Barcode)
                        </h2>
                        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                            Software berbasis web yang terintegrasi dengan Accurate Online, memudahkan
                            pengguna untuk melakukan Print / Scan Barcode.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Print Barcode dengan input kode barang",
                                "Print Barcode ketika Penerimaan Barang",
                                "Update kode barcode ketika Penerimaan Barang dengan cara scan",
                                "Setting layout kertas label",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                                    <span className="text-gray-800">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/produk/maxcode"
                            className="font-semibold text-black underline hover:text-gray-700"
                        >
                            Pelajari lebih lanjut
                        </Link>
                    </div>
                    <div className="relative flex justify-center">
                        <div className="absolute -top-6 -right-6 w-78 h-78 bg-yellow-400 rounded-3xl -z-10"></div>
                        <img
                            src="/images/product-maxcode.png"
                            alt="Maxcode"
                            className="rounded-xl shadow-lg relative"
                        />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative flex justify-center">
                        <div className="absolute -top-6 -left-6 w-78 h-78 bg-yellow-400 rounded-3xl -z-10"></div>
                        <img
                            src="/images/product-ajuin.png"
                            alt="Maximple"
                            className="rounded-xl shadow-lg relative"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            UUDP (Uang Untuk di Pertanggung Jawabkan)
                        </h2>
                        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                            Sebuah aplikasi untuk mempermudah karyawan melakukan pengajuan uang perjalanan.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Auto Syc data dari Accurate",
                                "Pengajuan",
                                "Approval",
                                "Pencairan & Pertanggung Jawabanan",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                                    <span className="text-gray-800">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/produk/Ajuin"
                            className="font-semibold text-black underline hover:text-gray-700"
                        >
                            Pelajari lebih lanjut
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-[#E45EFC] via-[#A5DBFB] to-[#387AFF]">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            Konsolidasi Laporan AOL
                        </h2>
                        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                            Sebuah aplikasi untuk mempermudah melakukan penggabungan laporan keuangan.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Upload report neraca format dari accurate",
                                "Upload report laba rugi format dari accurate",
                                "Jurnal Eliminasi",
                                "Report Neraca ( sebelum eliminasi & sesudah eliminasi )",
                                "⁠Report Laba Rugi ( sebelum eliminasi & sesudah eliminasi )",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                                    <span className="text-gray-800">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/produk/Maxipos"
                            className="font-semibold text-black underline hover:text-gray-700"
                        >
                            Pelajari lebih lanjut
                        </Link>
                    </div>
                    <div className="relative flex justify-center">
                        <div className="absolute -top-6 -right-6 w-78 h-78 bg-yellow-400 rounded-3xl -z-10"></div>
                        <img
                            src="/images/product-maxipos.png"
                            alt="Maxipos"
                            className="rounded-xl shadow-lg relative"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}