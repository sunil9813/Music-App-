import React from "react"
import { browse } from "../assets/data/data"
import { Card_lg } from "../common/Card_lg"

export const Artists = () => {
  return (
    <div>
      <section className='mt-8 sm:mt-20'>
        <h1 className='text-5xl font-bold mb-5 text-primary'>Artists</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 sm:grid-cols-1'>
          {browse.map((item, i) => (
            <div className='box card text-center' key={i}>
              <div className='img relative h-52 w-52 m-auto'>
                <img src={item.cover} alt='cover' className='w-full h-full object-cover rounded-full' />
              </div>
              <div className='text-center'>
                <h3 className='text-md text-gray-500 font-semibold'>{item.name}</h3>
                <span className='text-gray-400'>{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
