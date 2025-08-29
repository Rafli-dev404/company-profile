export default interface ServiceCardInterface {
  title: string
  description: string
  features?: string[]
  image?: string
  link?: string
  reverse?: boolean
  bg?: "white" | "gradient"
  location?: string
}
