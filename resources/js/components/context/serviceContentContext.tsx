import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface Service {
    id: number;
    title: string;
    description: string;
    features?: string[];
    image?: string;
    link?: string;
    location?: string;
    bg?: "white" | "gradient";
}

interface ServiceContextProps {
    services: Service[];
    setServices: React.Dispatch<React.SetStateAction<Service[]>>;
    resetServices: () => void;
}

const defaultServices: Service[] = [
    {
        id: 1,
        title: "Pengembangan Aplikasi",
        description: "Kami menciptakan aplikasi yang disesuaikan dengan kebutuhan spesifik bisnis Anda.",
        features: ["Aplikasi Mobile", "Aplikasi Web", "Solusi Enterprise", "Custom sesuai kebutuhan"],
        image: "/images/service-app.png",
        link: "/service/pengembangan-aplikasi",
        bg: "white",
    },
    {
        id: 2,
        title: "Integrasi Sistem",
        description: "Kami menghubungkan berbagai sistem agar saling terhubung dengan lancar.",
        features: ["Integrasi API", "Konektivitas antar sistem", "Sinkronisasi data", "Efisiensi proses bisnis"],
        image: "/images/service-integration.png",
        link: "/service/integrasi-sistem",
        bg: "white",
    },
    {
        id: 3,
        title: "Deployment Solusi",
        description: "Kami memastikan implementasi sistem berjalan cepat, aman, dan sesuai standar industri.",
        features: ["Setup server & cloud", "Deployment cepat", "Keamanan standar industri", "Dukungan teknis penuh"],
        image: "/images/deployment.png",
        link: "/service/deployment-solusi",
        bg: "white",
    },
];

const ServiceContext = createContext<ServiceContextProps | undefined>(undefined);

export const ServiceProvider = ({ children }: { children: ReactNode }) => {
    const [services, setServices] = useState<Service[]>(() => {
        const saved = localStorage.getItem("services");
        return saved ? JSON.parse(saved) : defaultServices;
    });

    // setiap kali ada perubahan, simpan ke localStorage
    useEffect(() => {
        localStorage.setItem("services", JSON.stringify(services));
    }, [services]);

    const resetServices = () => setServices(defaultServices);

    return (
        <ServiceContext.Provider value={{ services, setServices, resetServices }}>
            {children}
        </ServiceContext.Provider>
    );
};

export const useService = () => {
    const context = useContext(ServiceContext);
    if (!context) {
        throw new Error("useService must be used within a ServiceProvider");
    }
    return context;
};
