import React from 'react'


export default function VisionMissionSection() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src="/images/annie-spratt-QckxruozjRg-unsplash.jpg"
              alt="Business team discussing vision and mission"
              className="w-full h-[400px] object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-gray-900">Our Vision & Mission</h2>

              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-3 text-black-600">Semua yang Anda butuhkan untuk menciptakan proses bisnis</h1>
                <p className="text-xl leading-relaxed">
                  Menjadi pemimpin dalam solusi teknologi untuk pengelolaan bisnis yang inovatif dan terintegrasi.
                  Menyediakan aplikasi pengelolaan bisnis yang intuitif, aman, serta terintegrasi,
                  untuk meningkatkan efisiensi dan pertumbuhan bisnis melalui
                  layanan berkualitas dan adaptasi teknologi terkini.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

