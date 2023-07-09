'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
	// let linkClass = "px-3 flex items-center hover:border-red-700 hover:border-b-2 border-b-2 border-transparent transition ease-in-out h-full " 
	const activeClass = "border-b-2 border-red-700 "
	const pathname = usePathname()
	let windowPathName = useRef("")
	const [isActive, setIsActive] = useState(false)
	const linkClass = "px-3 flex items-center hover:border-red-700 hover:border-b-2 border-b-2 border-transparent transition ease-in-out h-full "
	const linkActiveClass = useRef("")

	useEffect(() => {
		if (window.location.pathname == pathname) {
			windowPathName.current = pathname
			setIsActive(true)
			linkActiveClass.current = linkClass.replace("border-transparent", "") + activeClass
		}
	}, [pathname])


	return (
		<div className="flex justify-around items-center h-20 border-b-1 shadow-md">
			<div>LOGO</div>
			<div className="flex h-full items-center">
				<Link href="/" className={windowPathName.current == pathname ? linkActiveClass.current : linkClass}>
					HOME
				</Link>
				<Link href="/play" className={windowPathName.current == pathname ? linkActiveClass.current : linkClass}>
					JEU
				</Link>
				<Link href="/rules" className={windowPathName.current == pathname ? linkActiveClass.current : linkClass}>
					RÈGLES
				</Link>
			</div>
			<button className="bg-red-900 text-white px-3 py-1 rounded hover:bg-red-700">
				PLAY
			</button>

		</div>
	)
}