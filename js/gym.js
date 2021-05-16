import * as elements from './elements.js'
import * as config from './config.js'

document.addEventListener('DOMContentLoaded', () => {

	let admissionFlag1 = true
	let admissionFlag2 = false
	let dietPlanFlag = true
	let admissionMoneyFlag = false

	const timeDiff = 20 - config.hour.innerHTML

	elements.gymTakeAdmission.disabled = false
	elements.gymExerciseOneHour.disabled = true
	elements.gymExerciseTwoHours.disabled = true
	elements.gymExerciseThreeHours.disabled = true
	elements.gymDietPlan.disabled = true
	elements.gymTalkTrainer.disabled = true

	const takeAdmission = () => {
		if (config.cash.innerHTML > 15) {
			admissionMoneyFlag = true
			config.updateValue(config.hunger, +2)
			config.updateValue(config.happiness, +5)
			config.updateValue(config.cash, -15)
			config.updateTime(0, 30)
		} else {
			alert(`You don't have enough money`)
		}
	}

	const exerciseOneHour = () => {
		const timeDiff = 20 - config.hour.innerHTML
		if (timeDiff >= 1) {
			config.updateValue(config.health, +5)
			config.updateValue(config.hunger, +8)
			config.updateValue(config.happiness, +5)
			config.updateTime(1)
			config.updateValue(config.strength, +4)
		}
		else {
			alert(`You don't have enough time`)
		}
	}

	const exerciseTwoHours = () => {
		const timeDiff = 20 - config.hour.innerHTML
		if (timeDiff >= 2) {
			config.updateValue(config.health, +7)
			config.updateValue(config.hunger, +16)
			config.updateValue(config.happiness, +7)
			config.updateTime(2)
			config.updateValue(config.strength, +8)
		}
		else {
			alert(`You don't have enough time`)
		}
	}

	const exerciseThreeHours = () => {
		const timeDiff = 20 - config.hour.innerHTML
		if (timeDiff >= 3) {
			config.updateValue(config.health, +9)
			config.updateValue(config.hunger, +24)
			config.updateValue(config.happiness, +9)
			config.updateTime(3);
			config.updateValue(config.strength, +12)
		}
		else {
			alert(`You don't have enough time`)
		}
	}

	const dietPlan = () => {
		if (config.cash.innerHTML > 6) {
			// config.updateValue(config.health, +4)
			config.updateValue(config.hunger, -2)
			config.updateValue(config.happiness, +3)
			config.updateValue(config.cash, -6)
			config.updateTime(0, 15)
		} else {
			alert(`You don't have enough money`)
		}
	}

	const talkTrainer = () => {
		config.updateValue(config.hunger, +2)
		config.updateValue(config.happiness, +5)
		config.updateTime(0, 30)
	}

	document.addEventListener('click', () => {
		if (admissionFlag1)
			config.disableElement(elements.gymTakeAdmission, 20, 6)
		if (admissionFlag2 && admissionMoneyFlag) {
			config.disableElement(elements.gymExerciseOneHour, 20, 6)
			config.disableElement(elements.gymExerciseTwoHours, 20, 6)
			config.disableElement(elements.gymExerciseThreeHours, 20, 6)
			if (dietPlanFlag) {
				config.disableElement(elements.gymDietPlan, 20, 6)
			}
			config.disableElement(elements.gymTalkTrainer, 20, 6)
		}
	})

	elements.gymTakeAdmission.addEventListener('click', () => {
		takeAdmission()
		admissionFlag1 = false
		admissionFlag2 = true
		if (admissionMoneyFlag) {
			elements.gymTakeAdmission.disabled = true
			elements.gymExerciseOneHour.disabled = false
			elements.gymExerciseTwoHours.disabled = false
			elements.gymExerciseThreeHours.disabled = false
			elements.gymDietPlan.disabled = false
			elements.gymTalkTrainer.disabled = false
		}
	})
	elements.gymExerciseOneHour.addEventListener('click', exerciseOneHour)
	elements.gymExerciseTwoHours.addEventListener('click', exerciseTwoHours)
	elements.gymExerciseThreeHours.addEventListener('click', exerciseThreeHours)
	elements.gymDietPlan.addEventListener('click', () => {
		dietPlan()
		dietPlanFlag = false
		elements.gymDietPlan.disabled = true
	})
	elements.gymTalkTrainer.addEventListener('click', talkTrainer)
})
