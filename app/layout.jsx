import NavBar from '@/components/NavBar'
import AuthProvider from '@/components/AuthProvider'
import '@/assets/styles/globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: "PropertyPulse | find the perfect rental", 
  description: "find your dream rental ",
  keywords: "rentals, fing rental"
}

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang='es'> 
        <body>
          <NavBar />
          <main>
            {children}
          </main>
          <Footer/>
        </body>
      </html>
    </AuthProvider>
  )
}

export default MainLayout
