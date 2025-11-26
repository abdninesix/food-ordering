"use client"

import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

const SucessPage = () => {

    const searchParams = useSearchParams()
    const payment_intent = searchParams.get("payment_intent")
    const router = useRouter()

    useEffect(() => {
        const makeRequest = async () => {
            try {
                await fetch(`http://localhost:3000/api/confirm/${payment_intent}`, { method: "PUT" })
                router.push("/orders")
            } catch (error) {
                console.log(error)
            }
        };
        makeRequest();
    }, [payment_intent, router])

    return (
        <div className="mt-10 text-center">Payment succesfull. Please do not close the page. You are being redirected to the orders page.</div>
    )
}

export default SucessPage