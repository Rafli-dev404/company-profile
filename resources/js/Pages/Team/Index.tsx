import React from 'react'
import LayoutMain from '../Layout/LayoutMain'
import Footer from '../Layout/Footer'
import TeamSection from './Components/TeamSection'

export default function Index() {
  return (
    <LayoutMain title="Our Team">
      <TeamSection/>
    </LayoutMain>
  )
}
