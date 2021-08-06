/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

function Hero() {
  return (
    <>
      <div className='relative w-full h-96'>
        <div className='absolute top-0 left-0 w-full h-full bg-gray-900 opacity-90'></div>
        <div className='absolute top-0 left-0 z-30 flex flex-col items-center justify-center w-full h-full text-center md:gap-2'>
          <div className='px-10 mb-5 text-2xl text-gray-100 md:mb-0'>
            Your next level software engineering team
          </div>
          <div className='px-10 text-3xl font-medium text-gray-100 md:text-4xl'>
            We design and bring your ideas to life
          </div>

          {/* <button className='z-30 px-5 py-1 my-5 text-white bg-green-900 rounded-sm'>
            Learn More
          </button> */}
        </div>

        <img
          src='https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'
          alt=''
          className='object-cover object-left-bottom w-full h-full'
        />
      </div>
    </>
  )
}
export default Hero
