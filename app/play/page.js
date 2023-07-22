"use client"
import Card from "@/components/card";
import Modal from "@/components/modal";
import '../../styles/play.css'
import sentences from "../../data/data.json"
import { getRandomSentences, getWinnerId } from "../../utils/function.js"
import { useEffect, useState } from "react";

export default function Play() {
	const [data, setData] = useState()
	const [play, setPlay] = useState(true)
	const [isWinner, setIsWinner] = useState()
	const [displayModal, setDisplayModal] = useState(false)
	useEffect(() => {
		setData(getRandomSentences(sentences))
	}, [])
	let winnerId = ""
	if (data) winnerId = getWinnerId(data)
	const handleClick = (e) => {
		setPlay(false)
		setDisplayModal(true)
	}
	if (data) {
		return (
			<div className="flex container-card">
				<Card 
					id={data[0].id} 
					description={data[0].description} 
					country={data[0].country} 
					year={data[0].year}
					sentence_year={data[0].sentence_year}
					isWinner={winnerId == data[0].id ? true : false}
					handleClick={handleClick}
					play={play}
				/>
				<Card
				id={data[1].id} 
				description={data[1].description} 
				country={data[1].country} 
				year={data[1].year}
				sentence_year={data[1].sentence_year}
				isWinner={winnerId == data[1].id ? true : false}
				handleClick={handleClick}
				play={play}
				/>
				<Modal display={displayModal}/>
			</div>
		)
	}	
}