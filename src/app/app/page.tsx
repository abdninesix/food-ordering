"use client"

import React from 'react'

const AddPage = () => {
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
                    <input type="text" name='category' />
                </div>
                <div>
                    <label>Category</label>
                    <div>
                        <input type='text' placeholder='Title' name='title' />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddPage