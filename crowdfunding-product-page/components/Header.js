import React from "react"
import Link from 'next/link'


let HeaderLink = (props) => {
	return (
        <Link href={props.link}>
		    <a className="text-white text-[0.85rem] font-commissioner">{props.linkName}</a>
        </Link>
	)
}

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header className="relative float-left w-full">
                <div className="container flex flex-row mx-auto h-20 items-center">
                    <div className="flex flex-row">
                        <img src="/images/logo.svg" />
                    </div>
                    <div className="grow flex flex-row justify-end">
                        <nav className="flex flex-row space-x-8">
                            <HeaderLink
                                link="#"
                                linkName="About"
                            />
                            <HeaderLink
                                link="#"
                                linkName="Discover"
                            />
                            <HeaderLink
                                link="#"
                                linkName="Get Started"
                            />
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}