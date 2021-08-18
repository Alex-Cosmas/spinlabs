/* eslint-disable @next/next/no-img-element */
export default function CTA() {
  return (
    <>
      <div className='relative w-full h-48'>
        <div className='absolute top-0 left-0 w-full h-full bg-gray-900 opacity-90'></div>
        <div className='absolute top-0 left-0 z-30 flex flex-col items-center justify-center w-full h-full text-center md:gap-2'>
          <div className='px-10 mb-5 text-2xl text-gray-100 md:mb-0'>
            If you would like to engage with us, we would love to hear from you.
          </div>
          {/* <div className='w-3/4 px-10 text-3xl font-medium text-gray-100 md:text-4xl'>
            We offer end-to-end design and engineering services that deliver
            business value
          </div> */}

          <button className='z-30 px-5 py-1 my-5 text-gray-900 bg-white rounded-sm hover:font-semibold hover:text-gray-900 hover:border-white hover:bg-gray-300'>
            Drop us an email
          </button>
        </div>

        <img
          src='/bg/bg2.jpg'
          alt=''
          className='object-cover object-left-bottom w-full h-full'
        />
      </div>
    </>
  )
}
