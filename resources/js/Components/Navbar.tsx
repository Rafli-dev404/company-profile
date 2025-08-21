// resources/js/Components/Navbar.tsx
import { Link } from "@inertiajs/react";
import React from "react";

export default function Navbar() {
    return (
        <header className="flex justify-between items-center px-10 py-6 bg-white shadow-md">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <img src="/images/logo.png" alt="Logo" className="h-8 w-8" />
                <h1 className="text-base font-semibold text-gray-800">
                    PT Maksi Integrasi Teknologi
                </h1>
            </div>
            {/* Menu */}
            <nav className="flex gap-6 text-gray-700 font-medium ml-auto">
                <Link href='/' className='hover:text-blue-600'>Home</Link>
                <Link href='/about' className='hover:text-blue-600'>About us</Link>
                <Link href='/service' className='hover:text-blue-600'>Service</Link>
                <Link href='/product' className='hover:text-blue-600'>Product</Link>
                <Link href='/contact' className='hover:text-blue-600'>Contact Us</Link>
            </nav>
            {/* Login */}
            <button className="ml-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2 rounded-full font-medium shadow hover:opacity-90">
                Login
            </button>
        </header>
    );
}
