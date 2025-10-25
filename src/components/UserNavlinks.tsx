"use client"

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link';
import React from 'react'

const UserNavlinks = () => {

    const { status } = useSession();

    return (
        <>
            {status === "authenticated" ? (
                <div className='flex flex-col md:flex-row items-center gap-8 md:gap-4'>
                    <Link href="/orders">Orders</Link>
                    <Link href="/" onClick={() => signOut()}>Logout</Link>
                </div>
            ) : (
                <Link href="/login">Login</Link>
            )}
        </>
    )
}

export default UserNavlinks