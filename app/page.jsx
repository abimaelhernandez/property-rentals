import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  console.log('gome page')
  return (
    <div className='bg-blue-500'> 
      <h1 className='text-white text-3xl'>
        Weork on the home page
      </h1>
      <Link href='/properties'>  Show  properties </Link>
    </div>
  )
}

export default HomePage
