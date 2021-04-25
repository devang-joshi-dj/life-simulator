import * as elements from './elements.js'
import * as config from './config.js'

document.addEventListener("DOMContentLoaded", () => {

	const shopping = () => {
		config.updateValue(config.hunger, -3)
		config.updateValue(config.happiness, +3)

		if (config.cash.innerHTML > 30) {
			config.updateValue(config.cash, -30)
		} else {
			alert("You don't have enough money")
		}
	}

	const watchMovies = () => {
		config.updateValue(config.hunger, -5)
		config.updateValue(config.happiness, +10)

		if (config.cash.innerHTML > 30) {
			config.updateValue(config.cash, -30)
		} else {
			alert("You don't have enough money")
		}
	}

	const gamingZone = () => {
		config.updateValue(config.hunger, -5)
		config.updateValue(config.happiness, +10)

		if (config.cash.innerHTML > 30) {
			config.updateValue(config.cash, -30)
		} else {
			alert("You don't have enough money")
		}
	}

	const foodCourt = () => {
		config.updateValue(config.health, -8)
		config.updateValue(config.hunger, +10)
		config.updateValue(config.happiness, +10)

		if (config.cash.innerHTML > 25) {
			config.updateValue(config.cash, -25)
		} else {
			alert("You don't have enough money")
		}
	}

	document.addEventListener('click', () => {
		config.disableElement(elements.mallShopping, 21, 10)
		config.disableElement(elements.mallWatchMovies, 21, 10)
		config.disableElement(elements.mallGamingZone, 21, 10)
		config.disableElement(elements.mallFoodCourt, 21, 10)
	})

	elements.mallShopping.addEventListener("click", shopping)
	elements.mallWatchMovies.addEventListener("click", watchMovies)
	elements.mallGamingZone.addEventListener("click", gamingZone)
	elements.mallFoodCourt.addEventListener("click", foodCourt)
})