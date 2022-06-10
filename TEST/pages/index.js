import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


let navigationLinks = require("/data/navigation.json")

export default function Home() {
	return (
		<>
			<Head>
				<title>Moro Samuele - E-commerce product page</title>
				<meta name="description" content="Moro Samuele - E-commerce product page" />
				<link rel="icon" href="/favicon.png" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap" rel="stylesheet" />
			</Head>

			<header className="w-full h-24 bg-white float-left font-kumbhSans">
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
			<main className="float-left w-full h-full font-kumbhSans">
				<div className="flex flex-col md:flex-row container mx-auto mt-16 px-16">
					<div class="flex flex-col min-w-[38%] max-w-[38%] h-initial">
						<div className="w-initial h-auto relative">
							<Image
								src="/images/image-product-1.jpg"
								layout="responsive"
								objectFit="contain"
								width="0"
								height="0"
								className="rounded-2xl"
							/>
						</div>
						<div className="grid grid-cols-4 gap-6 mt-8">
							<div className="group relative h-auto w-full border-[2px] rounded-[0.85rem] overflow-hidden transition-all cursor-pointer border-transparent hover:border-primaryOrange">
								<div className="group-hover:opacity-75 w-full h-full z-10 transition-all absolute opacity-0 bg-white"></div>
								<Image
									src="/images/image-product-1-thumbnail.jpg"
									layout="responsive"
									objectFit="contain"
									width="0"
									height="0"
								/>
							</div>
							<div className="group relative h-auto w-full border-[2px] rounded-[0.85rem] overflow-hidden transition-all cursor-pointer border-transparent hover:border-primaryOrange">
								<div className="group-hover:opacity-75 w-full h-full z-10 transition-all absolute opacity-0 bg-white"></div>
								<Image
									src="/images/image-product-2-thumbnail.jpg"
									layout="responsive"
									objectFit="contain"
									width="0"
									height="0"
									className="rounded-xl"
								/>
							</div>
							<div className="group relative h-auto w-full border-[2px] rounded-[0.85rem] overflow-hidden transition-all cursor-pointer border-transparent hover:border-primaryOrange">
								<div className="group-hover:opacity-75 w-full h-full z-10 transition-all absolute opacity-0 bg-white"></div>
								<Image
									src="/images/image-product-3-thumbnail.jpg"
									layout="responsive"
									objectFit="contain"
									width="0"
									height="0"
									className="rounded-xl"
								/>
							</div>
							<div className="group relative h-auto w-full border-[2px] rounded-[0.85rem] overflow-hidden transition-all cursor-pointer border-transparent hover:border-primaryOrange">
								<div className="group-hover:opacity-75 w-full h-full z-10 transition-all absolute opacity-0 bg-white"></div>
								<Image
									src="/images/image-product-4-thumbnail.jpg"
									layout="responsive"
									objectFit="contain"
									width="0"
									height="0"
									className="rounded-xl"
								/>
							</div>
						</div>
					</div>
					<div class="flex flex-col h-initial px-[7rem] mt-20 space-y-4">
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
					</div>
				</div>
			</main>
		</>
	)
}
