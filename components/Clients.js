import Image from 'next/image'

export default function Clients() {
  return (
    <>
      {/* flex flex-col items-center justify-center px-4 md:px-24 py-10 mx-auto */}
      <div className='px-4 py-10 mx-auto text-white bg-gray-900 md:px-24'>
        <div className='flex flex-col items-center justify-center '>
          <h1>We have built solutions for </h1>

          <div className='py-12'>
            <div className='grid gap-10 pr-6 text-center md:grid-cols-3'>
              <div className='relative w-64 h-24 opacity-70 hover:opacity-100'>
                <Image
                  quality={100}
                  title='Floripa+'
                  src='/Lawyers Hub.png'
                  alt='Lawyers Hub'
                  loading='eager'
                  layout='fill'
                  className='object-cover '
                />
              </div>
              <div className='relative w-64 h-24 opacity-70 hover:opacity-100'>
                <Image
                  quality={100}
                  title='Floripa+'
                  src='/OFFICIAL-Picha-Logo-1-1.png'
                  alt='Lawyers Hub'
                  loading='eager'
                  layout='fill'
                />
              </div>
              <div className='relative w-64 h-24 opacity-70 hover:opacity-100'>
                <Image
                  quality={100}
                  title='Floripa+'
                  src='/Sokoplace - White.svg'
                  alt='Lawyers Hub'
                  loading='eager'
                  layout='fill'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
