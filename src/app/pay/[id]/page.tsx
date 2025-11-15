"use client"

import React, { useEffect } from 'react'

const PaymentPage = ({ params }: { params: { id: string } }) => {
    const { id } = params;

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/create-intent/${id}`, {
                    method: "POST",
                })
                const data = await res.json()
            } catch (error) {
                console.log(error)
            }
        }
        makeRequest();
    }, [id])

    return (
        <div>PaymentPage</div>
    )
}

export default PaymentPage