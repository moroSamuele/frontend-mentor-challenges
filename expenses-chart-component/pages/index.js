import Head from 'next/head'

let dataChart = require('/data/data.json')


const ChartLine = (props) => {
	const height = (300/100*props.amount).toFixed(2)
	const bgActive = props.line == 2 ? "bg-primaryCyan" : "bg-primarySoftRed"
	const bgOnHover = " group-hover:opacity-70"
	
	return (
		<div className="group h-auto self-end relative" style={{height: height + "px"}}>
			<div className={bgActive + bgOnHover + " rounded-md w-full transition-all"} style={{height: height + "px"}}>
			</div>
			<span className="group-hover:block hidden absolute -top-10 left-1/2 -translate-x-1/2 bg-neutralDarkBrown rounded text-sm py-[0.45rem] font-medium px-[0.35rem]">${props.amount}</span>
			<p className="text-black/[0.5] text-sm py-1 text-center">{props.day}</p>
		</div>
	)
}

export default function Home() {
	return (
		<>
			<Head>
				<title>Moro Samuele - Expenses chart component</title>
				<meta name="description" content="Moro Samuele - Expenses chart component" />
				<link rel="icon" href="/favicon.png" />

				<link rel="preconnect" href="https://fonts.googleapis.com" /> 
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap" rel="stylesheet" />
			</Head>

			<main className="float-left w-full h-full min-h-full font-dmSans">
				<div className="float-left max-w-[29rem] w-full h-full p-3 relative left-1/2 -translate-x-1/2">
					<div className="w-full h-auto flex flex-col space-y-5 text-white">
						<div className="w-full pl-6 pr-8 py-4 rounded-2xl bg-primarySoftRed flex flex-row">
							<div className="grow flex flex-col justify-center">
								<p className="text-sm text-white/[0.8] pt-[0.4rem]">My balance</p>
								<p className="text-[1.66rem] font-bold">$921.48</p>
							</div>
							<div className="w-14 flex flex-row items-center">
								<img src="/images/logo.svg" />
							</div>
						</div>

						<div className="w-full p-4 md:p-8 rounded-2xl bg-white flex flex-col">
							<div className="grow flex flex-col justify-center">
								<h3 className="text-neutralDarkBrown text-[1.5rem] font-medium">Spending - Last 7 days</h3>
							</div>
							<div className="mt-16 mb-16">
								<div className="grid grid-cols-7 gap-3 md:gap-4">
									{
										dataChart.map(function(data, k) {
											return (
												<ChartLine
													line={k}
													key={k}
													amount={data.amount}
													day={data.day}
												/>
											)
										})
									}
								</div>
							</div>
							<span className="border-t-[2px] border-neutralCream mb-10"></span>
							<div className="flex flex-col">
								<h3 className="text-[0.95rem] text-black/[0.4]">
									Total this month
								</h3>
								<div className="flex flex-row items-center">
									<p className="text-[2.5rem] text-neutralDarkBrown font-bold grow">$478.33</p>
									<div className="flex flex-col items-end">
										<p className="text-neutralDarkBrown text-sm font-bold leading-4">+2.4%</p>
										<p className="text-[0.95rem] text-black/[0.4]">from last month</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}


// 300 (px) / 100 (%) x valore_giorno