import React from 'react'
import HamburgerMenu from './HamburgerMenu'
import Link from 'next/link'
import CartIcon from './CartIcon'

const Navbar = () => {
  return (
    <div className='h-12 text-red-500 p-4 flex items-center justify-between border-b-2 uppercase'>
      {/* NAV LINKS */}
      <div className='hidden md:flex gap-4'>
        <Link href="/">Homepage</Link>
        <Link href="/"></Link>
        <Link href="/"></Link>
        <CartIcon />
      </div>

      {/* LOGO */}
      <Link href="/" className='text-xl'>Yummies</Link>

      {/* HAMBURGER */}
      <div className='block md:hidden'>
        <HamburgerMenu />
      </div>
    </div>
  )
}

export default Navbar