import Navbar from '@/Pages/Layout/Navbar'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function LayoutMain(props: {
    children: React.ReactNode;
    title: string;
}) {
    const { children, title } = props;
    return (
        <>
            <Navbar />
            <Head title={title} />
            <div className="min-h-full bg-gradient-to-br from-[#E45EFC] via-50% via-[#A5DBFB] to-[#387AFF]">
                {children}
            </div>

        </>
    )
}
