import React from "react"
import { AiFillPlayCircle, AiOutlineHeart } from "react-icons/ai"
import { BsPlayCircle, BsThreeDots } from "react-icons/bs"

export const Card_lg = ({ cover, name, tag }) => {
  return (
    <>
      <div className='img relative h-72'>
        <img src={cover} alt='cover' className='w-full h-full object-cover rounded-md' />
        <div className='overlay icon absolute top-1/2 left-[40%] text-white '>
          <BsPlayCircle size={45} className='show' />
          <AiFillPlayCircle size={50} className='hide absolute -top-1 -left-1' />
        </div>
        <div className='overlay absolute bottom-0 right-0 text-white'>
          <div className='flex p-3'>
            <AiOutlineHeart size={22} className='mx-3' />
            <BsThreeDots size={22} />
          </div>
        </div>
      </div>
      <div className='text'>
        <h3 className='text-md text-gray-500 font-semibold'>{name}</h3>
        <span className='text-gray-400'>{tag}</span>
      </div>
    </>
  )
}
