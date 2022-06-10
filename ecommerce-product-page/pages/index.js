import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import ProductSlider from '../components/ProductSlider'
import ProductData from '../components/ProductData'


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
					
					<ProductData />
				</div>
			</main>
		</>
	)
}
