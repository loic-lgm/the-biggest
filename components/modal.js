/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-children-prop */
import Link from "next/link";
import TrophyIcon from "./trophy_icon";
import LoseIcon from "./lose_icon";
import GavelImage from "./gavel";
import {
	EmailShareButton,
	FacebookShareButton,
	HatenaShareButton,
	InstapaperShareButton,
	LineShareButton,
	LinkedinShareButton,
	LivejournalShareButton,
	MailruShareButton,
	OKShareButton,
	PinterestShareButton,
	PocketShareButton,
	RedditShareButton,
	TelegramShareButton,
	TumblrShareButton,
	TwitterShareButton,
	ViberShareButton,
	VKShareButton,
	WhatsappShareButton,
	WorkplaceShareButton,
	EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon
} from "react-share";

export default function Modal({score, goodAnswer, answeredQuestion, timeLeft, alreadyPlayed}) {
	if (!timeLeft && alreadyPlayed) {
		return (
			<div className="container-modal">
				<div id="popup-modal" tabIndex="-1" className="flex justify-center items-center fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
					<div className="relative w-full max-w-md max-h-full">
						<div className="relative bg-white lg:bg-opacity-20 hover:bg-opacity-100 rounded-lg shadow dark:bg-gray-700">
							<div className="p-6 text-center">
								{goodAnswer > 10 ?
									<TrophyIcon />
								:	
									<LoseIcon />
								}
								<div className="flex justify-center items-center mb-5 text-gray-500">
									{score} {score < 2 ? "point" : "points"}
									<GavelImage />
								</div>
								<h3 className="text-lg font-normal text-gray-500 dark:text-gray-400">
									{goodAnswer > 10 ? "Pas mal !" : "C'est pas ouf !"}
								</h3>
								<div className="flex justify-center items-center mb-5 text-gray-500">
									Vous avez répondu correctement à {goodAnswer} {answeredQuestion < 2 ?"question" : "questions"} sur {answeredQuestion}.
								</div>
								<button data-modal-hide="popup-modal" type="button" className="text-white bg-red-900 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2 mb-2">
									<Link href="/">Quitter</Link>
								</button>
								<div className="text-lg font-normal text-gray-500 dark:text-gray-400">
									La partie est terminée, revenez demain !
								</div>
								<div className="flex m-2.5 justify-center">
									<div className="mx-2.5">	
										<WhatsappShareButton 
											url={'https://the-biggest.vercel.com'} 
											children={
												<WhatsappIcon size={32} round={true}/>
											}
											title={"Jai réalisé " + score + (score > 1 ? " points" : " point") + " sur Qui a la plus grosse !" }
										/>
									</div>
									<div className="mx-2.5">	
										<TwitterShareButton 
											url={'https://the-biggest.vercel.com'} 
											children={
												<TwitterIcon size={32} round={true}/>
											}
											title={"Jai réalisé " + score + (score > 1 ? " points" : " point") + " sur Qui a la plus grosse !" }
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	} else if (alreadyPlayed) {
		return (
			<div className="container-modal">
				<div id="popup-modal" tabIndex="-1" className="flex justify-center items-center fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
					<div className="relative w-full max-w-md max-h-full">
						<div className="relative bg-white lg:bg-opacity-20 hover:bg-opacity-100 rounded-lg shadow dark:bg-gray-700">
							<div className="p-6 text-center">
								{goodAnswer > 10 ?
									<TrophyIcon />
									:	
									<LoseIcon />
								}
								<div className="flex justify-center items-center mb-5 text-gray-500">
									Vous avez avez déjà joué aujourd'hui, à demain !
								</div>
								<button data-modal-hide="popup-modal" type="button" className="text-white bg-red-900 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2 mb-2">
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