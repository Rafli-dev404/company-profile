import React from "react";
import LayoutAdmin from './Layout/LayoutAdmin';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Pastikan path shadcn sesuai

export default function Index() {
    // Data dummy untuk dashboard (akan diganti dengan data dari backend nanti)
    const stats = {
        totalUsers: 15,
        adminUsers: 3,
        lastLogin: "2025-09-04 15:00 WIB",
    };

    return (
        <LayoutAdmin title="Admin Dashboard">
            <section className="flex flex-col gap-6 px-4 py-6 min-h-[calc(100vh-64px)]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Jumlah Pengguna</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-2xl font-bold">{stats.totalUsers}</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Admin Aktif</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-2xl font-bold">{stats.adminUsers}</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Login Terakhir</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg">{stats.lastLogin}</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="w-full bg-white p-6 shadow-lg rounded-xl">
                    <h3 className="text-2xl font-bold mb-4">Selamat Datang di Dashboard Admin</h3>
                    <p className="mb-4">Kelola sistem PT Maksi Integrasi Teknologi dari sini. Gunakan menu di sidebar untuk navigasi.</p>
                    {/* Tambah konten lain seperti tabel atau grafik di masa depan */}
                </div>
            </section>
        </LayoutAdmin>
    );
}
