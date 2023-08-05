export const getRandomSentences = (sentences) => {
 let randomSentences = shuffle(sentences)
 while (randomSentences[0].sentence_year == randomSentences[1].sentence_year) {
	randomSentences = shuffle(sentences)
 }
 return randomSentences
}

const shuffle = (sentences) => {
	const shuffled = sentences.sort(() => 0.5 - Math.random())
	return shuffled.slice(0, 2)
}

export const getWinnerId = (sentences) => {
	let sentencesTime = []
	let winnerId = ""
	sentences.forEach(sentence => {
		sentencesTime.push(sentence.sentence_year)
	});
	const biggestSentence = Math.max(...sentencesTime)
	sentences.map((s) => {
		if (s.sentence_year == biggestSentence) {
			winnerId = s.id
		}
	})
	return winnerId
}
