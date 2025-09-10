import React, { createContext, useContext, useState, useEffect } from "react";

export interface Button {
    label: string;
    href: string;
}

export interface SiteContent {
    section: string;
    title?: string;
    subtitle?: string;
    description?: string;
    image?: string;
    buttons?: Button[];
    link?: string;
    reverse?: boolean;
}

interface SiteContentContextType {
    contents: SiteContent[];
    setContents: React.Dispatch<React.SetStateAction<SiteContent[]>>;
    resetContents: () => void;
}

const SiteContentContext = createContext<SiteContentContextType | undefined>(
    undefined
);

// =======================
// Default Data (Fallback)
// =======================
const defaultContents: SiteContent[] = [
    // Data DUMMY: MASIH BELUM MENGAMBIL DARI BACKEND
    {
        section: "hero",
        title: "Judul Hero",
        subtitle: "Subjudul Hero",
        description: "Deskripsi Hero",
        image: "/images/laptop-code.png",
        buttons: [
            { label: "Pelajari", href: "/about" },
            { label: "Kontak", href: "/contact" },
        ],
    },
    {
        section: "why-mit",
        title: "FIT & GAP",
        description: "Proses analisa bisnis",
        image: "/images/fit-gap.png",
    },
    {
        section: "why-mit",
        title: "IMPLEMENTASI",
        description: "Proses setup database",
        image: "/images/implementasi.png",
    },
    {
        section: "why-mit",
        title: "MAINTENANCE",
        description: "Pemeliharaan sistem",
        image: "/images/maintenance.png",
    },
    {
        section: "memenuhi-mit",
        title: "Perusahaan Pemograman",
        description: "Kami sudah terbukti dipercaya...",
    },
    {
        section: "implementation",
        title: "Implementation Software System",
        description: "Maksi membantu anda...",
        image: "/images/team.png",
        reverse: false,
        link: "/implementation",
    },
    {
        section: "implementation",
        title: "Development IT System",
        description: "MIT juga menyediakan jasa development...",
        image: "/images/team2.png",
        reverse: true,
        link: "/development",
    },
    {
        section: "implementation",
        title: "Training Accurate Software",
        description: "Dipercaya lebih dari 10 tahun...",
        image: "/images/team.png",
        reverse: false,
        link: "/training",
    },
    {
        section: "implementation",
        title: "Sistem Integrasi API Accurate Online",
        description: "MIT menyediakan layanan sistem integrasi...",
        image: "/images/team2.png",
        reverse: true,
        link: "/api-integration",
    },
];

// =======================
// Provider
// =======================
export const SiteContentProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [contents, setContents] = useState<SiteContent[]>([]);

    // Ambil dari localStorage (persist data)
    useEffect(() => {
        const saved = localStorage.getItem("siteContents");
        if (saved) {
            setContents(JSON.parse(saved));
        } else {
            setContents(defaultContents);
        }
    }, []);

    // Simpan ke localStorage tiap ada perubahan
    useEffect(() => {
        if (contents.length > 0) {
            localStorage.setItem("siteContents", JSON.stringify(contents));
        }
    }, [contents]);

    // Reset ke default
    const resetContents = () => {
        localStorage.removeItem("siteContents");
        setContents(defaultContents);
    };

    return (
        <SiteContentContext.Provider
            value={{ contents, setContents, resetContents }}
        >
            {children}
        </SiteContentContext.Provider>
    );
};

// =======================
// Custom Hook
// =======================
export const useSiteContent = () => {
    const context = useContext(SiteContentContext);
    if (!context) {
        throw new Error("useSiteContent must be used within SiteContentProvider");
    }
    return context;
};
