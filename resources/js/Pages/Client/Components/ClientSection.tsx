import React from 'react'

export default function ClientSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#E45EFC] via-50% via-[#A5DBFB] to-[#387AFF] flex items-center">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-white">
            {/* Breadcrumb */}
            <nav className="text-white/70 text-sm mb-8">
              <span>Beranda</span>
              <span className="mx-2">▸</span>
              <span>Client</span>
            </nav>

            {/* Main Heading */}
            <h1 className="text-6xl lg:text-7xl font-bold mb-8 text-white">Client</h1>

            {/* Description */}
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-12 max-w-2xl">
              Kami bangga melayani berbagai klien dari startup hingga perusahaan multinasional. Kepercayaan mereka
              adalah motivasi kami untuk terus memberikan solusi terbaik dan inovasi yang berkelanjutan.
            </p>

            {/* Client Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-white mb-2">150+</div>
                <div className="text-white/80">Happy Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-white/80">Satisfaction Rate</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80">Support</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <img
                  src="/professional-business-meeting-with-diverse-clients.png"
                  alt="Client Meeting"
                  width={600}
                  height={500}
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
