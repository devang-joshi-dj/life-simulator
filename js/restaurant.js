import * as elements from './elements.js'
import * as config from './config.js'

document.addEventListener("DOMContentLoaded", () => {

	const fastFood = () => {
		config.updateValue(config.health, -10)
		config.updateValue(config.hunger, +10)
		config.updateValue(config.happiness, +15)
		config.updateValue(config.cash, -17)
	}

	const seaFood = () => {
		config.updateValue(config.health, +5)
		config.updateValue(config.hunger, +10)
		config.updateValue(config.happiness, +20)
		config.updateValue(config.cash, -22)
	}

	const salad = () => {
		config.updateValue(config.health, +10)
		config.updateValue(config.hunger, +10)
		config.updateValue(config.happiness, +20)
		config.updateValue(config.cash, -12)
	}

	const southIndian = () => {
		config.updateValue(config.health, +7)
		config.updateValue(config.hunger, +10)
		config.updateValue(config.happiness, +20)
		config.updateValue(config.cash, -17)
	}

	const northIndian = () => {
		config.updateValue(config.health, +10)
		config.updateValue(config.hunger, +10)
		config.updateValue(config.happiness, +20)
		config.updateValue(config.cash, -17)
	}

	const italianFood = () => {
		config.updateValue(config.health, +10)
		config.updateValue(config.hunger, +5)
		config.updateValue(config.happiness, +20)
		config.updateValue(config.cash, -12)
	}

	const chineseFood = () => {
		config.updateValue(config.health, -20)
		config.updateValue(config.hunger, +10)
		config.updateValue(config.happiness, +20)
		config.updateValue(config.cash, -17)
	}

	document.addEventListener('click', () => {
		config.disableElement(elements.restaurantEatFastFood, 7, 16)
		config.disableElement(elements.restaurantEatSeaFood, 7, 17)
		config.disableElement(elements.restaurantEatItalianFood, 7, 16)
		config.disableElement(elements.restaurantEatChineseFood, 7, 16)
	})

	elements.restaurantEatFastFood.addEventListener("click", fastFood)
	elements.restaurantEatSeaFood.addEventListener("click", seaFood)
	elements.restaurantEatSalad.addEventListener("click", salad)
	elements.restaurantEatSouthIndian.addEventListener("click", southIndian)
	elements.restaurantEatNorthIndian.addEventListener("click", northIndian)
	elements.restaurantEatItalianFood.addEventListener("click", italianFood)
	elements.restaurantEatChineseFood.addEventListener("click", chineseFood)
})