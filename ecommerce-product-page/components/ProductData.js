import React, { useState } from 'react'
import Image from 'next/image'


const ProductQuantitySwitcher = () => {
    const[productQuantity, setProductQuantity] = React.useState(0)

    return (
        <div className="flex flex-row bg-lightGrayishBlue rounded-xl">
            <div onClick={() => {
                if ( productQuantity-1>=0 ) {
                    setProductQuantity(productQuantity-1)
                } else {
                    setProductQuantity(productQuantity)
                }
                }} className="text-primaryOrange select-none font-bold text-3xl w-14 text-center leading-9 pt-2 pb-4 cursor-pointer rounded-l-xl hover:bg-primaryOrange transition-all hover:text-white">-</div>
            <input type="number" className="bg-transparent outline-none text-center font-bold text-black w-16 hover:bg-gray-100 focus:bg-gray-200 px-1 transition-all" value={productQuantity} />
            <div onClick={() => setProductQuantity(productQuantity+1)} className="text-primaryOrange font-bold select-none text-3xl w-14 text-center leading-9 pt-2 pb-4 cursor-pointer rounded-r-xl hover:bg-primaryOrange transition-all hover:text-white">+</div>
        </div>
    )
}

export default class ProductData extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="flex flex-col h-initial px-[7rem] mt-20 space-y-4">
                <p className="uppercase text-primaryOrange tracking-[1px] text-[0.75rem] font-bold">SNEAKER COMPANY</p>
                <h1 className="text-veryVarkBlue text-[2.35rem] leading-10 font-bold">Fall Limited Edition Sneakers</h1>
                <p className="pt-5 pb-2 text-sm text-grayishBlue">
                    These low-profile sneakers are your perfecte casual wear companion. Featuring a durable rubber outer sole, they'll whistand everything the weather can offer.
                </p>
                <div className="flex flex-row items-center">
                    <p className="text-2xl font-bold text-veryVarkBlue">$125.00</p>
                    <p className="text-primaryOrange font-bold text-sm bg-primaryPaleOrange p-[0.15rem] px-2 rounded ml-4">50%</p>
                </div>
                <p className="text-sm text-grayishBlue line-through font-bold">$250.00</p>

                <div className="flex flex-row items-center justify-start space-x-4 py-3">
                    <ProductQuantitySwitcher />
                    <button className="bg-primaryOrange grow max-w-[20rem] text-white py-4 rounded-xl shadow-2xl shadow-primaryNotToMuchOrange font-bold flex flex-row items-center justify-center">
                        Add to cart
                    </button>
                </div>
            </div>
        )
    }
}