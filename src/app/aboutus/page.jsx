import React from 'react'
import AboutHero from '../components/AboutPageComponents/AboutHero'
import WantToKnowMore from '../components/AboutPageComponents/WantToKnowMore'
import CoreValues from '../components/AboutPageComponents/CoreValues'
import PeopleBehind from '../components/AboutPageComponents/PeopleBehind'
import OurImpact from '../components/AboutPageComponents/OurImpact'
import JoinCommunity from '../components/AboutPageComponents/JoinCommunity'

const AboutPage = () => {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <AboutHero/>
      <WantToKnowMore/>
      <CoreValues/>
      <PeopleBehind/>
      <OurImpact/>
      <JoinCommunity/>
      
      
    </div>
  )
}

export default AboutPage
