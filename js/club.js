import * as elements from './elements.js'
document.addEventListener("DOMContentLoaded", () => {

    elements.clubDance.addEventListener("click", Dance);
    elements.clubDrinkEat.addEventListener("click", DrinkEat);
    elements.clubMeetPeople.addEventListener("click", MeetPeople);


    var update_health = 0;
    var update_happiness = 0;
    var update_cash = 0;

    function Dance() {

        //health
        var healthVal = elements.healthValue.innerText;
        update_health = Number(healthVal);
        update_health = update_health - update_health * (10 / 100);
        elements.healthValue.innerHTML = update_health.toFixed(2);

        //happiness
        var happinessVal = elements.happinessValue.innerText;
        update_happiness = Number(happinessVal);
        update_happiness = update_happiness + update_happiness * (15 / 100);
        elements.happinessValue.innerHTML = update_happiness.toFixed(2);

        //cash
        var cashVal = elements.cashValue.innerText;
        update_cash = Number(cashVal);
        update_cash = update_cash - update_cash * (20 / 100);
        elements.cashValue.innerHTML = update_cash.toFixed(2);
    }
    function DrinkEat() {
        //health
        var healthVal = elements.healthValue.innerText;
        update_health = Number(healthVal);
        update_health = update_health - update_health * (20 / 100);
        elements.healthValue.innerHTML = update_health.toFixed(2);

        //happiness
        var happinessVal = elements.happinessValue.innerText;
        update_happiness = Number(happinessVal);
        update_happiness = update_happiness + update_happiness * (15 / 100);
        elements.happinessValue.innerHTML = update_happiness.toFixed(2);

        //cash
        var cashVal = elements.cashValue.innerText;
        update_cash = Number(cashVal);
        update_cash = update_cash - update_cash * (25 / 100);
        elements.cashValue.innerHTML = update_cash.toFixed(2);

    }
    function MeetPeople() {
        //health
        var healthVal = elements.healthValue.innerText;
        update_health = Number(healthVal);
        update_health = update_health - update_health * (10 / 100);
        elements.healthValue.innerHTML = update_health.toFixed(2);

        //happiness
        var happinessVal = elements.happinessValue.innerText;
        update_happiness = Number(happinessVal);
        update_happiness = update_happiness + update_happiness * (15 / 100);
        elements.happinessValue.innerHTML = update_happiness.toFixed(2);

        //cash
        //no changes
        // var cashVal = elements.cashValue.innerText;
        // update_cash = Number(cashVal);
        // update_cash = update_cash - update_cash * (25 / 100);
        // elements.cashValue.innerHTML = update_cash.toFixed(2);

    }
})