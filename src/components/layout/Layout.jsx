import React from "react"
import { Footer } from "../footer/Footer"
import { Header } from "../header/Header"

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className='mt-[4%]'>{children}</main>
      <Footer />
    </div>
  )
}
