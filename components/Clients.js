export default function Clients() {
  return (
    <>
      {/* flex flex-col items-center justify-center px-4 md:px-24 py-10 mx-auto */}
      <div className='px-4 py-10 mx-auto text-white bg-gray-900 md:px-24'>
        <div className='flex flex-col items-center justify-center '>
          <h1>We have built solutions for </h1>

          <div className='py-12'>
            <div className='grid grid-cols-3 gap-4 pr-6 text-center'>
              <div className='opacity-70 hover:opacity-100'>
                <img src='/Lawyers Hub.png' alt='' className='h-24' />
              </div>

              <div className='opacity-70 hover:opacity-100'>
                <img
                  src='/OFFICIAL-Picha-Logo-1-1.png'
                  alt=''
                  className='h-24'
                />
              </div>
              <div className='opacity-70 hover:opacity-100'>
                <img src='/Sokoplace - White.svg' alt='' className='h-24' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
