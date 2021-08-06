import Image from 'next/image'
import logo from '/public/SL.svg'
function Logo() {
  return (
    <div>
      <div>
        <Image src={logo} alt='Ag Cera Logo' width='250' height='50' />
      </div>
    </div>
  )
}
export default Logo
