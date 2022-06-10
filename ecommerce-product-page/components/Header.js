import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


let navigationLinks = require("/data/navigation.json")

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header className="z-0 w-full h-24 bg-white float-left font-kumbhSans">
				<div className="flex flex-row border-b-[1px] border-gray-200 h-24 container mx-auto space-x-12">
					<div className="relative h-full w-32">
						<Image
							src="/images/logo.svg"
							layout="fill"
							objectFit="contain"
						/>
					</div>
					<nav className="flex flex-row items-center h-full space-x-7 text-sm text-darkGrayishBlue grow">
						{
							navigationLinks.map(function(data, k) {
								return (
									<Link href={data.link} key={k}>
										<a className="transition-all leading-[6rem] hover:text-black">{data.name}</a>
									</Link>
								)
							})
						}
					</nav>
					<div className="flex flex-row justify-end items-center space-x-10">
						<div className="relative h-full w-5">
							<Image
								src="/images/icon-cart.svg"
								layout="fill"
								objectFit="contain"
							/>
						</div>
						<div className="relative h-full w-[2.65rem]">
							<Image
								src="/images/image-avatar.png"
								layout="fill"
								objectFit="contain"
							/>
						</div>
					</div>
				</div>
			</header>
        )
    }
}