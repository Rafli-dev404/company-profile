import React, { createContext, useContext, useState, useEffect } from "react";

export interface TeamMember {
    id: number;
    name: string;
    title: string;
    image: string;
    instagram?: string;
    linkedin?: string;
}

interface TeamContextType {
    members: TeamMember[];
    setMembers: React.Dispatch<React.SetStateAction<TeamMember[]>>;
    resetMembers: () => void;
}

const TeamContext = createContext<TeamContextType | undefined>(undefined);

// =======================
// Default Data (Fallback)
// =======================
const defaultMembers: TeamMember[] = [
    { id: 1, name: "Agus Risan", title: "Chief Officer", image: "/images/IMG_4510.JPG", instagram: "https://instagram.com/agus_risan", linkedin: "https://linkedin.com/in/agus-risan" },
    { id: 2, name: "Yopie Hilman", title: "Chief Officer", image: "/images/IMG_1430.JPG", instagram: "https://instagram.com/yopie_hilman", linkedin: "https://linkedin.com/in/yopie-hilman" },
    { id: 3, name: "Ihsan", title: "Backend Developer", image: "/images/IMG_7170.JPG", instagram: "https://instagram.com/ihsan_dev", linkedin: "https://linkedin.com/in/ihsan-dev" },
    { id: 4, name: "Ardien", title: "Frontend Developer", image: "/images/IMG_1429.JPG", instagram: "https://instagram.com/ardien_frontend", linkedin: "https://linkedin.com/in/ardien-frontend" },
    { id: 5, name: "Lukman", title: "Backend & Database", image: "/images/IMG_1431.JPG", instagram: "https://instagram.com/lukman_db", linkedin: "https://linkedin.com/in/lukman-db" },
    { id: 6, name: "Anna", title: "UI/UX Designer", image: "/images/IMG_1428.JPG", instagram: "https://instagram.com/anna_uiux", linkedin: "https://linkedin.com/in/anna-uiux" },
    { id: 7, name: "Hanifah", title: "Admin MIT", image: "/images/IMG_1427.JPG", instagram: "https://instagram.com/hanifah_mit", linkedin: "https://linkedin.com/in/hanifah-mit" },
];

// =======================
// Provider
// =======================
export const TeamProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [members, setMembers] = useState<TeamMember[]>([]);

    // Ambil data dari localStorage saat mount
    useEffect(() => {
        const saved = localStorage.getItem("teamMembers");
        setMembers(saved ? JSON.parse(saved) : defaultMembers);
    }, []);

    // Simpan ke localStorage tiap ada perubahan
    useEffect(() => {
        localStorage.setItem("teamMembers", JSON.stringify(members));
    }, [members]);

    // Reset ke default
    const resetMembers = () => {
        localStorage.removeItem("teamMembers");
        setMembers(defaultMembers);
    };

    return (
        <TeamContext.Provider value={{ members, setMembers, resetMembers }}>
            {children}
        </TeamContext.Provider>
    );
};

// =======================
// Custom Hook
// =======================
export const useTeam = () => {
    const context = useContext(TeamContext);
    if (!context) throw new Error("useTeam must be used within TeamProvider");
    return context;
};
