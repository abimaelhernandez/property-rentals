import React from 'react'
import '@/assets/styles/ globals.css'

export const metadata = {
  title: "PropertyPulse | find the perfect rental", 
  description: "find your dream rental ",
  keywords: "rentals, fing rental"
}

const MainLayout = ({ children }) => {
  return (
    <html lang='es'> 
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}

export default MainLayout
