import React from "react";
import Navbar from "@/Pages/Layout/Navbar";
import LayoutMain from "../Layout/LayoutMain";
import ServiceCard from "./Components/ServiceCard";
import ServicesSection from "./Components/ServiceSection";
import Footer from "../Layout/Footer";

export default function Index() {
    return (
        <LayoutMain title="Our Services">
           <ServicesSection/>
           <Footer/>
        </LayoutMain>
    );
}
