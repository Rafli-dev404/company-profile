import React from "react";
import { Head, useForm, usePage, Link } from "@inertiajs/react";
import PageProps from "./Interface/LoginInterfaces";

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const { flash } = usePage<PageProps>().props;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post("/login", {
            onSuccess: () => { },
            onError: (err) => {
                console.log("Login gagal:", err);
            },
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E45EFC] via-50% via-[#A5DBFB] to-[#387AFF]">
            <Head title="Login" />
            <div className="relative w-full max-w-md bg-white p-8 rounded-lg shadow-lg">

                <Link
                    href="/"
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                >
                    ✕
                </Link>

                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login Admin</h2>
                {flash?.error && (
                    <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
                        {flash.error}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Masukkan email Anda"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={data.password}
                            onChange={(e) => setData("password", e.target.value)}
                            className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Masukkan password Anda"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition disabled:bg-purple-400"
                    >
                        {processing ? "Memproses..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}
