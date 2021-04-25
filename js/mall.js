import * as elements from './elements.js'
import * as config from './config.js'

document.addEventListener("DOMContentLoaded", () => {

	const shopping = () => {
		config.updateValue(config.hunger, -3)
		config.updateValue(config.happiness, +3)
		config.updateValue(config.cash, -30)
	}

	const watchMovies = () => {
		config.updateValue(config.hunger, -5)
		config.updateValue(config.happiness, +10)
		config.updateValue(config.cash, -30)
	}

	const gamingZone = () => {
		config.updateValue(config.hunger, -5)
		config.updateValue(config.happiness, +10)
		config.updateValue(config.cash, -30)
	}

	const foodCourt = () => {
		config.updateValue(config.health, -8)
		config.updateValue(config.hunger, +10)
		config.updateValue(config.happiness, +10)
		config.updateValue(config.cash, -25)
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