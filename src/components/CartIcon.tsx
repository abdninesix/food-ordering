"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
    return (
        <Link href="/cart" className='flex items-center gap-2'>
            <div className='relative size-8'>
                <Image src="/cart.png" alt="CartIcon" fill />
            </div>
            <span>Cart (3)</span>
        </Link>
    )
}

export default CartIcon