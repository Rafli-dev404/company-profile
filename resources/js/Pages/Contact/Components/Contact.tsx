import { Button } from "@/components/ui/button"
import React from "react"

export default function Navbar() {
  return (
    <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-white">PT. Teknologi Maju</h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/90 hover:text-white transition-colors">
              Beranda
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors">
              Layanan
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors">
              Tentang
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors">
              Kontak
            </a>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
