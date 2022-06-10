import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import ProductSlider from '../components/ProductSlider'


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

			<Header />

			<main className="float-left w-full h-full font-kumbhSans mb-40">
				<div className="flex flex-col md:flex-row container mx-auto mt-12 px-16">
					
					<ProductSlider />
					
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
							<div className="flex flex-row bg-lightGrayishBlue rounded-xl">
								<div className="text-primaryOrange font-bold text-3xl w-14 text-center leading-9 pt-2 pb-4">-</div>
								<input type="text" className="bg-transparent outline-none text-center font-bold text-black w-16" value="0" />
								<div className="text-primaryOrange font-bold text-3xl w-14 text-center leading-9 pt-2 pb-4">+</div>
							</div>
							<button className="bg-primaryOrange grow max-w-[20rem] text-white py-4 rounded-xl shadow-2xl shadow-primaryNotToMuchOrange font-bold flex flex-row items-center justify-center">
								Add to cart
							</button>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
