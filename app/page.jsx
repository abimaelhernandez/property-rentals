import React from 'react'
import Hero from '@/components/Hero'
import InfoBoxes from '../components/InfoBoxes'
import HomeProperties from '../components/HomeProperties'

const HomePage = () => {
  console.log('gome page')
  return (
    <>
      <Hero/>
      <InfoBoxes/>
      <HomeProperties/>s
      {/* <Footer/> */}
    </>
  )
}

export default HomePage
