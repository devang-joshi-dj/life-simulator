import * as elements from './elements.js'
import * as config from './config.js'

document.addEventListener("DOMContentLoaded", () => {

	const massage = () => {
		config.updateValue(config.health, +7)
		config.updateValue(config.happiness, +15)
		config.updateValue(config.cash, -22)
	}

	const manicurePedicure = () => {
		config.updateValue(config.health, +10)
		config.updateValue(config.happiness, +15)
		config.updateValue(config.cash, -22)
	}

	document.addEventListener('click', () => {
		config.disableElement(elements.spaMassage, 21, 9)
		config.disableElement(elements.spaManicurePedicure, 21, 9)
	})

	elements.spaMassage.addEventListener("click", massage)
	elements.spaManicurePedicure.addEventListener("click", manicurePedicure)
})