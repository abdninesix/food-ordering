"use client"

import { Inputs, Options } from '@/types/types'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const AddPage = () => {

    const { data: session, status } = useSession()
    const [inputs, setInputs] = useState<Inputs>({
        title: "",
        desc: "",
        price: 0,
        catSlug: ""
    })
    const [option, setOption] = useState<Options>({
        title: "",
        additionalPrice: 0,
    })
    const [options, setOptions] = useState<Options[]>([])

    const router = useRouter()

    if (status === "loading") {
        return <p className='text-center'>Loading</p>
    }

    if (status === "unauthenticated" || !session?.user.isAdmin) {
        router.push("/")
    }

    const handleInputs = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputs(prev => { return { ...prev, [e.target.name]: e.target.value } })
    }

    const handleOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOption(prev => { return { ...prev, [e.target.name]: e.target.value } })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const res = await fetch("http://localhost:3000/api/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...inputs, options })
            })
            const data = await res.json()
            router.push(`/product/${data.id}`)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg'>
            <form onSubmit={handleSubmit}>
                <h1 className='text-3xl font-semibold mb-6'>Add New Product</h1>

                {/* Title Field */}
                <div className='mb-4'>
                    <label className='block text-lg font-medium text-gray-700'>Title</label>
                    <input
                        type="text"
                        name="title"
                        className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
                        onChange={handleInputs}
                    />
                </div>

                {/* Description Field */}
                <div className='mb-4'>
                    <label className='block text-lg font-medium text-gray-700'>Description</label>
                    <textarea
                        name="desc"
                        className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
                        onChange={handleInputs}
                    />
                </div>

                {/* Price Field */}
                <div className='mb-4'>
                    <label className='block text-lg font-medium text-gray-700'>Price</label>
                    <input
                        type="number"
                        name="price"
                        className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
                        onChange={handleInputs}
                    />
                </div>

                {/* Category Field */}
                <div className='mb-4'>
                    <label className='block text-lg font-medium text-gray-700'>Category</label>
                    <input
                        type="text"
                        name="catSlug"
                        className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
                        onChange={handleInputs}
                    />
                </div>

                {/* Options Input */}
                <div className='mb-6'>
                    <label className='block text-lg font-medium text-gray-700'>Options</label>
                    <div className='flex space-x-4 mt-2'>
                        <input
                            type="text"
                            placeholder="Title"
                            name="title"
                            className='p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
                            onChange={handleOptions}
                        />
                        <input
                            type="number"
                            placeholder="Additional Price"
                            name="additionalPrice"
                            className='p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
                            onChange={handleOptions}
                        />
                        <div
                            className='mt-3 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500'
                            onClick={() => setOptions((prev) => [...prev, option])}
                        >
                            +
                        </div>
                    </div>

                </div>

                {/* Options List */}
                {options.map((item) => (
                    <div
                        className='mb-4 flex justify-between py-2 border-b border-gray-300'
                        key={item.title}
                        onClick={() => setOptions(options.filter((opt) => opt.title !== item.title))}
                    >
                        <span className='text-lg'>{item.title}</span>
                        <span className='text-lg text-gray-600'>${item.additionalPrice}</span>
                    </div>
                ))}
                <button
                    type="submit"
                    className='mt-3 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500'
                >
                    Submit
                </button>
            </form>
        </div>

    )
}

export default AddPage