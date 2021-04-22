import * as elements from './elements.js'

const xmlhttp = new XMLHttpRequest()
xmlhttp.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		const json = JSON.parse(this.responseText)

		const randomPlayer = json.players[Math.floor(Math.random() * 10)]

		const title = (randomPlayer["Gender"] == "Male") ? 'Mr.' : 'Mrs.'

		elements.introText1Element.innerHTML = `Hey ${title} ${randomPlayer["Name"]}. Your were born on ${randomPlayer["Date of birth"]}. So you are ${randomPlayer["Age"]} years old.`

		elements.introText2Element.innerHTML = `You live in ${randomPlayer["City"]}, ${randomPlayer["State"]}`

		elements.introText3Element.innerHTML = `Your Highest Qualification is ${randomPlayer["Highest Qualification"]} and you are a ${randomPlayer["Occupation"]}`

		elements.introText4Element.innerHTML = `Your Father's Name is ${randomPlayer["Father's Name"]} and your Mother's Name is ${randomPlayer["Mother's Name"]}`
	}
}
xmlhttp.open("GET", "../assets/player.json", true)
xmlhttp.send()


window.onload = () => {
	elements.introButton.addEventListener('click', () => {
		elements.introElement.style.display = 'none'
		elements.containerElement.style.display = 'flex'
		elements.homeElement.click()
	})
}