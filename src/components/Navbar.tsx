import React from 'react'
import HamburgerMenu from './HamburgerMenu'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      {/* LOGO */}
      <div>
        <Link href="/">Yummies</Link>
      </div>

      {/* HAMBURGER */}
      <div>
        <HamburgerMenu />
      </div>

      {/* NAV LINKS */}
    </div>
  )
}

export default Navbar