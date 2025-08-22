import React from "react";
import Navbar from "@/Components/Navbar";
import LayoutMain from "../Layout/LayoutMain";
import ServiceCard from "./Components/ServiceCard";
import ServicesSection from "./Components/ServiceSection";

export default function Index() {
    return (
        <LayoutMain title="Our Services">
           <ServicesSection/>
        </LayoutMain>
    );
}
