import * as elements from './elements.js'

document.addEventListener("DOMContentLoaded", () => {

    elements.worshipPray.addEventListener("click", Pray)
    elements.worshipServe.addEventListener("click", Serve)
    elements.worshipCharity.addEventListener("click", Charity)

    var update_health = 0
    var update_happiness = 0
    var update_cash = 0
    function Pray() {
        //health
        var healthVal = elements.healthValue.innerText
        update_health = Number(healthVal)
        update_health = update_health + update_health * (10 / 100)
        elements.healthValue.innerHTML = update_health.toFixed(2)

        //happiness
        var happinessVal = elements.happinessValue.innerText
        update_happiness = Number(happinessVal)
        update_happiness = update_happiness + update_happiness * (15 / 100)
        elements.happinessValue.innerHTML = update_happiness.toFixed(2)

        //cash
        var cashVal = elements.cashValue.innerText
        update_cash = Number(cashVal)
        update_cash = update_cash - update_cash * (10 / 100)
        elements.cashValue.innerHTML = update_cash.toFixed(2)
    }

    function Serve() {
        //health
        var healthVal = elements.healthValue.innerText
        update_health = Number(healthVal)
        update_health = update_health - update_health * (10 / 100)
        elements.healthValue.innerHTML = update_health.toFixed(2)

        //happiness
        var happinessVal = elements.happinessValue.innerText
        update_happiness = Number(happinessVal)
        update_happiness = update_happiness + update_happiness * (15 / 100)
        elements.happinessValue.innerHTML = update_happiness.toFixed(2)

        //cash
        var cashVal = elements.cashValue.innerText
        update_cash = Number(cashVal)
        update_cash = update_cash - update_cash * (20 / 100)
        elements.cashValue.innerHTML = update_cash.toFixed(2)
    }

    function Charity() {
        //health
        var healthVal = elements.healthValue.innerText
        update_health = Number(healthVal)
        update_health = update_health + update_health * (10 / 100)
        elements.healthValue.innerHTML = update_health.toFixed(2)

        //happiness
        var happinessVal = elements.happinessValue.innerText
        update_happiness = Number(happinessVal)
        update_happiness = update_happiness + update_happiness * (20 / 100)
        elements.happinessValue.innerHTML = update_happiness.toFixed(2)

        //cash
        var cashVal = elements.cashValue.innerText
        update_cash = Number(cashVal)
        update_cash = update_cash - update_cash * (20 / 100)
        elements.cashValue.innerHTML = update_cash.toFixed(2)
    }
})