"use client"

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const AddPage = () => {

    const { data: session, status } = useSession()
    const [inputs, setInputs] = useState({
        title: "",
        desc: "",
        price: 0,
        catSlug: ""
    })
    const [options, setoptions] = useState({
        name: "",
        additionalPrice: 0,
    })

    const router = useRouter()

    if (status === "loading") {
        return <p className='text-center'>Loading</p>
    }

    if (status === "unauthenticated" || !session?.user.isAdmin) {
        router.push("/")
    }

    return (
        <div>
            <form>
                <h1>Add New Product</h1>
                <div>
                    <label>Title</label>
                    <input type="text" name='title' />
                </div>
                <div>
                    <label>Description</label>
                    <textarea name='desc' />
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" name='price' />
                </div>
                <div>
                    <label>Category</label>
                    <input type="text" name='catSlug' />
                </div>
                <div>
                    <label>Options</label>
                    <div>
                        <input type='text' placeholder='Title' name='title' />
                        <input type='number' placeholder='Additional Price' name='additionalPrice' />
                    </div>
                    <button>Add Option</button>
                </div>
                <div>
                    <div>
                        <span>Small</span>
                        <span>$2</span>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddPage