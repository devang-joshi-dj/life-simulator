import * as elements from './elements.js'
import * as config from './config.js'

document.addEventListener("DOMContentLoaded", () => {

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
		//health
		config.updateValue(config.health, -5)

		//hunger
		config.updateValue(config.hunger, -5)


		//happiness
		config.updateValue(config.happiness, +5)

		//cash
		config.updateValue(config.cash, +20)
	}

	const workThreeHours = () => {
		//health
		config.updateValue(config.health, -5)
		//hunger
		config.updateValue(config.hunger, -6)

		//happiness
		config.updateValue(config.happiness, +10)

		//cash
		config.updateValue(config.cash, +40)
	}


	const workFiveHours = () => {
		//health
		config.updateValue(config.health, -5)

		//hunger
		config.updateValue(config.hunger, -7)


		//happiness
		config.updateValue(config.happiness, +15)

		//cash
		config.updateValue(config.cash, +60)
	}

	const workNineHours = () => {
		//health
		config.updateValue(config.health, -5)
		//hunger
		config.updateValue(config.hunger, -8)


		//happiness
		config.updateValue(config.happiness, +20)

		//cash
		config.updateValue(config.cash, +40)
	}

	const takeBreak = () => {
		//health
		config.updateValue(config.health, +5)

		//hunger
		config.updateValue(config.hunger, +5)

		//happiness
		config.updateValue(config.happiness, +5)

		//cash
		//no changes
		// var update_cash = 0
		// var cashVal = elements.cashValue.innerText
		// update_cash = Number(cashVal)
		// elements.cashValue.innerHTML = update_cash +2
	}

	const attendMeeting = () => {
		//health
		//config.updateValue(config.health, -5)
		//hunger
		config.updateValue(config.hunger, -5)

		//happiness
		config.updateValue(config.happiness, +5)

		//cash
		//no changes
		// var update_cash = 0
		// var cashVal = elements.cashValue.innerText
		// update_cash = Number(cashVal)
		// elements.cashValue.innerHTML = update_cash +2
	}

	const applyPromotion = () => {
		//health
		// config.updateValue(config.health, -4)
		//hunger
		config.updateValue(config.hunger, -5)

		//happiness
		config.updateValue(config.happiness, -4)

		//cash
		//no changes
		// var update_cash = 0
		// var cashVal = elements.cashValue.innerText
		// update_cash = Number(cashVal)
		// elements.cashValue.innerHTML = update_cash +2
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
			config.disableElement(elements.jobApplyPromotion, 20, 10)
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
	elements.jobWorkOneHour.addEventListener("click", workOneHour)
	elements.jobWorkThreeHours.addEventListener("click", workThreeHours)
	elements.jobWorkFiveHours.addEventListener("click", workFiveHours)
	elements.jobWorkNineHours.addEventListener("click", workNineHours)
	elements.jobTakeBreak.addEventListener("click", takeBreak)
	elements.jobAttendMeeting.addEventListener("click", attendMeeting)
	elements.jobApplyPromotion.addEventListener("click", applyPromotion)
})