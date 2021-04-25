import * as elements from './elements.js'
import * as config from './config.js'

document.addEventListener("DOMContentLoaded", () => {

	const dance = () => {
		config.updateValue(config.hunger, -5)
		config.updateValue(config.happiness, +15)
		config.updateValue(config.cash, -20)
	}

	const drinkEat = () => {
		config.updateValue(config.health, -20)
		config.updateValue(config.hunger, +8)
		config.updateValue(config.happiness, +15)
		config.updateValue(config.cash, -25)

	}

	const meetPeople = () => {
		config.updateValue(config.happiness, +15)
	}

	document.addEventListener('click', () => {
		config.disableElement(elements.clubDance, 4, 19)
		config.disableElement(elements.clubDrinkEat, 4, 19)
		config.disableElement(elements.clubMeetPeople, 4, 19)
	})

	elements.clubDance.addEventListener("click", dance)
	elements.clubDrinkEat.addEventListener("click", drinkEat)
	elements.clubMeetPeople.addEventListener("click", meetPeople)
})