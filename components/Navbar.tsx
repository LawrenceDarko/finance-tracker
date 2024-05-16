import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import MobileNav from './MobileNav'
// import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className='flex items-center flex-between h-full p-3 bg-white border-b shadow-sm'>
      <Link href='/' className='flex items-center gap-1 md:hidden'>
        <Image
          src='/icons/logo.svg'
          width={32}
          height={32}
          alt='logo'
          className='max-sm:size-10'
        />
        <p className='text-[26px] font-extrabold text-white max-sm:hidden'>Fin</p>
      </Link>

      <div className="flex-between gap-5">
        {/* <SignedIn>
          <UserButton />
        </SignedIn> */}
        
        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar