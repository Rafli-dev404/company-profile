import React from "react";
import Navbar from "@/Pages/Layout/Navbar";
import LayoutMain from "../Layout/LayoutMain";
import AboutSection from "./Components/AboutSection";
import { DataModalInterface } from './../../reducer/modalSlice';
import Footer from "../Layout/Footer";

export default function Index() {
    return (
        <LayoutMain title="About Us">
            <AboutSection />
            <Footer/>
        </LayoutMain>
    );
}
