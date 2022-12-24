import React from "react"
import { Hero, LayoutSidebar, New, Recommand, Treading } from "../router"

export const Home = () => {
  return (
    <>
      <Hero />
      <LayoutSidebar>
        <Treading />
        <New />
        <Recommand />
      </LayoutSidebar>
    </>
  )
}
