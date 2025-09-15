import React from 'react'
import LayoutMain from '../Layout/LayoutMain'
import ArticelSection from './Components/ArticleSection'
import Articel from './Components/Articel'

export const meta = {
  title: 'Blog - MIT Blog',
  description:
    'Maksi terpercaya selalu menyediakan informasi lengkap setiap hari, Informasi terbaru seputar bisnis, keuangan, investasi, tips & trik',
}

const articles = [
  {
    id: 1,
    title: 'Contoh Peralatan Teknologi Informasi Yang Masih Eksis Hingga…',
    excerpt: 'Lorem ipsum dolor sit amet…',
    date: '08/09/25',
    author: 'Lorepsum',
    image: '/images/article1.jpg',
  },
  {
    id: 2,
    title: 'Artikel kedua',
    excerpt: 'Lorem ipsum dolor sit amet…',
    date: '09/09/25',
    author: 'Lorepsum',
    image: '/images/article2.jpg',
  },
]

export default function Page() {
  return (
    <LayoutMain title="Blog">
    <Articel/>
    <ArticelSection/>
    </LayoutMain>
  )
}
