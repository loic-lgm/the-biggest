'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import PlayIcon from './play_icon'

export default function Navbar() {
	const pathname = usePathname()
	const activeClass = "border-b-2 border-red-700 "
	const linkClass = "px-3 flex items-center hover:border-red-700 hover:border-b-2 transition ease-in-out h-full "

	const navLinks = [
		{
			"href": "/",
			"name" : "HOME"
		},
		{
			"href": "/play",
			"name": "PLAY",
		},
		{
			"href": "/rules",
			"name": "RÈGLES"
		}
	]

	return (
		<div className="flex justify-around items-center h-20 border-b-1 shadow-md">
			<div>LOGO</div>
			<div className="flex h-full items-center">
				{navLinks.map((link) => {
					return (
						<Link
							className={pathname == link.href ? (linkClass + activeClass) : linkClass + "border-b-2 border-transparent"}
							href={link.href}
							key={link.name}
          	>
            	{link.name}
          	</Link>
					)
				})}
			</div>
			<Link href="/play">
				<button className="bg-red-900 text-white px-3 py-1 rounded hover:bg-red-700 flex">
					<PlayIcon />
					PLAY
				</button>
			</Link>

		</div>
	)
}