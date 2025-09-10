import React from "react";
import LayoutAdmin from "./Layout/LayoutAdmin";
import { motion } from "framer-motion";
import { Users, FileText, Image, Settings } from "lucide-react";

export default function AdminDashboard() {
    const stats = [
        { title: "Users", value: "1,245", icon: Users, color: "bg-blue-500" },
        { title: "Posts", value: "324", icon: FileText, color: "bg-green-500" },
        { title: "Media", value: "87", icon: Image, color: "bg-purple-500" },
        { title: "Settings", value: "✔", icon: Settings, color: "bg-orange-500" },
    ];

    return (
        <LayoutAdmin title="Dashboard">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-8 rounded-2xl shadow-lg mb-8"
            >
                <h1 className="text-3xl font-extrabold mb-2">
                    Selamat Datang di Admin Dashboard 🎉
                </h1>
                <p className="text-lg opacity-90">
                    Maksi Integrasi Teknologi – Kelola konten website Anda dengan mudah dan cepat.
                </p>
            </motion.div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.5 }}
                        className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
                    >
                        <div className="flex items-center gap-4">
                            <div
                                className={`p-3 rounded-xl text-white ${stat.color}`}
                            >
                                <stat.icon className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">{stat.title}</p>
                                <h3 className="text-xl font-bold">{stat.value}</h3>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Info Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border border-indigo-200 shadow-md hover:shadow-lg transition"
            >
                <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="p-3 bg-indigo-500 rounded-xl text-white shadow">
                        🔑
                    </div>

                    {/* Content */}
                    <div>
                        <h2 className="text-xl font-bold text-gray-800 mb-2">
                            Panduan Admin
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Gunakan menu di <span className="font-semibold text-indigo-600">sidebar kiri</span>
                            untuk mengelola <strong>Home, About, Contact</strong> dan
                            bagian lain dari website Anda.
                            <br />
                            🚀 Mulailah dengan memilih halaman yang ingin Anda atur.
                        </p>
                    </div>
                </div>
            </motion.div>
        </LayoutAdmin>
    );
}
