import * as elements from './elements.js'

document.addEventListener("DOMContentLoaded", () => {

    elements.mallShopping.addEventListener("click", Shopping)
    elements.mallWatchMovies.addEventListener("click", WatchMovies)
    elements.mallGamingZone.addEventListener("click", GamingZone)
    elements.mallFoodCourt.addEventListener("click", FoodCourt)

    var update_health = 0
    var update_happiness = 0
    var update_cash = 0

    function Shopping() {
        //health
        var healthVal = elements.healthValue.innerText
        update_health = Number(healthVal)
        update_health = update_health - update_health * (5 / 100)
        elements.healthValue.innerHTML = update_health.toFixed(2)

        //happiness
        var happinessVal = elements.happinessValue.innerText
        update_happiness = Number(happinessVal)
        update_happiness = update_happiness + update_happiness * (10 / 100)
        elements.happinessValue.innerHTML = update_happiness.toFixed(2)

        //cash
        var cashVal = elements.cashValue.innerText
        update_cash = Number(cashVal)
        update_cash = update_cash - update_cash * (25 / 100)
        elements.cashValue.innerHTML = update_cash.toFixed(2)
    }
    function WatchMovies() {
        //health
        var healthVal = elements.healthValue.innerText
        update_health = Number(healthVal)
        update_health = update_health - update_health * (5 / 100)
        elements.healthValue.innerHTML = update_health.toFixed(2)

        //happiness
        var happinessVal = elements.happinessValue.innerText
        update_happiness = Number(happinessVal)
        update_happiness = update_happiness + update_happiness * (10 / 100)
        elements.happinessValue.innerHTML = update_happiness.toFixed(2)

        //cash
        var cashVal = elements.cashValue.innerText
        update_cash = Number(cashVal)
        update_cash = update_cash - update_cash * (20 / 100)
        elements.cashValue.innerHTML = update_cash.toFixed(2)
    }
    function GamingZone() {
        //health
        var healthVal = elements.healthValue.innerText
        update_health = Number(healthVal)
        update_health = update_health - update_health * (5 / 100)
        elements.healthValue.innerHTML = update_health.toFixed(2)

        //happiness
        var happinessVal = elements.happinessValue.innerText
        update_happiness = Number(happinessVal)
        update_happiness = update_happiness + update_happiness * (10 / 100)
        elements.happinessValue.innerHTML = update_happiness.toFixed(2)

        //cash
        var cashVal = elements.cashValue.innerText
        update_cash = Number(cashVal)
        update_cash = update_cash - update_cash * (25 / 100)
        elements.cashValue.innerHTML = update_cash.toFixed(2)
    }
    function FoodCourt() {
        //health
        var healthVal = elements.healthValue.innerText
        update_health = Number(healthVal)
        update_health = update_health + update_health * (15 / 100)
        elements.healthValue.innerHTML = update_health.toFixed(2)

        //happiness
        var happinessVal = elements.happinessValue.innerText
        update_happiness = Number(happinessVal)
        update_happiness = update_happiness + update_happiness * (10 / 100)
        elements.happinessValue.innerHTML = update_happiness.toFixed(2)

        //cash
        var cashVal = elements.cashValue.innerText
        update_cash = Number(cashVal)
        update_cash = update_cash - update_cash * (20 / 100)
        elements.cashValue.innerHTML = update_cash.toFixed(2)
    }
})