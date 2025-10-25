"use client"

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link';
import React from 'react'

const UserNavlinks = () => {

    const { status } = useSession();

    console.log("status:", status);

    return (
        <>
            {status === "authenticated" ? (
                <div className='flex items-center gap-4'>
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