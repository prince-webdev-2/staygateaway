import React from 'react'
import Title from './Title.jsx'
import assets, { testimonials } from '../assets/assets.js'

const Testimonial = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30 bg-[#F4F9FC]'>
        <Title title='Voices of Our Valued Guests' subtitle='See why travelers everywhere choose Stay Gateaway for unmatched luxury stays.' font='font-playfair' />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 group mt-14'>
                {testimonials.map((item)=>(
                        <div  className='flex flex-col relative group items-start justify-between gap-1 p-8 rounded-xl hover:scale-105 duration-300 bg-white shadow-xl' key={item._id}>
                                <div className='flex gap-6'>
                                        <img src={item.profile} alt="user-icon" className='w-12' />
                                        <div>
                                                <h1 className='font-playfair text-xl'>{item.name}</h1>
                                                <p className='text-gray-500/90 text-sm'>{item.location}</p>
                                        </div>
                                </div>
                                <div className='flex my-3'>
                                        {Array(item.rating).fill().map((_, i) => (
                                                <img key={i} src={assets.stars} className="w-4" />
                                        ))}
                                </div>
                                <p className='text-gray-500/90 text-sm'>{item.review}</p>
                        </div>
                ))}
        </div>
    </div>
  )
}

export default Testimonial