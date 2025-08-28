
export default interface ProductCardProps {
    title: string;
    description: string;
    features: string[];
    image: string;
    link: string;
    reverse?: boolean;
    bg?: "white" | "gradient";
}