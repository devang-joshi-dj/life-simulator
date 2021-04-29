import * as elements from './elements.js'

document.addEventListener("DOMContentLoaded", () => {

	const initialHealth = 50
	const initialHunger = 50
	const initialHappiness = 50
	const initialCash = 1000
	const initialHour = 7
	const initialMinute = 0
	const initialFoodAndGrocery = 10

	const setValues = () => {
		// function for setting all values
		setValue(health, initialHealth)
		setValue(hunger, initialHunger)
		setValue(happiness, initialHappiness)
		setValue(cash, initialCash)
		setValue(hour, initialHour)
		setValue(minute, initialMinute)
		setValue(foodAndGrocery, initialFoodAndGrocery)
	}

	setValues()
})

export const setValue = (element, value) => {
	// function for setting a value to an element
	element.innerHTML = value
}

export let health = elements.healthValue
export let hunger = elements.hungerValue
export let happiness = elements.happinessValue
export let cash = elements.cashValue
export let hour = elements.hourValue
export let minute = elements.minuteValue

export let foodAndGrocery = elements.foodAndGrocery

export let balance = elements.balance
export let loan = elements.loan
export let bills = elements.bills

export const updateValue = (element, value) => {
	// function for updating a value to an element
	element.innerHTML = Number(element.innerHTML) + value

	if (element.innerHTML > 100 && (element == health || element == hunger || element == happiness)) {
		element.innerHTML = 100
	}

	if (element.innerHTML < 0 && (element == health || element == hunger || element == happiness || element == cash)) {
		element.innerHTML = 0
	}
}

export const updateTime = (hour = 0, minute = 0) => {
	// function for updating time
	elements.hourValue.innerHTML = Number(elements.hourValue.innerHTML) + hour
	elements.minuteValue.innerHTML = Number(elements.minuteValue.innerHTML) + minute

	if (elements.hourValue.innerHTML > 24) {
		const extrahour = Number(elements.hourValue.innerHTML) - 24
		elements.hourValue.innerHTML = 0 + extrahour
	}

	if (elements.minuteValue.innerHTML == 60) {
		elements.minuteValue.innerHTML = 0
		elements.hourValue.innerHTML = Number(elements.hourValue.innerHTML) + 1
	} else if (elements.minuteValue.innerHTML > 60) {
		const extraMinute = Number(elements.minuteValue.innerHTML) - 60
		elements.minuteValue.innerHTML = extraMinute
		elements.hourValue.innerHTML = Number(elements.hourValue.innerHTML) + 1
		if (elements.hourValue.innerHTML > 24) {
			const extrahour = Number(elements.hourValue.innerHTML) - 24
			elements.hourValue.innerHTML = 0 + extrahour
		}
	}
}

export const disableElement = (element, start, end) => {
	// function for disabling specific elements according to the provided time
	if (start > end) {
		if (elements.hourValue.innerHTML >= start || elements.hourValue.innerHTML < end) {
			element.disabled = true
		}
		else {
			element.disabled = false
		}
	}

	if (start < end) {
		if (elements.hourValue.innerHTML >= start && elements.hourValue.innerHTML < end) {
			element.disabled = true
		}
		else {
			element.disabled = false
		}
	}

}

document.addEventListener("click", () => {
	// function to properly handle zero in time before single digit time
	if (elements.hourValue.innerHTML == 0) {
		elements.hourValue.innerHTML = '00'
	}
	if (Number(elements.hourValue.innerHTML) >= 1 && Number(elements.hourValue.innerHTML) <= 9) {
		elements.hourValue.innerHTML = '0' + Number(elements.hourValue.innerHTML)
	}

	if (Number(elements.minuteValue.innerHTML) == 0) {
		elements.minuteValue.innerHTML = '00'
	}
	if (Number(elements.minuteValue.innerHTML) >= 1 && Number(elements.minuteValue.innerHTML) <= 9) {
		elements.minuteValue.innerHTML = '0' + Number(elements.minuteValue.innerHTML)
	}
})