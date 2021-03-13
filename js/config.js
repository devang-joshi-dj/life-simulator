import * as elements from './elements.js'

window.onload = () => {
    let health = 50;
    let happiness = 50;
    let cash = 1000;

    const setValue = (element, value) => {
        // function for setting a value to an element
        element.innerHTML = value;
    }

    const setValues = () => {
        // function for setting all values
        setValue(elements.healthValue, health);
        setValue(elements.happinessValue, happiness);
        setValue(elements.cashValue, cash);
    }

    setValues();

    document.addEventListener('click', () => {
        // event listener to update everything in the window accordingly
        setValues();
    })
}