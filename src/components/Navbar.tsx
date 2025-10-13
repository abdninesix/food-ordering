import React from 'react'
import HamburgerMenu from './HamburgerMenu'
import Link from 'next/link'
import CartIcon from './CartIcon'

const Navbar = () => {
  return (
    <div className='h-12 text-red-500 p-4 flex items-center justify-between border-b-2 uppercase'>
      {/* LOGO */}
        <Link href="/" className='text-xl'>Yummies</Link>

      {/* HAMBURGER */}
      <div className='block md:hidden'>
        <HamburgerMenu />
      </div>

      {/* NAV LINKS */}
      <div className='hidden md:flex'>
        <CartIcon/>
      </div>
    </div>
  )
}

export default Navbar