import React from "react";
import { useForm } from "@inertiajs/react";

export default function LoginForm() {

    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Route masih dummy
        post("/login", {
            onSuccess: () => {
                // Pengalihan ditangani oleh backend
            },
            onError: (errors) => {
                console.log("Login gagal:", errors);
            },
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your email"
                />
                {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                    type="password"
                    value={data.password}
                    onChange={(e) => setData("password", e.target.value)}
                    className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your password"

                />
                {errors.password && (
                    <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
            </div>
            <button
                type="submit"
                disabled={processing}
                className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
            >
                {processing ? "Logging in..." : "Login"}
            </button>
        </form>
    );
}
