import Image from 'next/image'
import logo from '/public/bg/altumcode-dMUt0X3f59Q-unsplash (1).jpg'
function BackgroundImg() {
  return (
    <div>
      <div>
        <Image src={logo} alt='Ag Cera Logo' width='250' height='50' />
      </div>
    </div>
  )
}
export default BackgroundImg

{
  /* <img
    src='../public/bg/altumcode-dMUt0X3f59Q-unsplash (1).jpg'
    alt=''
    className='object-cover object-left-bottom w-full h-full'
/> */
}
