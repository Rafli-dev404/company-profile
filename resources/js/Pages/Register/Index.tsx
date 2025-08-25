import React from "react";
import LayoutMain from "../Layout/LayoutMain";
import { Link } from "@inertiajs/react";

export default function Register() {
    return (
        <LayoutMain title="Register">
            <section className="flex justify-center px-16 py-20 min-h-[100vh]">
                <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-xl">
                    <h3 className="text-xl font-bold mb-4 text-center">Register</h3>

                    {/* Form register */}
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Nama
                            </label>
                            <input
                                type="text"
                                name="name"
                                className="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-200"
                                placeholder="Masukkan nama"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-200"
                                placeholder="Masukkan email"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                className="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-200"
                                placeholder="Masukkan password"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-md shadow hover:opacity-90"
                        >
                            Register
                        </button>
                    </form>

                    {/* Link ke login */}
                    <p className="text-sm text-center text-gray-600 mt-6">
                        Sudah punya akun?{" "}
                        <Link
                            href="/login"
                            className="text-blue-600 hover:underline font-medium"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </section>
        </LayoutMain>
    );
}
