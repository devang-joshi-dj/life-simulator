import * as elements from './elements.js'
import * as config from './config.js'

document.addEventListener("DOMContentLoaded", () => {

	const massage = () => {
		if (config.cash.innerHTML > 22) {
			config.updateValue(config.health, +7)
			config.updateValue(config.happiness, +15)
			config.updateValue(config.cash, -22)
			config.updateTime(1)
		} else {
			alert("You don't have enough money")
		}
	}

	const manicurePedicure = () => {
		if (config.cash.innerHTML > 22) {
			config.updateValue(config.health, +10)
			config.updateValue(config.happiness, +15)
			config.updateValue(config.cash, -22)
			config.updateTime(1)
		} else {
			alert("You don't have enough money")
		}
	}

	document.addEventListener('click', () => {
		config.disableElement(elements.spaMassage, 21, 9)
		config.disableElement(elements.spaManicurePedicure, 21, 9)
	})

	elements.spaMassage.addEventListener("click", massage)
	elements.spaManicurePedicure.addEventListener("click", manicurePedicure)
})