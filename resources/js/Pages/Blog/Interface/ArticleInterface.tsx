export default interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
}

export interface ArticleSectionProps {
  articles?: Article[];
}
