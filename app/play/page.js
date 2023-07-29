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
	const [isWinner, setIsWinner] = useState(false)
	const [displayModal, setDisplayModal] = useState(false)
	const [score, setScore] = useState(0)

	useEffect(() => {
		setData(getRandomSentences(sentences))
	}, [])

	let winnerId = ""
	if (data) winnerId = getWinnerId(data)

	const handleClickAnswer = (e) => {
		setPlay(false)
		setDisplayModal(true)
		let sentenceClicked = e.target
		if (sentenceClicked.classList.contains("sentence" + winnerId)) {
			setIsWinner(true)
			setScore(score + 1)
		} else {
			setScore(0)
		}
	}

	const handleClickContinue = (e) => {
		setData(getRandomSentences(sentences))
		setDisplayModal(false)
		setIsWinner(false)
		setPlay(true)
	}

	if (data) {
		return (
			<div className="flex container-card">
				{data.map((sentence) => {
					return (
						<Card 
							key={sentence.id}
							id={sentence.id} 
							description={sentence.description} 
							country={sentence.country} 
							year={sentence.year}
							sentence_year={sentence.sentence_year}
							isWinner={winnerId == sentence.id ? true : false}
							handleClick={handleClickAnswer}
							play={play}
						/>
					)
				})}
				<Modal
				 display={displayModal} 
				 isWinner={isWinner}
				 score={score}
				 handleClick={handleClickContinue}
				/>
			</div>
		)
	}	
}