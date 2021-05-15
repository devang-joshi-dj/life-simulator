import * as elements from './elements.js'

const xmlhttp = new XMLHttpRequest()
xmlhttp.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		const json = JSON.parse(this.responseText)

		const randomPlayer = json.players[Math.floor(Math.random() * 10)]

		const title = (randomPlayer['Gender'] == 'Male') ? 'Mr.' : 'Mrs.'

		elements.introTextElement.innerHTML = `
		<h1><center>ID</center></h1>
		NAME: ${title} ${randomPlayer["Name"]}<br>
		DOB: ${randomPlayer["Date of birth"]}<br>
		AGE: ${randomPlayer["Age"]}<br>
		City: ${randomPlayer["City"]}<br>
		State: ${randomPlayer["State"]}<br>
		Highest Qualification : ${randomPlayer["Highest Qualification"]}<br>
		Occupation: ${randomPlayer["Occupation"]}<br>
		Father's Name: ${randomPlayer["Father's Name"]}<br>
		Mother's Name: ${randomPlayer["Mother's Name"]}
		`
	}
}
xmlhttp.open('GET', '../assets/player.json', true)
xmlhttp.send()


window.onload = () => {
	elements.howToPlayButton.addEventListener('click', () => {
		// event listener for how to play button
		elements.howToPlayContainer.style.display = 'none'
	})

	elements.introButton.addEventListener('click', () => {
		// event listener for introID button
		elements.introContainer.style.display = 'none'
		elements.containerElement.style.display = 'flex'
		elements.homeElement.click()
	})
}