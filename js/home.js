import * as elements from './elements.js'
import * as config from './config.js'

document.addEventListener('DOMContentLoaded', () => {

	let cleanRoomFlag = false

	const homeMeal = () => {
		config.updateValue(config.health, +5)
		config.updateValue(config.hunger, -10)
		config.updateValue(config.happiness, +4)
		config.updateTime(0, 20)
	}

	const homeRest = () => {
		config.updateValue(config.health, +2)
		config.updateValue(config.happiness, +2)
		config.updateValue(config.hunger, +2)
		config.updateTime(1);
	}

	const homeMeetfamily = () => {
		config.updateValue(config.happiness, +2)
		config.updateTime(1);
	}

	const homeCleanRoom = () => {
		config.updateValue(config.hunger, +7)
		config.updateValue(config.happiness, +2)
		config.updateTime(1);
	}

	document.addEventListener('click', () => {
		config.disableElement(elements.homeMeetFamily, 0, 7)
		config.disableElement(elements.homeCleanRoom, 0, 7)

		if (config.foodAndGrocery.innerHTML <= 0 || isNaN(config.foodAndGrocery.innerHTML)) {
			config.foodAndGrocery.innerHTML = `<span style='color:red'>Buy From Mall</span>`
			elements.homeMeal.disabled = true
		}
		else {
			elements.homeMeal.disabled = false
		}

		if (cleanRoomFlag == true) {
			elements.homeCleanRoom.disabled = true
		} else {
			elements.homeCleanRoom.disabled = false
		}
	})

	elements.homeMeal.addEventListener('click', () => {
		config.updateValue(config.foodAndGrocery, -1)
		homeMeal()
		cleanRoomFlag = false
	})
	elements.homeRest.addEventListener('click', () => {
		homeRest()
		cleanRoomFlag = false
	})
	elements.homeMeetFamily.addEventListener('click', homeMeetfamily)
	elements.homeCleanRoom.addEventListener('click', () => {
		homeCleanRoom()
		cleanRoomFlag = true
	})
})
