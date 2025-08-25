import React from "react";
import Navbar from "@/Pages/Layout/Navbar";

export default function Index() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#E45EFC] via-50% via-[#A5DBFB] to-[#387AFF]">
            <Navbar />
            <section className="px-16 py-20">
                <h2 className="text-4xl font-bold text-white mb-6">Contact Us</h2>
                <form className="bg-white p-8 rounded-xl shadow-md max-w-lg">
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input type="text" className="w-full border px-4 py-2 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input type="email" className="w-full border px-4 py-2 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Message</label>
                        <textarea className="w-full border px-4 py-2 rounded-md"></textarea>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                        Send
                    </button>
                </form>
            </section>
        </div>
    );
}
