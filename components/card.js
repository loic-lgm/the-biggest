"use client"
import { useState } from "react"

export default function Card({id, description, year, country, sentence_year, isWinner, play, handleClick}) {
	return (
		<div 
			className={"flex flex-col justify-around items-center w-1/2 hover:bg-orange-100 hover:cursor-pointer sentence" + id}
			onClick={handleClick}
		>
			<div className="w-3/4 mt-8 text-center text-3xl">
				{description}
			</div>
			<div className="text-3xl">
				{year}
			</div>
			<div className="text-3xl">
				{country}
			</div>
			{!play &&
				<div className="text-3xl">
				{sentence_year} mois
			</div>
			}
		</div>
	)
}