import React from "react"
import LayoutMain from "../Layout/LayoutMain"
import ServiceSection from "./Components/ServiceSection"
import Footer from "../Layout/Footer"

export default function Index() {
    return (
        <LayoutMain title="Our Services">
            <ServiceSection />
        </LayoutMain>
    )
}
