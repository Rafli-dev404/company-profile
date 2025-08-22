import React from "react";
import Navbar from "@/Components/Navbar";
import LayoutMain from "../Layout/LayoutMain";

export default function Index() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#E45EFC] via-50% via-[#A5DBFB] to-[#387AFF]">
            <Navbar />
            <section className="px-16 py-20">
                <h2 className="text-4xl font-bold text-white mb-4">Our Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <h3 className="text-lg font-semibold">Product A</h3>
                        <p className="text-gray-600">Solusi manajemen bisnis modern.</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <h3 className="text-lg font-semibold">Product B</h3>
                        <p className="text-gray-600">Integrasi sistem berbasis cloud.</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <h3 className="text-lg font-semibold">Product C</h3>
                        <p className="text-gray-600">Platform e-commerce pintar.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
