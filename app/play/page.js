"use client"
import Card from "@/components/card";
import Modal from "@/components/modal";
import Timer from "@/components/timer";

import sentences from "../../data/data.json"
import { getRandomSentences, getWinnerId } from "../../utils/function.js"

import { useEffect, useState } from "react";
import { setCookie, getCookie, deleteCookie } from 'cookies-next';
import moment from "moment/moment";

import '../../styles/play.css'

export default function Play() {
	const [data, setData] = useState()
	const [play, setPlay] = useState(true)
	const [isWinner, setIsWinner] = useState(false)
	const [score, setScore] = useState(0)
	const [timeLeft, setTimeLeft] = useState(20);
	const [answeredQuestion, setAnsweredQuestion] = useState(0)
	const [goodAnswer, setGoodAnswer] = useState(0)
	const [start, setStart] = useState(false)
	
	if (timeLeft == 0) {
		setCookie('already_played', true, {
			path: '/play',
		});
	}
	
	if (moment("24:00:00", "hh:mm:ss").diff(moment(), 'seconds') == 0) {
		deleteCookie('already_played', {
			path: '/play'
		})
	}

	useEffect(() => {
		setData(getRandomSentences(sentences))
	}, [])

	let winnerId = ""
	if (data) winnerId = getWinnerId(data)

	const handleClickAnswer = (e) => {
		setData(getRandomSentences(sentences))
		setAnsweredQuestion(answeredQuestion + 1)
		let sentenceClicked = e.target
		if (sentenceClicked.classList.contains("sentence" + winnerId)) {
			setIsWinner(true)
			setScore(score + 1)
			setGoodAnswer(goodAnswer + 1)
		}
	}

	if (data) {
		return (
			<div className="flex container-card">
				{timeLeft > 0 && !getCookie("already_played") &&
					<Timer 
						timeLeft={timeLeft} 
						setTimeLeft={setTimeLeft}
						setPlay={setPlay}
						start={start}
						setStart={setStart}
					/>
				}
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
							start={start}
						/>
					)
				})}
				<Modal
					isWinner={isWinner}
					score={score}
					goodAnswer={goodAnswer}
					answeredQuestion={answeredQuestion}
					timeLeft={timeLeft}
					alreadyPlayed={getCookie("already_played")}
				/>
			</div>
		)
	}	
}