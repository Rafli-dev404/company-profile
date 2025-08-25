import React from "react";
import LayoutMain from "../Layout/LayoutMain";
import LoginForm from "@/Components/LoginForm";
import { Link } from "@inertiajs/react";

export default function Index() {
    return (
        <LayoutMain title="Login">
            <section className="flex justify-center px-16 py-20 min-h-[100vh]">
                <div className="relative w-full max-w-md bg-white p-8 shadow-lg rounded-xl">

                    {/* Tombol X */}
                    <Link
                        href="/"
                        className="absolute top-3 right-3 text-gray-500 hover:text-red-500 font-bold"
                    >
                        X
                    </Link>

                    <h3 className="text-xl font-bold mb-4 text-center">Login</h3>
                    <LoginForm />

                    {/* Tambahan link register */}
                    <p className="text-sm text-center text-gray-600 mt-6">
                        Kamu belum memiliki akun?{" "}
                        <Link
                            href="/register"
                            className="text-blue-600 hover:underline font-medium"
                        >
                            Register
                        </Link>
                    </p>
                </div>
            </section>
        </LayoutMain>
    );
}
