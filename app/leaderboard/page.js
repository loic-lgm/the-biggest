"use client"
import Button from "@/components/button"
import { useState } from "react"

export default function Leaderboard() {
	// Variables
	let surname = "tota"
	let buttonTextLeader = "Monsieur Carlos !"
	// let counter = 0

	// Hook d'etat
	const [counter, setCounter] = useState(0)

	// Event listener
	function handleButtonClickleader(e) {
		// counter++
		setCounter(counter + 1)
		console.log(counter)
	}

	return (
		<>
			<div className="carlos">{surname}</div>
			{/* <Button buttonText={buttonTextLeader} handleButtonClick={handleButtonClickleader} /> */}
			<div onClick={handleButtonClickleader}>{buttonTextLeader} </div>
			<div>Clique :  {counter}</div>
		</>
	)
}