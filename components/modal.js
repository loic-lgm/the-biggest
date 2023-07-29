/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import TrophyIcon from "./trophy_icon";
import LoseIcon from "./lose_icon";
import GavelImage from "./gavel";

export default function Modal({display, isWinner, score, handleClick}) {
	if (display) {
		return (
			<div className="container-modal">
				<div id="popup-modal" tabIndex="-1" className="flex justify-center items-center fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
					<div className="relative w-full max-w-md max-h-full">
						<div className="relative bg-white lg:bg-opacity-20 hover:bg-opacity-100 rounded-lg shadow dark:bg-gray-700">
							<div className="p-6 text-center">
								{isWinner ?
									<TrophyIcon />
								:	
									<LoseIcon />
								}
								<h3 className="text-lg font-normal text-gray-500 dark:text-gray-400">
									{isWinner ? "Vous avez gagné !" : "Vous avez perdu !"}
								</h3>
								<div className="flex justify-center items-center mb-5 text-gray-500">
									{score}X
									<GavelImage />
								</div>
								<button
								 data-modal-hide="popup-modal" type="button" className="text-white bg-red-900 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
								 onClick={handleClick}
								>
									{isWinner ? "Continuer" : "Recommencer"}
								</button>
								<button data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
									<Link href="/">Quitter</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}