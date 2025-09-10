import React from 'react'
import Image from 'next/image';


const Navbar = () => {
  return (
    <div className="mx-auto flex w-full max-w-7xl justify-between px-4 py-5 text-sm text-white bg-black">
      {/* Left side */}
      <section className='flex items-center gap-10 text-md'>
        {/* logo */}
        <Image src={"/Logo.png"} width="96" height="60" alt="Logo" className='rounded-xl '/>
        <div className="">Nav links</div>
      </section>
      {/* Right side */}
      
    </div>
  )
}

export default Navbar