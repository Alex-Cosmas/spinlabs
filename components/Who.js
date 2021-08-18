export default function Who() {
  return (
    <>
      {/* flex flex-col items-center justify-center px-4 md:px-24 py-10 mx-auto */}
      <div className='px-4 py-10 mx-auto text-white bg-gray-900 md:px-24'>
        <div className='flex flex-col items-center justify-center '>
          {/* <h1>Who we are </h1> */}

          <div className='flex'>
            <div className='grid grid-cols-2 py-12'>
              <div className=''>
                <h1 className='pl-5 text-3xl border-l-4 border-white'>
                  We are a reliable software development company partner
                </h1>
              </div>
              <div className='grid gap-4'>
                <p>
                  Spin Labs is a bespoke software development company that
                  offers end-to-end design and engineering services for clients
                  looking to translate ideas into reality that deliver business
                  value.
                </p>
                <p>
                  We pride ourselves for having a team that has a wealth of
                  experience developing software and applications for several
                  industries where we have offered strategy, design,
                  development, testing and rollout.
                </p>
                <p>
                  One key secret to our success has been allowing our people the
                  space to continually empower and improve themselves and grow
                  their careers which is why we have always delivered above and
                  beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
