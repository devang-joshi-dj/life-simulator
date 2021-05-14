import * as elements from './elements.js'
import * as config from './config.js'

document.addEventListener('DOMContentLoaded', () => {

	const fastFood = () => {
		if (config.cash.innerHTML > 7) {
			config.updateValue(config.health, -10)
			config.updateValue(config.hunger, -7)
			config.updateValue(config.happiness, +11)
			config.updateValue(config.cash, -7)
			config.updateTime(0, 30)
		} else {
			alert(`You don't have enough money`)
		}
	}

	const seaFood = () => {
		if (config.cash.innerHTML > 22) {
			config.updateValue(config.health, +5)
			config.updateValue(config.hunger, -10)
			config.updateValue(config.happiness, +20)
			config.updateValue(config.cash, -22)
			config.updateTime(1)
		} else {
			alert(`You don't have enough money`)
		}
	}

	const salad = () => {
		if (config.cash.innerHTML > 12) {
			config.updateValue(config.health, +10)
			config.updateValue(config.hunger, -10)
			config.updateValue(config.happiness, +20)
			config.updateValue(config.cash, -12)
			config.updateTime(1)
		} else {
			alert(`You don't have enough money`)
		}
	}

	const southIndian = () => {
		if (config.cash.innerHTML > 17) {
			config.updateValue(config.health, +7)
			config.updateValue(config.hunger, -10)
			config.updateValue(config.happiness, +20)
			config.updateValue(config.cash, -17)
			config.updateTime(1)
		} else {
			alert(`You don't have enough money`)
		}
	}

	const northIndian = () => {
		if (config.cash.innerHTML > 17) {
			config.updateValue(config.health, +10)
			config.updateValue(config.hunger, -10)
			config.updateValue(config.happiness, +20)
			config.updateValue(config.cash, -17)
			config.updateTime(1)
		} else {
			alert(`You don't have enough money`)
		}
	}

	const italianFood = () => {
		if (config.cash.innerHTML > 12) {
			config.updateValue(config.health, +0)
			config.updateValue(config.hunger, -10)
			config.updateValue(config.happiness, +0)
			config.updateValue(config.cash, -12)
			config.updateTime(1)
		} else {
			alert(`You don't have enough money`)
		}
	}

	const chineseFood = () => {
		if (config.cash.innerHTML > 17) {
			config.updateValue(config.health, -20)
			config.updateValue(config.hunger, -10)
			config.updateValue(config.happiness, +20)
			config.updateValue(config.cash, -17)
			config.updateTime(1)
		} else {
			alert(`You don't have enough money`)
		}
	}

	document.addEventListener('click', () => {
		config.disableElement(elements.restaurantEatFastFood, 21, 16)
		config.disableElement(elements.restaurantEatSeaFood, 23, 7)
		config.disableElement(elements.restaurantEatSalad, 23, 7)
		config.disableElement(elements.restaurantEatSouthIndian, 23, 7)
		config.disableElement(elements.restaurantEatNorthIndian, 23, 7)
		config.disableElement(elements.restaurantEatItalianFood, 23, 7)
		config.disableElement(elements.restaurantEatChineseFood, 23, 7)
	})

	elements.restaurantEatFastFood.addEventListener('click', fastFood)
	elements.restaurantEatSeaFood.addEventListener('click', seaFood)
	elements.restaurantEatSalad.addEventListener('click', salad)
	elements.restaurantEatSouthIndian.addEventListener('click', southIndian)
	elements.restaurantEatNorthIndian.addEventListener('click', northIndian)
	elements.restaurantEatItalianFood.addEventListener('click', italianFood)
	elements.restaurantEatChineseFood.addEventListener('click', chineseFood)
})