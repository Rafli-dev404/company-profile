import { Layout } from 'lucide-react'
import React from 'react'
import LayoutMain from '../Layout/LayoutMain'
import ClientSection from './Components/ClientSection';

export default function Index() {
  return (
    <LayoutMain title="Our Client">
      <ClientSection/>
    </LayoutMain>
  )
}
