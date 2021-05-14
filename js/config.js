import * as elements from './elements.js'

document.addEventListener('DOMContentLoaded', () => {
	setValues()
})

const initialHealth = 50
const initialHunger = 50
const initialHappiness = 50
const initialCash = 500
const initialIntelligence = 0
const initialStrength = 0
const initialSpirituality = 0
const initialDaysValue = 0
const initialHour = 7
const initialMinute = 0
const initialFoodAndGrocery = 10

const daysLength = 1
let dayComplete = true
let gameOverFlag

const setValues = () => {
	// function for setting all values
	setValue(health, initialHealth)
	setValue(hunger, initialHunger)
	setValue(happiness, initialHappiness)
	setValue(cash, initialCash)
	setValue(intelligence, initialIntelligence)
	setValue(strength, initialStrength)
	setValue(spirituality, initialSpirituality)
	setValue(days, initialDaysValue)
	setValue(hour, initialHour)
	setValue(minute, initialMinute)
	setValue(foodAndGrocery, initialFoodAndGrocery)
	gameOverFlag = true
}

export const setValue = (element, value) => {
	// function for setting a value to an element
	element.innerHTML = value
}

export let health = elements.healthValue
export let hunger = elements.hungerValue
export let happiness = elements.happinessValue

export let hungerFlag = 0;
export let happinessFlag = 0;
export let healthFlag = 0;

export let intelligence = elements.intelligenceValue
export let strength = elements.strengthValue
export let spirituality = elements.spiritualityValue

export let days = elements.daysValue

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

	if (element == hunger) {
		if (element.innerHTML == 100) {
			hungerFlag++;
			if (hungerFlag > 3) {
				gameOver(`You are dead due to hunger. GAME OVER`)
				element.style.color = 'black'
			}
			else {
				alert(`Please eat something`)
				element.style.color = 'red'
			}
		}
		else {
			hungerFlag = 0
			element.style.color = 'black'
		}
	}

	if (element == happiness) {
		if (element.innerHTML == 0) {
			happinessFlag++;
			if (happinessFlag > 3) {
				gameOver(`You are dead due to depression. GAME OVER`)
				element.style.color = 'black'
			}
			else {
				alert(`You are depressed`)
				element.style.color = 'red'
			}
		}
		else {
			happinessFlag = 0
			element.style.color = 'black'
		}
	}

	if (element == health) {
		if (element.innerHTML == 0) {
			healthFlag++;
			if (healthFlag > 3) {
				gameOver(`You are dead due to health. GAME OVER`)
				element.style.color = 'black'
			}
			else {
				alert(`Your health is very low`)
				element.style.color = 'red'
			}
		}
		else {
			healthFlag = 0
			element.style.color = 'black'
		}
	}
}

export const updateTime = (hours = 0, minutes = 0) => {
	// function for updating time
	hour.innerHTML = Number(hour.innerHTML) + hours
	minute.innerHTML = Number(minute.innerHTML) + minutes

	if (minute.innerHTML == 60) {
		minute.innerHTML = 0
		hour.innerHTML = Number(hour.innerHTML) + 1
	} else if (minute.innerHTML > 60) {
		const extraMinute = Number(minute.innerHTML) - 60
		minute.innerHTML = extraMinute
		hour.innerHTML = Number(hour.innerHTML) + 1
		if (hour.innerHTML > 24) {
			const extrahour = Number(hour.innerHTML) - 24
			hour.innerHTML = 0 + extrahour
		}
	}

	if (hour.innerHTML == 24) {
		const extrahour = Number(hour.innerHTML) - 24
		hour.innerHTML = 0 + extrahour
	}

	if (hour.innerHTML == initialHour && dayComplete == false) {
		days.innerHTML = Number(days.innerHTML) + 1
		dayComplete = true
	}

	if (hour.innerHTML > initialHour) {
		dayComplete = false
	}
}

export const disableElement = (element, start, end) => {
	// function for disabling specific elements according to the provided time
	if (start > end) {
		if (hour.innerHTML >= start || hour.innerHTML < end) {
			element.disabled = true
		}
		else {
			element.disabled = false
		}
	}

	if (start < end) {
		if (hour.innerHTML >= start && hour.innerHTML < end) {
			element.disabled = true
		}
		else {
			element.disabled = false
		}
	}

}

document.addEventListener('click', () => {
	// function to properly handle zero in time before single digit time
	if (hour.innerHTML == 0) {
		hour.innerHTML = '00'
	}
	if (Number(hour.innerHTML) >= 1 && Number(elements.hourValue.innerHTML) <= 9) {
		elements.hourValue.innerHTML = '0' + Number(elements.hourValue.innerHTML)
	}

	if (Number(minute.innerHTML) == 0) {
		minute.innerHTML = '00'
	}
	if (Number(minute.innerHTML) >= 1 && Number(minute.innerHTML) <= 9) {
		minute.innerHTML = '0' + Number(minute.innerHTML)
	}

	if (days.innerHTML == daysLength) {
		gameOver(`Your days are completed. Game Over`)
	}
})

const gameOver = (message) => {
	if (gameOverFlag) {
		gameOverFlag = false
		elements.gameOverContainer.style.display = 'flex'
		elements.reason.innerHTML = message
		elements.finalStats.innerHTML = `
	<div>
		<span>Health:</span>
		<span>${health.innerHTML}</span>
	</div>
	<div>
		<span>Hunger:</span>
		<span>${hunger.innerHTML}</span>
	</div>
	<div>
		<span>Happiness:</span>
		<span>${happiness.innerHTML}</span>
	</div>
	<div>
		<span>Intelligence:</span>
		<span>${intelligence.innerHTML}</span>
	</div>
	<div>
		<span>Strength:</span>
		<span>${strength.innerHTML}</span>
	</div>
	<div>
		<span>Spirituality:</span>
		<span>${spirituality.innerHTML}</span>
	</div>
	<div>
		<span>Cash:</span>
		<span>${cash.innerHTML}</span>
	</div>
	<div>
		<span>Days Lived:</span>
		<span>${days.innerHTML}</span>
	</div>
	`}
}

gameOverButton.addEventListener('click', () => {
	elements.gameOverContainer.style.display = 'none'
	setValues()
	health.style.color = 'black'
	hunger.style.color = 'black'
	happiness.style.color = 'black'
})