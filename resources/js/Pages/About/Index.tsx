import React from "react";
import Navbar from "@/Pages/Layout/Navbar";
import LayoutMain from "../Layout/LayoutMain";
import AboutSection from "./Components/AboutSection";
import { DataModalInterface } from './../../reducer/modalSlice';
import Footer from "../Layout/Footer";
import ProductSection from "./Components/ProductSection";
import ExpertiseSection from "./Components/ExpertiseSection";
import VisionMissionSection from "./Components/VisionMissionSection";
import WhyChooseUsSection from "./Components/WhyChooseUsSection";
import TeamSection from "./Components/TeamSection";
import { P } from "framer-motion/dist/types.d-Cjd591yU";

export default function Index() {
    return (
        <LayoutMain title="About Us">
            <AboutSection />
            <ExpertiseSection />
            <VisionMissionSection />
            <WhyChooseUsSection />
            <TeamSection />
            <ProductSection />
        </LayoutMain>
    );
}
