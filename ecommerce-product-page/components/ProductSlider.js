import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            previewedProductImage: 'image-product-1.jpg',
            showProductPreviewSlider: false,
            sliderProductToView: ''
        }

        this.changeProductPreview = this.changeProductPreview.bind(this)
    }

    ProductPreviewSlider = (productToView) => {
        this.setState({
            showProductPreviewSlider: true,
            sliderProductToView: productToView
        })
    }

    ProductThumbnail = (props) => {
        const isActiveThumb = props.thumbnail === this.state.previewedProductImage.replace('.jpg', '-thumbnail.jpg') ?
            "border-primaryOrange" : "border-transparent"
        const isActiveThumbOpacity = props.thumbnail === this.state.previewedProductImage.replace('.jpg', '-thumbnail.jpg') ?
            "opacity-75" : "opacity-0"

        return (
            <div onClick={() => this.changeProductPreview(props)} className={"group relative h-auto w-full border-[2px] rounded-[0.85rem] overflow-hidden transition-all cursor-pointer " + isActiveThumb}>
                <div className={"group-hover:opacity-75 w-full h-full z-10 transition-all absolute " + isActiveThumbOpacity + " bg-white"}></div>
                <Image
                    src={"/images/products/" + props.thumbnail}
                    layout="responsive"
                    objectFit="contain"
                    width="0"
                    height="0"
                />
            </div>
        )
    }

    changeProductPreview = (props) => {
        this.setState({previewedProductImage: props.thumbnail.replace('-thumbnail', '')})
    }

    render() {
        return (
            <>
                { this.state.showProductPreviewSlider ?
                    <div className="bg-black/[0.75] absolute w-full h-full z-50 top-0 left-0 right-0 bottom-0">
                        <div className="max-w-[34rem] w-full h-full mx-auto flex flex-col justify-center">
                            <div className="w-initial h-auto relative">
                                <Image
                                    src={"/images/products/" + this.state.sliderProductToView}
                                    layout="responsive"
                                    objectFit="contain"
                                    width="0"
                                    height="0"
                                    className="rounded-2xl"
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-6 mt-8">
                                <this.ProductThumbnail thumbnail="image-product-1-thumbnail.jpg" />
                                <this.ProductThumbnail thumbnail="image-product-2-thumbnail.jpg" />
                                <this.ProductThumbnail thumbnail="image-product-3-thumbnail.jpg" />
                                <this.ProductThumbnail thumbnail="image-product-4-thumbnail.jpg" />
                            </div>
                        </div>
                    </div>
                : null }
                <div className="flex flex-col min-w-[38%] max-w-[38%] h-initial">
                    <div className="w-initial h-auto relative">
                        <Image
                            src={"/images/products/" + this.state.previewedProductImage}
                            layout="responsive"
                            objectFit="contain"
                            width="0"
                            height="0"
                            className="rounded-2xl cursor-pointer"
                            onClick={() => this.ProductPreviewSlider(this.state.previewedProductImage)}
                        />
                    </div>

                    <div className="grid grid-cols-4 gap-6 mt-8">
                        <this.ProductThumbnail thumbnail="image-product-1-thumbnail.jpg" />
                        <this.ProductThumbnail thumbnail="image-product-2-thumbnail.jpg" />
                        <this.ProductThumbnail thumbnail="image-product-3-thumbnail.jpg" />
                        <this.ProductThumbnail thumbnail="image-product-4-thumbnail.jpg" />
                    </div>
                </div>
            </>
        )
    }
}