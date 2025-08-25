import React from "react";
import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-[#E45EFC] via-[#A5DBFB] to-[#387AFF] text-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Kolom 1 */}
                <div>
                    <h4 className="font-bold text-lg mb-4">PERUSAHAAN</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/about" className="hover:underline">Tentang</Link></li>
                        <li><Link href="/lokasi" className="hover:underline">Lokasi</Link></li>
                        <li><Link href="/services" className="hover:underline">Servis</Link></li>
                        <li><Link href="/team" className="hover:underline">Tim</Link></li>
                        <li><Link href="/clients" className="hover:underline">Klien</Link></li>
                        <li><Link href="/partners" className="hover:underline">Mitra</Link></li>
                    </ul>
                </div>

                {/* Kolom 2 */}
                <div>
                    <h4 className="font-bold text-lg mb-4">PRODUK</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Maximple</a></li>
                        <li><a href="#" className="hover:underline">Maxcode</a></li>
                        <li><a href="#" className="hover:underline">AJUIN</a></li>
                        <li><a href="#" className="hover:underline">Accurate v5</a></li>
                        <li><a href="#" className="hover:underline">Kamus Akuntansi</a></li>
                        <li><a href="#" className="hover:underline">Konsolidasi AOL</a></li>
                    </ul>
                </div>

                {/* Kolom 3 */}
                <div>
                    <h4 className="font-bold text-lg mb-4">BANTUAN</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
                        <li><Link href="/contact" className="hover:underline">Hubungi Kami</Link></li>
                        <li><Link href="/privacy" className="hover:underline">Privasi</Link></li>
                        <li><Link href="/terms" className="hover:underline">Syarat & Ketentuan</Link></li>
                        <li><Link href="/career" className="hover:underline">Karir</Link></li>
                    </ul>
                </div>

                {/* Kolom 4 */}
                <div>
                    <h4 className="font-bold text-lg mb-4">PT MAKSI INTEGRASI TEKNOLOGI</h4>
                    <p className="text-sm mb-2">
                        Komplek Sanggar Hurip - Jl. Sanggar Kencana VIII No.3 RT. 001 RW. 003 <br />
                        Kelurahan Jatisari Kecamatan Buah Batu Kota Bandung Jawa Barat 40286
                    </p>
                    <p className="text-sm">📞 081322270002</p>
                    <p className="text-sm">✉️ admin@maksi.id</p>
                    <p className="text-sm">💬 Live Chat</p>
                </div>
            </div>

            {/* Bawah */}
            <div className="border-t border-gray-300 py-4 text-center text-sm flex flex-col md:flex-row justify-between items-center px-6 max-w-7xl mx-auto">
                <p className="text-gray-600">
                    © 2012-{new Date().getFullYear()} PT. Maksi Integrasi Teknologi | All Rights Reserved.
                </p>
                <div className="flex space-x-4 mt-2 md:mt-0 text-gray-700">
                    <a href="#" className="hover:text-black">Facebook</a>
                    <a href="#" className="hover:text-black">TikTok</a>
                    <a href="#" className="hover:text-black">Instagram</a>
                    <a href="#" className="hover:text-black">YouTube</a>
                </div>
            </div>
        </footer>
    );
}
