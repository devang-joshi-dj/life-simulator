import * as elements from './elements.js'

document.addEventListener("DOMContentLoaded", () => {

    const initialHealth = 50
    const initialHappiness = 50
    const initialCash = 1000
    const initialTime = 7

    const setValue = (element, value) => {
        // function for setting a value to an element
        element.innerHTML = value
    }

    const setValues = () => {
        // function for setting all values
        setValue(health, initialHealth)
        setValue(happiness, initialHappiness)
        setValue(cash, initialCash)
        setValue(time, initialTime)
    }

    setValues()
})

export let health = elements.healthValue
export let happiness = elements.happinessValue
export let cash = elements.cashValue
export let time = elements.timeValue

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

export const updateTime = (time) => {
    // function for updating time
    elements.timeValue.innerHTML = Number(elements.timeValue.innerHTML) + time

    if (elements.timeValue.innerHTML > 24) {
        const extraTime = Number(elements.timeValue.innerHTML) - 24
        elements.timeValue.innerHTML = 0 + extraTime
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