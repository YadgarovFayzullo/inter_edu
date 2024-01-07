import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import SecondFooter from './SecondFooter'

export default function Layout({children}) {
  return (
    <div>
      <Navbar />
      {children}
      <SecondFooter />
      <Footer />
    </div>
  )
}
