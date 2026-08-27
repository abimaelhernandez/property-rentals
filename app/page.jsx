import React from 'react'
import Hero from '@/components/Hero'
import InfoBoxes from '../components/InfoBoxes'
import HomeProperties from '../components/HomeProperties'

import connectDB from './config/database'

const HomePage = async () => {
  console.log('Gome page',process.env.NEXT_PUBLIC)
  await connectDB()
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
