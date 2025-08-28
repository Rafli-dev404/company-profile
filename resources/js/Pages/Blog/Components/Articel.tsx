import React from 'react'
import { Search, Calendar, Clock, User, Layout } from 'lucide-react'
import LayoutMain from '../../Layout/LayoutMain'
import BlogInterface from '../Interface/BlogInterface'


export default function Articel({
          title,
          excerpt,
          author,
          date,
          readTime,
          category,
          image,
          borderColor }:
          BlogInterface & { borderColor: string }) {

  return (
    <div
      className={`border-l-4 ${borderColor} pl-6 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col min-h-full`}
    >
      <div className="mb-4">
        <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
          {category.toUpperCase()}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{excerpt}</p>
      <div className="flex items-center text-gray-500 text-sm space-x-4 mt-auto">
        <div className="flex items-center">
          <User className="w-4 h-4 mr-1" />
          <span>BY {author.toUpperCase()}</span>
        </div>
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{date.toUpperCase()}</span>
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          <span>{readTime}</span>
        </div>
      </div>
    </div>
  )
}
