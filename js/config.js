import * as elements from './elements.js'

document.addEventListener("DOMContentLoaded", () => {

    const initialHealth = 50
    const initualHunger = 50
    const initialHappiness = 50
    const initialCash = 1000
    const initialHour = 7
    const initialMinute = 0

    const setValue = (element, value) => {
        // function for setting a value to an element
        element.innerHTML = value
    }

    const setValues = () => {
        // function for setting all values
        setValue(health, initialHealth)
        setValue(hunger, initualHunger)
        setValue(happiness, initialHappiness)
        setValue(cash, initialCash)
        setValue(hour, initialHour)
        setValue(minute, initialMinute)
    }

    setValues()
})

export let health = elements.healthValue
export let hunger = elements.hungerValue
export let happiness = elements.happinessValue
export let cash = elements.cashValue
export let hour = elements.hourValue
export let minute = elements.minuteValue

export const updateValue = (element, value) => {
    // function for updating a value to an element
    element.innerHTML = Number(element.innerHTML) + value

    if (element.innerHTML > 100 && (element == health || element == happiness)) {
        element.innerHTML = 100
    }

    if (element.innerHTML < 0 && (element == health || element == happiness)) {
        element.innerHTML = 0
    }
}

export const updateTime = (hour, minute = 0) => {
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
    }
}

export const disableElement = (element, start, end) => {
    // function for disabling specific elements according to the provided time
    if (start > end) {
        if (elements.timeValue.innerHTML >= start || elements.timeValue.innerHTML <= end) {
            element.disabled = true
        }
        else {
            element.disabled = false
        }
    }

    if (start < end) {
        if (elements.timeValue.innerHTML >= start && elements.timeValue.innerHTML <= end) {
            element.disabled = true
        }
        else {
            element.disabled = false
        }
    }

}