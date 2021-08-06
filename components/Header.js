import { useState } from 'react'
import Link from 'next/link'
import Img from '/public/Logo'

function Header() {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }
  return (
    <>
      <nav className='flex flex-wrap items-center p-3 '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <Link href='/'>
              <a>
                <Img />
              </a>
            </Link>
          </a>
        </Link>
        <button
          className='inline-flex p-3 ml-auto rounded outline-none bg-gray-50 hover:bg-gray-600 lg:hidden hover:text-white'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='flex flex-col w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto'>
            <Link href='/products'>
              <a className='items-center justify-center w-full px-3 py-2 font-bold lg:inline-flex lg:w-auto hover:border-b-2 hover:border-gray-900'>
                Who we are
              </a>
            </Link>
            <Link href='/benefits'>
              <a className='items-center justify-center w-full px-3 py-2 font-bold lg:inline-flex lg:w-auto hover:border-b-2 hover:border-gray-900'>
                Services
              </a>
            </Link>

            <Link href='/opportunity'>
              <a className='items-center justify-center w-full px-3 py-2 font-bold lg:inline-flex lg:w-auto hover:border-b-2 hover:border-gray-900'>
                Get in Touch
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header

// import Link from 'next/link'
// import Img from '/public/Logo'
// function Header() {
//   return (
//     <>
//       <div className='flex items-center justify-between'>
//         <div>
//           <Link href='/'>
//             <a>
//               <Img />
//             </a>
//           </Link>
//         </div>
//         <div className='flex gap-6'>
//           <Link href='/product/'>
//             <a>Products</a>
//           </Link>
//           <div>Benefits</div>
//           <div>Testimonials</div>
//           <div>Opportunity</div>
//           <div>Events</div>
//         </div>
//         <div>
//           <div>Contacts</div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Header
