import * as elements from './elements.js'
import * as config from './config.js'

document.addEventListener('DOMContentLoaded', () => {

	const shopping = () => {
		if (config.cash.innerHTML > 30) {
			config.updateValue(config.hunger, +3)
			config.updateValue(config.happiness, +3)
			config.updateValue(config.cash, -30)
			config.updateTime(2)
		} else {
			alert(`You don't have enough money`)
		}
	}

	const watchMovies = () => {
		if (config.cash.innerHTML > 30) {
			config.updateValue(config.hunger, +5)
			config.updateValue(config.happiness, +10)
			config.updateValue(config.cash, -30)
			config.updateTime(3)
		} else {
			alert(`You don't have enough money`)
		}
	}

	const gamingZone = () => {
		if (config.cash.innerHTML > 30) {
			config.updateValue(config.hunger, +5)
			config.updateValue(config.happiness, +10)
			config.updateValue(config.cash, -30)
			config.updateTime(1)
		} else {
			alert(`You don't have enough money`)
		}
	}

	const foodCourt = () => {
		if (config.cash.innerHTML > 25) {
			config.updateValue(config.health, -8)
			config.updateValue(config.hunger, -10)
			config.updateValue(config.happiness, +10)
			config.updateValue(config.cash, -25)
			config.updateTime(1)
		} else {
			alert(`You don't have enough money`)
		}
	}

	const foodAndGroceries = () => {
		if (config.cash.innerHTML >= 10) {
			config.updateValue(config.cash, -10)

			if (isNaN(config.foodAndGrocery.innerHTML)) {
				config.setValue(config.foodAndGrocery, +10)
			} else {
				config.updateValue(config.foodAndGrocery, +10)
			}

			config.updateTime(0, 40)
		}
	}

	document.addEventListener('click', () => {
		config.disableElement(elements.mallShopping, 21, 10)
		config.disableElement(elements.mallWatchMovies, 21, 10)
		config.disableElement(elements.mallGamingZone, 21, 10)
		config.disableElement(elements.mallFoodCourt, 21, 10)
		config.disableElement(elements.mallFoodAndGroceries, 21, 10)
	})

	elements.mallShopping.addEventListener('click', shopping)
	elements.mallWatchMovies.addEventListener('click', watchMovies)
	elements.mallGamingZone.addEventListener('click', gamingZone)
	elements.mallFoodCourt.addEventListener('click', foodCourt)
	elements.mallFoodAndGroceries.addEventListener('click', foodAndGroceries)
})