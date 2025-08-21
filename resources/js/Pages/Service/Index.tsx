import React from "react";
import Navbar from "@/Components/Navbar";
import LayoutMain from "../Layout/LayoutMain";

export default function Index() {
    return (
        <LayoutMain title="Our Services">
            <section className="px-16 py-20">
                <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
                <ul className="list-disc pl-6 text-lg text-white space-y-2">
                    <li>Web & Mobile App Development</li>
                    <li>Cloud Integration</li>
                    <li>IT Consulting</li>
                    <li>System Maintenance</li>
                </ul>
            </section>
        </LayoutMain>
    );
}
