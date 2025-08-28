import React from "react";
import LayoutMain from "../Layout/LayoutMain";
import { Link, usePage } from "@inertiajs/react";
import { CheckCircle2 } from "lucide-react";

export default function Show() {
    const { url } = usePage();
    const model = url.split("/").pop();

    const products: Record<string, any> = {
        "1": {
            name: "Maximple",
            title: "Maximple (Import Excel to Accurate Online)",
            heroImage: "/images/product-hero.png",
            detailImage: "/images/product-detail.png",
            description:
                "Maximple merupakan produk atau software dari Maksi yang berfungsi untuk mempermudah import data excel ke Accurate hanya dengan 1 kali klik.",
            features: [
                "Jurnal umum",
                "Pembayaran",
                "Faktur Penjualan",
                "Retur Penjualan",
                "Uang Muka Penjualan",
                "Penerimaan Penjualan",
            ],
        },
        "2": {
            name: "Maxcode",
            title: "Maxcode (Print / Scan Barcode)",
            heroImage: "/images/product-hero.png",
            detailImage: "/images/product-maxcode.png",
            description:
                "Maxcode membantu integrasi custom antara Accurate dengan sistem lain.",
            features: ["API Integration", "Custom Workflow", "Realtime Sync"],
        },
        "3": {
            name: "Ajuin",
            title: "AJUIN / Software Cash Advance & Reimbursement",
            heroImage: "/images/product-hero.png",
            detailImage: "/images/product-ajuin.png",
            description:
                "Ajuin mempermudah karyawan melakukan pengajuan dan pertanggungjawaban uang perjalanan.",
            features: [
                "Auto Sync data dari Accurate",
                "Pengajuan",
                "Approval",
                "Pencairan & Pertanggungjawaban",
            ],
        },
        "4": {
            name: "Maxipos",
            title: "Maxipos (Konsolidasi Laporan AOL)",
            heroImage: "/images/product-hero.png",
            detailImage: "/images/product-maxipos.png",
            description:
                "Aplikasi untuk mempermudah melakukan penggabungan laporan keuangan.",
            features: [
                "Upload report neraca dari Accurate",
                "Upload report laba rugi dari Accurate",
                "Jurnal Eliminasi",
                "Report Neraca (sebelum & sesudah eliminasi)",
                "Report Laba Rugi (sebelum & sesudah eliminasi)",
            ],
        },
    };

    const product = products[model ?? ""];

    if (!product) {
        return (
            <LayoutMain title="Produk tidak ditemukan">
                <div className="py-32 text-center">
                    <h1 className="text-3xl font-bold">Produk tidak ditemukan</h1>
                    <Link href="/" className="text-blue-600 underline">
                        Kembali ke Home
                    </Link>
                </div>
            </LayoutMain>
        );
    }

    return (
        <LayoutMain title={`Produk | ${product.name}`}>
            <div className="px-6 pt-32 pb-16 flex flex-col items-start relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
                    <div>
                        <h1 className="text-6xl font-bold text-black mb-6">{product.title}</h1>
                        <p className="text-xl leading-relaxed text-gray-800 mb-8">
                            {product.description}
                        </p>
                        <div className="text-gray-700 text-lg">
                            <Link href="/" className="hover:underline">
                                Home
                            </Link>{" "}
                            <span className="mx-1">›</span>
                            <Link href="/product" className="hover:underline">
                                Produk
                            </Link>{" "}
                            <span className="mx-1">›</span>
                            {product.name}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src={product.heroImage}
                            alt={product.name}
                            className="max-w-md rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </div>

            <section className="bg-white py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-6">
                    <div className="relative flex justify-center">
                        <div className="absolute -top-6 -left-6 w100 h-100 bg-yellow-400 rounded-3xl -z-10"></div>
                        <img
                            src={product.detailImage}
                            alt={product.name}
                            className="rounded-xl shadow-lg relative"
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
                        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                            {product.description}
                        </p>

                        <ul className="space-y-3 mb-8">
                            {product.features.map((item: string, index: number) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                                    <span className="text-gray-800">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="#"
                            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg shadow-md transition"
                        >
                            Demo Produk!
                        </a>
                    </div>
                </div>
            </section>
        </LayoutMain>
    );
}
