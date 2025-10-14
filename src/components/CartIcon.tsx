"use client"

import Image from 'next/image'
import React from 'react'

const CartIcon = () => {
    return (
        <div className='flex items-center gap-2'>
            <div className='hidden md:block relative size- md:size-5'>
                <Image src="/cart.png" alt="CartIcon" fill />
            </div>
            <span>Cart (3)</span>
        </div>
    )
}

export default CartIcon