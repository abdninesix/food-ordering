import React from 'react'
import HamburgerMenu from './HamburgerMenu'
import Link from 'next/link'
import CartIcon from './CartIcon'
import Image from 'next/image'

const Navbar = () => {

  const user = false

  return (
    <div className='h-12 md:h-24 text-red-500 p-4 lg:px-20 xl:px-40 flex items-center justify-between border-b-2 uppercase'>
      {/* LEFT LINKS */}
      <div className='hidden md:flex items-center gap-4 flex-1'>
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* LOGO */}
      <Link href="/" className='text-xl font-bold flex-1 md:text-center'>Yummies</Link>

      {/* HAMBURGER */}
      <div className='block md:hidden'>
        <HamburgerMenu />
      </div>

      {/* RIGHT LINKS */}
      <div className='hidden md:flex items-center justify-end gap-4 flex-1'>
        <div className='md:absolute top-2 right-2 lg:static bg-orange-200 p-1 rounded-full flex items-center gap-1 cursor-pointer'>
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>+92 123 4567 890</span>
        </div>
        {!user ? <Link href="/login">Login</Link> :
          <Link href="/orders">Orders</Link>}
        <CartIcon />
      </div>
    </div>
  )
}

export default Navbar