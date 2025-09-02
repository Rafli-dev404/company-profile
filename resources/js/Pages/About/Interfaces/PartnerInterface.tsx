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

export type { PartnerBenefit, PartnerSectionProps }
