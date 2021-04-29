import * as elements from './elements.js'
import * as config from './config.js'

document.addEventListener("DOMContentLoaded", () => {

	let admissionFlag1 = true
	let admissionFlag2 = false
	let dietPlanFlag = true

	elements.gymTakeAdmission.disabled = false
	elements.gymExerciseOneHour.disabled = true
	elements.gymExerciseTwoHours.disabled = true
	elements.gymExerciseThreeHours.disabled = true
	elements.gymDietPlan.disabled = true
	elements.gymTalkTrainer.disabled = true

	const takeAdmission = () => {
		if (config.cash.innerHTML > 10) {
			config.updateValue(config.hunger, -5)
			config.updateValue(config.happiness, +5)
			config.updateValue(config.cash, -10)
			config.updateTime(0, 20)
		} else {
			alert("You don't have enough money")
		}
	}

	const exerciseOneHour = () => {
		config.updateValue(config.health, +5)
		config.updateValue(config.hunger, -5)
		config.updateValue(config.happiness, +5)
		config.updateTime(1)
	}

	const exerciseTwoHours = () => {
		config.updateValue(config.health, +6)
		config.updateValue(config.hunger, -6)
		config.updateValue(config.happiness, +5)
		config.updateTime(2)
	}

	const exerciseThreeHours = () => {
		config.updateValue(config.health, +7)
		config.updateValue(config.hunger, -7)
		config.updateValue(config.happiness, +5)
		config.updateTime(3);
	}

	const dietPlan = () => {
		if (config.cash.innerHTML > 5) {
			config.updateValue(config.health, +4)
			config.updateValue(config.hunger, +4)
			config.updateValue(config.happiness, +2)
			config.updateValue(config.cash, -5)
			config.updateTime(0, 10)
		} else {
			alert("You don't have enough money")
		}
	}

	const talkTrainer = () => {
		config.updateValue(config.hunger, -5)
		config.updateValue(config.happiness, +5)
		config.updateTime(0, 30)
	}

	document.addEventListener('click', () => {
		if (admissionFlag1)
			config.disableElement(elements.gymTakeAdmission, 20, 6)
		if (admissionFlag2) {
			config.disableElement(elements.gymExerciseOneHour, 20, 6)
			config.disableElement(elements.gymExerciseTwoHours, 20, 6)
			config.disableElement(elements.gymExerciseThreeHours, 20, 6)
			if (dietPlanFlag) {
				config.disableElement(elements.gymDietPlan, 20, 6)
			}
			config.disableElement(elements.gymTalkTrainer, 20, 6)
		}
	})

	elements.gymTakeAdmission.addEventListener("click", () => {
		takeAdmission()
		admissionFlag1 = false
		admissionFlag2 = true
		elements.gymTakeAdmission.disabled = true
		elements.gymExerciseOneHour.disabled = false
		elements.gymExerciseTwoHours.disabled = false
		elements.gymExerciseThreeHours.disabled = false
		elements.gymDietPlan.disabled = false
		elements.gymTalkTrainer.disabled = false
	})
	elements.gymExerciseOneHour.addEventListener("click", exerciseOneHour)
	elements.gymExerciseTwoHours.addEventListener("click", exerciseTwoHours)
	elements.gymExerciseThreeHours.addEventListener("click", exerciseThreeHours)
	elements.gymDietPlan.addEventListener("click", () => {
		dietPlan()
		dietPlanFlag = false
		elements.gymDietPlan.disabled = true
	})
	elements.gymTalkTrainer.addEventListener("click", talkTrainer)
})