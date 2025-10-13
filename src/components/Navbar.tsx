import React from 'react'
import HamburgerMenu from './HamburgerMenu'
import Link from 'next/link'
import CartIcon from './CartIcon'

const Navbar = () => {

  const user = false

  return (
    <div className='h-12 text-red-500 p-4 flex items-center justify-between border-b-2 uppercase'>
      {/* LEFT LINKS */}
      <div className='hidden md:flex items-center gap-4'>
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* LOGO */}
      <Link href="/" className='text-xl'>Yummies</Link>

      {/* HAMBURGER */}
      <div className='block md:hidden'>
        <HamburgerMenu />
      </div>

      {/* RIGHT LINKS */}
      <div className='hidden md:flex items-center gap-4'>
        {!user ? <Link href="/login">Login</Link> :
          <Link href="/orders">Orders</Link>}
        <CartIcon />
      </div>
    </div>
  )
}

export default Navbar