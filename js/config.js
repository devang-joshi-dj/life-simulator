import * as elements from './elements.js'

document.addEventListener("DOMContentLoaded", () => {

    const initialHealth = 50
    const initialHappiness = 50
    const initialCash = 1000

    const setValue = (element, value) => {
        // function for setting a value to an element
        element.innerHTML = value
    }

    const setValues = () => {
        // function for setting all values
        setValue(health, initialHealth)
        setValue(happiness, initialHappiness)
        setValue(cash, initialCash)
    }

    setValues()
})

export let health = elements.healthValue
export let happiness = elements.happinessValue
export let cash = elements.cashValue

export const updateValue = (element, value) => {
    // function for setting a value to an element
    element.innerHTML = Number(element.innerHTML) + value
}