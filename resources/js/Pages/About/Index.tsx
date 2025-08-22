// resources/js/Pages/About/Index.tsx
import React from "react";
import Navbar from "@/Components/Navbar";
import LayoutMain from "../Layout/LayoutMain";
import AboutSection from "./Components/AboutSection";
import { DataModalInterface } from './../../reducer/modalSlice';

export default function Index() {
    return (
        <LayoutMain title="About Us">
            <AboutSection />
        </LayoutMain>
    );
}
