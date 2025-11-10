"use client"

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'

const DeleteButton = ({ id }: { id: number }) => {

    const { data: session, status } = useSession()
    const router = useRouter()

    const handleDelete = async () => {
        const res = await fetch(`http://localhost:3000/api/products/${id}`, { method: "DELETE" })
        if (res.status === 200) {
            router.push("/menu")
            toast.success("Product deleted!")
        } else {
            const data = await res.json()
            toast.error(data.message)
        }
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