"use client"

import GavelImage from "./gavel"

export default function Card({id, description, year, country, sentence_year, play, isWinner, handleClick}) {
	return (
		<div 
			className={"flex flex-col justify-around items-center w-1/2 hover:bg-orange-100 hover:cursor-pointer sentence" + id}
			onClick={handleClick}
		>
			<div className={"flex items-center min-h-[30%] w-3/4 justify-center text-center lg:text-3xl sentence" + id}>
				{description}
			</div>
			<div className={"lg:text-3xl sentence" + id}>
				{year}
			</div>
			<div className={"lg:text-3xl sentence" + id}>
				{country}
			</div>
			{!play &&
				<div className={"flex lg:text-3xl sentence" + id}>
					<div className={`mr-4 ${isWinner ? " font-bold text-green-500" : "text-red-800"}`}>
						{sentence_year} mois
					</div>
					{isWinner && 
						<GavelImage />
					}
				</div>
			}
		</div>
	)
}