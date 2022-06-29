import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'


export default function Home() {
	return (
		<>
			<Head>
				<title>Crowdfunding Product Page</title>
				<meta name="description" content="Fontend Mentor: Crowdfunding Product Page" />
				<link rel="icon" href="/favicon.ico" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Commissioner:wght@400;500;700&display=swap" rel="stylesheet" />
			</Head>

			<main className="font-commissioner">
				<div className="absolute w-full z-0">
					<img src="/images/image-hero-desktop.jpg" className="w-full" />
				</div>

				<Header />

				<div className="w-full float-left z-10 relative">
					<div className="w-[760px] mx-auto bg-white rounded-lg shadow-sm py-6 px-14 relative">
						<div className="absolute w-14 h-14 transform left-1/2 translate-x-[-50%] top-[-1.65rem]">
							<Image
								src="/images/logo-mastercraft.svg"
								layout="responsive"
								objectFit="contain"
								width="0"
								height="0"
							/>
						</div>
						<div className="flex flex-col items-center">
							<h1 className="text-2xl font-black pt-7 pb-2">Mastercraft Bamboo Monitor Riser</h1>
							<span className="text-sm pb-2 text-darkGrey">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</span>
						</div>
						<div className="flex flex-row justify-between mt-10 mb-9">
							<>
								<Link href="#">
									<a className="bg-primaryModerateCyan text-white font-medium text-[0.875rem] pt-[0.85rem] pb-[0.95rem] px-10 rounded-full">Back this project</a>
								</Link>
							</>
							<div className="bg-gray-100 rounded-full flex flex-row items-center">
								<div className="w-12 h-12">
									<Image
										src="/images/icons/icon-bookmark.svg"
										layout="responsive"
										objectFit="contain"
										width="0"
										height="0"
									/>
								</div>
								<span className="font-bold text-[0.875rem] text-darkGrey pl-4 pr-6">Bookmark</span>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
