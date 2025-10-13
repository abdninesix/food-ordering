"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import CartIcon from './CartIcon'

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "" },
  { id: 4, title: "Contact", url: "/contact" },
]

const HamburgerMenu = () => {

  const [isOpen, setIsOpen] = useState(false)
  const user = false

  return (
    <div>
      {/* ICON */}
      {isOpen ?
        <Image src="/close.png" alt="" width={20} height={20} onClick={() => setIsOpen(false)} /> :
        <Image src="/open.png" alt="" width={20} height={20} onClick={() => setIsOpen(true)} />}

      {/* MENU */}
      {isOpen && (
        <div className='bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col items-center justify-center gap-8 text-2xl z-10'>
          {links.map((link) => (
            <Link href={link.url} key={link.id} onClick={() => setIsOpen(false)}>{link.title}</Link>
          ))}

          {!user ? <Link href="/login" onClick={() => setIsOpen(false)}>Login</Link> :
            <Link href="/orders" onClick={() => setIsOpen(false)}>Orders</Link>}
          <CartIcon />
        </div>
      )}
    </div>
  )
}

export default HamburgerMenu