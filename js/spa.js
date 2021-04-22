import * as elements from './elements.js'
import * as config from './config.js'

document.addEventListener("DOMContentLoaded", () => {

	const massage = () => {
		//health
		config.updateValue(config.health, +7)

		//happiness
		config.updateValue(config.happiness, +15)

		//cash
		config.updateValue(config.cash, -22)
	}

	const manicurePedicure = () => {
		//health
		config.updateValue(config.health, +10)

		//happiness
		config.updateValue(config.happiness, +15)

		//cash
		config.updateValue(config.cash, -22)
	}

	document.addEventListener('click', () => {
		config.disableElement(elements.spaMassage, 21, 9)
		config.disableElement(elements.spaManicurePedicure, 21, 9)
	})

	elements.spaMassage.addEventListener("click", massage)
	elements.spaManicurePedicure.addEventListener("click", manicurePedicure)
})