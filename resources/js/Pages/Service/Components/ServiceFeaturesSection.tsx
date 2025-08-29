import React from "react"
import { Shield, BarChart3, Settings, Users } from "lucide-react"

export default function ServiceFeaturesSection() {
    const features = [
        {
            icon: <Settings className="w-8 h-8 text-purple-600" />,
            title: "Advanced Automation",
            description: "Automate repetitive tasks to improve efficiency and reduce manual errors.",
        },
        {
            icon: <Shield className="w-8 h-8 text-purple-600" />,
            title: "Robust Security",
            description: "Ensure data integrity and protect against threats with our robust security measures.",
        },
        {
            icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
            title: "Performance Analytics",
            description: "Gain insights into performance with detailed analytics and reporting tools.",
        },
        {
            icon: <Users className="w-8 h-8 text-purple-600" />,
            title: "User-Centric Design",
            description: "Intuitive interface designed for ease of use and enhanced user satisfaction.",
        },
    ]

    return (
        <section className="py-20 bg-gradient-to-r from-pink-400 via-purple-300 to-blue-300 text-center">
            <div className="max-w-4xl mx-auto mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
                    Service 3 is a comprehensive solution designed to address the specific needs of modern businesses.
                </h2>
                <p className="text-lg text-black">
                    This service is tailored to provide maximum value and support to our clients.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {features.map((feature, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-xl transition"
                    >
                        {feature.icon}
                        <h3 className="text-lg font-semibold text-black mt-4 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
