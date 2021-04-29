import * as elements from './elements.js'
import * as config from './config.js'

document.addEventListener("DOMContentLoaded", () => {

	let promotionStatus = 0
	let promotionLimit = 10
	let oneHourSalary = 20
	let threeHourSalary = 40
	let fiveHourSalary = 60
	let nineHourSalary = 80

	let promotionFlag = false
	let applyForWorkFlag1 = true
	let applyForWorkFlag2 = false

	elements.jobApplyForWork.disabled = false
	elements.jobWorkOneHour.disabled = true
	elements.jobWorkThreeHours.disabled = true
	elements.jobWorkFiveHours.disabled = true
	elements.jobWorkNineHours.disabled = true
	elements.jobTakeBreak.disabled = true
	elements.jobAttendMeeting.disabled = true
	elements.jobApplyPromotion.disabled = true

	const jobApplyForWork = () => {

	}

	const workOneHour = () => {
		const timeDiff = 20 - config.hour.innerHTML
		if (timeDiff >= 1) {
			config.updateValue(config.health, -2)
			config.updateValue(config.hunger, -5)
			config.updateValue(config.happiness, +5)
			config.updateValue(config.cash, oneHourSalary)
			config.updateTime(1)
		}
		else {
			alert("You don't have enough time")
		}
	}

	const workThreeHours = () => {
		const timeDiff = 20 - config.hour.innerHTML
		if (timeDiff >= 3) {
			config.updateValue(config.health, -5)
			config.updateValue(config.hunger, -9)
			config.updateValue(config.happiness, +9)
			config.updateValue(config.cash, threeHourSalary)
			config.updateTime(3)
		}
		else {
			alert("You don't have enough time")
		}
	}

	const workFiveHours = () => {
		const timeDiff = 20 - config.hour.innerHTML
		if (timeDiff >= 5) {
			config.updateValue(config.health, -9)
			config.updateValue(config.hunger, -17)
			config.updateValue(config.happiness, +17)
			config.updateValue(config.cash, fiveHourSalary)
			config.updateTime(5)
		}
		else {
			alert("You don't have enough time")
		}
	}

	const workNineHours = () => {
		const timeDiff = 20 - config.hour.innerHTML
		if (timeDiff >= 9) {
			config.updateValue(config.health, -17)
			config.updateValue(config.hunger, -33)
			config.updateValue(config.happiness, +33)
			config.updateValue(config.cash, nineHourSalary)
			config.updateTime(9)
		}
		else {
			alert("You don't have enough time")
		}
	}

	const takeBreak = () => {
		config.updateValue(config.health, +5)
		config.updateValue(config.hunger, +5)
		config.updateValue(config.happiness, +5)
		config.updateTime(1)
	}

	const attendMeeting = () => {
		config.updateValue(config.hunger, -5)
		config.updateValue(config.happiness, +5)
		config.updateTime(1)
	}

	const applyPromotion = () => {
		config.updateValue(config.hunger, -5)
		config.updateTime(0, 20)
	}

	document.addEventListener('click', () => {
		if (applyForWorkFlag1)
			config.disableElement(elements.jobApplyForWork, 20, 10)
		if (applyForWorkFlag2) {
			config.disableElement(elements.jobWorkOneHour, 20, 10)
			config.disableElement(elements.jobWorkThreeHours, 20, 10)
			config.disableElement(elements.jobWorkFiveHours, 20, 10)
			config.disableElement(elements.jobWorkNineHours, 20, 10)
			config.disableElement(elements.jobTakeBreak, 20, 10)
			config.disableElement(elements.jobAttendMeeting, 20, 10)

			if (promotionFlag == true) {
				elements.jobApplyPromotion.disabled = true
			} else {
				config.disableElement(elements.jobApplyPromotion, 20, 10)
			}
		}
	})

	elements.jobApplyForWork.addEventListener("click", () => {
		jobApplyForWork()
		alert("You got the Job")
		applyForWorkFlag1 = false
		applyForWorkFlag2 = true
		elements.jobApplyForWork.disabled = true
		elements.jobWorkOneHour.disabled = false
		elements.jobWorkThreeHours.disabled = false
		elements.jobWorkFiveHours.disabled = false
		elements.jobWorkNineHours.disabled = false
		elements.jobTakeBreak.disabled = false
		elements.jobAttendMeeting.disabled = false
		elements.jobApplyPromotion.disabled = false
	})
	elements.jobWorkOneHour.addEventListener("click", () => {
		workOneHour()
		promotionFlag = false
	})
	elements.jobWorkThreeHours.addEventListener("click", () => {
		workThreeHours()
		promotionFlag = false
	})
	elements.jobWorkFiveHours.addEventListener("click", () => {
		workFiveHours()
		promotionFlag = false
	})
	elements.jobWorkNineHours.addEventListener("click", () => {
		workNineHours()
		promotionFlag = false
	})
	elements.jobTakeBreak.addEventListener("click", () => {
		takeBreak()
		promotionFlag = false
	})
	elements.jobAttendMeeting.addEventListener("click", () => {
		attendMeeting()
		promotionFlag = false
	})
	elements.jobApplyPromotion.addEventListener("click", () => {
		applyPromotion()
		if (promotionStatus <= promotionLimit) {
			const randomNumber = Math.floor(Math.random() * 10)
			if (randomNumber == 1 || randomNumber == 5 || randomNumber == 9) {
				oneHourSalary = oneHourSalary + 20
				threeHourSalary = threeHourSalary + 20
				fiveHourSalary = fiveHourSalary + 20
				nineHourSalary = nineHourSalary + 20
				alert("You got the Promotion")
			} else {
				alert("You didn't got Promotion")
			}
		} else {
			alert("You have reached the highest position already. Cannot be promoted anymore")
		}
		promotionFlag = true
	})
})
