"use client"
import Card from "@/components/card";
import '../../styles/play.css'
import sentences from "../../data/data.json"
import { getRandomSentences } from "../../utils/function.js"
import { useState } from "react";

export default function Play() {
	const [data, setData] = useState(getRandomSentences(sentences))
	console.log(data)
	return (
		<div className="flex container-card">
			<Card id={data[0].id} description={data[0].description} country={data[0].country} year={data[0].year}/>
			<Card id={data[1].id} description={data[1].description} country={data[1].country} year={data[1].year}/>
		</div>
	)
}