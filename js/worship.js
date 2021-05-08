import * as elements from './elements.js'
import * as config from './config.js'

document.addEventListener("DOMContentLoaded", () => {

	const pray = () => {
		if (config.cash.innerHTML > 10) {
			config.updateValue(config.health, +10)
			config.updateValue(config.hunger, +5)
			config.updateValue(config.happiness, +15)
			config.updateValue(config.cash, -10)
			config.updateTime(1)
		} else {
			alert("You don't have enough money")
		}
	}

	const serve = () => {
		if (config.cash.innerHTML > 20) {
			config.updateValue(config.hunger, +8)
			config.updateValue(config.happiness, +15)
			config.updateValue(config.cash, -20)
			config.updateTime(2)
		} else {
			alert("You don't have enough money")
		}
	}

	const charity = () => {
		if (config.cash.innerHTML > 30) {
			config.updateValue(config.hunger, +8)
			config.updateValue(config.happiness, +20)
			config.updateValue(config.cash, -30)
			config.updateTime(1)
		} else {
			alert("You don't have enough money")
		}
	}

	document.addEventListener('click', () => {
		config.disableElement(elements.worshipPray, 21, 7)
		config.disableElement(elements.worshipServe, 21, 7)
		config.disableElement(elements.worshipCharity, 21, 7)
	})

	elements.worshipPray.addEventListener("click", pray)
	elements.worshipServe.addEventListener("click", serve)
	elements.worshipCharity.addEventListener("click", charity)
})