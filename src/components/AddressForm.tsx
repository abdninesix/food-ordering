import { AddressElement } from '@stripe/react-stripe-js'
import React from 'react'

const AddressForm = () => {
    return (
        <form className='min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-15rem)] p-4 lg:px-20 xl:px-40 flex flex-col gap-8'>
            <h3>Address</h3>
            <AddressElement
                options={{ mode: "shipping" }}
                onChange={(event) => {
                    if (event.complete) {
                        const address = event.value.address;
                    }
                }}
            />
        </form>
    )
}

export default AddressForm