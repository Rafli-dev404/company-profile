// resources/js/Pages/Admin/Index.jsx
import React from "react";
import LayoutAdmin from './Layout/LayoutAdmin';

export default function Index() {
    return (
        <LayoutAdmin title="Admin Dashboard">
            <section className="flex justify-center px-16 py-20 min-h-[100vh]">
                <div className="w-full max-w-4xl bg-white p-8 shadow-lg rounded-xl">
                    <h3 className="text-2xl font-bold mb-4 text-center">Selamat Datang di Dashboard Admin</h3>
                    <p>Ini adalah halaman admin!</p>
                </div>
            </section>
        </LayoutAdmin>
    );
}
