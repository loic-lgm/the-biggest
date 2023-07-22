import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
export default function Modal({display, isWinner}) {
	if (display) {
		return (
			<div className="container-modal">
				<div id="popup-modal" tabIndex="-1" className="flex justify-center items-center fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
					<div className="relative w-full max-w-md max-h-full">
						<div className="relative bg-white bg-opacity-20 hover:bg-opacity-100 rounded-lg shadow dark:bg-gray-700">
							<div className="p-6 text-center">
								<svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
									<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
								</svg>
								{isWinner ? 
									<h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
										Vous avez gagné !
									</h3>
								:
									<h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
											Vous avez perdu !
									</h3>
								}
								{isWinner ?
									<button data-modal-hide="popup-modal" type="button" className="text-white bg-green-400 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
										Continuer
									</button>
								:
									<button data-modal-hide="popup-modal" type="button" className="text-white bg-green-400 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
										<Link href="/play">Recommencer</Link>
									</button>
								}
								<button data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
									<Link href="/">Non, quitter</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}