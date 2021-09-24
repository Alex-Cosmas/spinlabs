export default function Services() {
  return (
    <>
      {/* flex flex-col items-center justify-center px-4 md:px-24 py-10 mx-auto */}
      <div className='px-4 py-10 mx-auto text-white bg-gray-900 md:px-24'>
        <div className='flex flex-col items-center justify-center '>
          <h1>The range of services we offer</h1>

          <div className='flex'>
            <div className='py-12'>
              <div className='grid gap-4 pr-6 md:grid-cols-3'>
                <div className='p-6 text-gray-900 bg-white rounded-sm shadow-md'>
                  <h2 className='py-3 font-semibold'>Digital strategy</h2>
                  <p>
                    Starting with an analysis of your technological and business
                    landscape, we create and integrate new and existing
                    solutions that will optimise your business processes.
                  </p>
                </div>
                <div className='p-6 text-gray-900 bg-white rounded-sm shadow-md'>
                  <h2 className='py-3 font-semibold'>
                    Tech and business consulting
                  </h2>
                  <p>
                    Our experts help you realise your business strategy through
                    technology. We offer digital health assessments and advise
                    on the best approach and tech to keep you at the forefront
                    of innovation.
                  </p>
                </div>
                <div className='p-6 text-gray-900 bg-white rounded-sm shadow-md'>
                  <h2 className='py-3 font-semibold'>Software development</h2>
                  <p>
                    We design and implement software that will optimise and
                    automate your differentiated business strategy. We don’t
                    sell products, we create tech solutions that solve
                    individual business problems.
                  </p>
                </div>
              </div>
              {/* <div className=''>
                <h1 className='pl-5 text-3xl border-l-4 border-white'>
                  A reliable Software Development partner
                </h1>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
