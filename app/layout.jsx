import React from 'react'
import NavBar from '@/components/NavBar'

import '@/assets/styles/globals.css'

export const metadata = {
  title: "PropertyPulse | find the perfect rental", 
  description: "find your dream rental ",
  keywords: "rentals, fing rental"
}

const MainLayout = ({ children }) => {
  return (
    <html lang='es'> 
      <body>
        <NavBar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

export default MainLayout
