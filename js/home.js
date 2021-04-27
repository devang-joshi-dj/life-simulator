import * as elements from './elements.js'
import * as config from './config.js'

document.addEventListener("DOMContentLoaded", () => {

	const homeMeal = () => {
		config.updateValue(config.health, +5)
		config.updateValue(config.hunger, +5)
		config.updateValue(config.happiness, +4)
		config.updateTime(0, 20)
	}

	const homeRest = () => {
		config.updateValue(config.health, +2)
		config.updateValue(config.happiness, +2)
		config.updateTime(1);
	}

	const homeMeetfamily = () => {
		//config.updateValue(config.health, -2)
		config.updateValue(config.happiness, +2)
		config.updateTime(1);
	}

	const homeCleanRoom = () => {
		config.updateValue(config.hunger, -2)
		config.updateValue(config.happiness, +2)
		config.updateTime(1);
	}
	
	document.addEventListener('click', () => {
		config.disableElement(elements.homeMeetfamily, 0, 7)
		config.disableElement(elements.homeCleanRoom,0,7)

	elements.homeMeal.addEventListener("click", homeMeal)
	elements.homeRest.addEventListener("click", homeRest)
	elements.homeMeetFamily.addEventListener("click", homeMeetfamily)
	elements.homeCleanRoom.addEventListener("click", homeCleanRoom)
})
