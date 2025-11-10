"use client"

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const DeleteButton = ({ id }: { id: string }) => {

    const { data: session, status } = useSession()
    const router = useRouter()

    const handleDelete = () => {

    }

    if (status === "loading") return <div className="text-center">Loading orders list...</div>

    if (status === "unauthenticated" || !session?.user.isAdmin) {
        return;
    }

    return (
        <button className='bg-red-500 text-white absolute top-10 right-10 p-2 cursor-pointer' onClick={handleDelete}>Delete</button>
    )
}

export default DeleteButton