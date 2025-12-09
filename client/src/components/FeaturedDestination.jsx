import React from 'react'
import { roomsDummyData } from '../assets/assets.js'
import HotelCard from './HotelCard.jsx'
import Title from './Title.jsx'
import { useNavigate } from 'react-router-dom'

const FeaturedDestination = () => {
  const navigate= useNavigate();
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
      <Title title='Featured Destination' subtitle='Step into our exclusive selection of exceptional global properties—crafted to deliver unrivalled comfort, refined luxury, and truly unforgettable stays.' />
        <div className='md:flex flex-wrap items-center justify-center gap-6 mt-20'>
                {roomsDummyData.slice(0,4).map((room, index)=> (
                        <HotelCard key={room._id} room={room} index={index} />
                ))}
        </div>
        <button onClick={()=>{navigate('/rooms'); scrollTo(0,0)}} className='my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-[green] hover:text-white duration-500 transition-all cursor-pointer'>View All Destination</button>
    </div>
  )
}

export default FeaturedDestination;