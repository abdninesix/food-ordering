"use client"

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link';
import React from 'react'

const UserNavlinks = () => {

    const { status } = useSession();

    return (
        <div>
            {status === "authenticated" ? (
                <>
                    <Link href="/orders">Orders</Link>
                    <button onClick={() => signOut()}>Logout</button>
                </>
            ) : (
                <Link href="/login">Login</Link>
            )}
        </div>
    )
}

export default UserNavlinks