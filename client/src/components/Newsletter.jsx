import React from 'react'
import Title from './Title'

const Newsletter = () => {
  return (
    <div  className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-10 pb-30 mx-6 md:mx-16 lg:mx-24 xl:mx-32 mb-30 text-white bg-[#101828] rounded-3xl'>
        <Title title='Stay Inspired' subtitle='Sign up for our newsletter and explore new destinations, special discounts, and endless travel inspiration—before anyone else.' font='font-playfair' />
        <div class="flex items-center justify-center mt-15 border-2 border-gray-500/90 focus-within:outline focus-within:outline-[gray] text-sm rounded-full h-14 max-w-md w-full">
                <input type="text" class="bg-transparent outline-none rounded-full px-4 h-full flex-1" placeholder="Enter your email address"/>
                <button class="border-2 border-gray-500/90 text-white rounded-full h-11 mr-1 px-8 flex items-center justify-center cursor-pointer hover:bg-[green] hover:border-[green] duration-300">
                        Subscribe now
                </button>
        </div>
        <p className='text-sm text-gray-500/90 mt-5'>By joining, you accept our Privacy Policy and consent to receive news and updates.</p>
    </div>
  )
}

export default Newsletter