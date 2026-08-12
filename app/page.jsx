import React from 'react'
// import Link from 'next/link'
import Hero from '@/components/Hero'
import InfoBoxes from '../components/InfoBoxes'
import Footer from '@/components/Footer'

const HomePage = () => {
  console.log('gome page')
  return (
    <>
      <Hero/>
      <InfoBoxes/>
      <Footer/>
    </>
  )
}

export default HomePage
