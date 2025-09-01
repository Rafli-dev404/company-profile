import React from "react"

interface PartnerBenefit {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

interface PartnerSectionProps {
  title?: string
  subtitle?: string
  benefits?: PartnerBenefit[]
}

const defaultBenefits: PartnerBenefit[] = [
  {
    id: 1,
    title: "Kolaborasi Strategis",
    description: "Membangun kemitraan jangka panjang yang saling menguntungkan untuk pertumbuhan bersama.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Kualitas Terjamin",
    description: "Standar kualitas tinggi dalam setiap proyek dengan dukungan partner terpercaya.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Inovasi Berkelanjutan",
    description: "Menghadirkan teknologi terdepan melalui riset dan pengembangan bersama partner.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Dukungan 24/7",
    description: "Tim support yang siap membantu kapan saja untuk memastikan kelancaran operasional.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
        />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Teknologi Terdepan",
    description: "Menggunakan teknologi terbaru dan terbaik untuk memberikan solusi yang optimal.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Skalabilitas Tinggi",
    description: "Solusi yang dapat berkembang seiring dengan pertumbuhan bisnis Anda.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
      </svg>
    ),
  },
]

export default function PartnerSection({
  title = "Partner Kami",
  subtitle = "Kami bangga bekerja sama dengan perusahaan-perusahaan terkemuka untuk menghadirkan solusi teknologi terbaik bagi klien kami.",
  benefits = defaultBenefits,
}: PartnerSectionProps) {
  return (
    <section id="partner" className="min-h-screen bg-white py-35">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E45EFC] to-[#387AFF] rounded-full flex items-center justify-center mx-auto mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
