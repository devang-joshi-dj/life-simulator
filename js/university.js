import * as elements from './elements.js'

window.onload = () => {

    elements.universityAdmission.addEventListener("click", Admission)
    elements.universityPayFees.addEventListener("click", PayFees)
    elements.universityAttendClasses.addEventListener("click", AttendClasses)
    elements.universityGroupStudy.addEventListener("click", GroupStudy)
    elements.universityClubMeeting.addEventListener("click", ClubMeeting)
    elements.universityEatCanteen.addEventListener("click", EatCanteen)
    elements.universityPlayGames.addEventListener("click", PlayGames)
    elements.universityStudyLibrary.addEventListener("click", StudyLibrary)

    var update_health = 0
    var update_happiness = 0
    var update_cash = 0

    function Admission() {
        //health
        var healthVal = elements.healthValue.innerText
        update_health = Number(healthVal)
        update_health = update_health - update_health * (10 / 100)
        elements.healthValue.innerHTML = update_health.toFixed(2)

        //happiness
        var happinessVal = elements.happinessValue.innerText
        update_happiness = Number(happinessVal)
        update_happiness = update_happiness + update_happiness * (10 / 100)
        elements.happinessValue.innerHTML = update_happiness.toFixed(2)

        //cash
        var cashVal = elements.cashValue.innerText
        update_cash = Number(cashVal)
        update_cash = update_cash - update_cash * (30 / 100)
        elements.cashValue.innerHTML = update_cash.toFixed(2)
    }

    function PayFees() {
        //health
        var healthVal = elements.healthValue.innerText
        update_health = Number(healthVal)
        update_health = update_health - update_health * (10 / 100)
        elements.healthValue.innerHTML = update_health.toFixed(2)

        //happiness
        //no changes
        // var update_happiness = 0
        // var happinessVal = elements.happinessValue.innerText
        // update_happiness = Number(happinessVal)
        // elements.happinessValue.innerHTML = update_happiness + 2

        //cash
        var cashVal = elements.cashValue.innerText
        update_cash = Number(cashVal)
        update_cash = update_cash - update_cash * (30 / 100)
        elements.cashValue.innerHTML = update_cash.toFixed(2)
    }

    function AttendClasses() {
        //health
        var healthVal = elements.healthValue.innerText
        update_health = Number(healthVal)
        update_health = update_health - update_health * (10 / 100)
        elements.healthValue.innerHTML = update_health.toFixed(2)

        //happiness
        var happinessVal = elements.happinessValue.innerText
        update_happiness = Number(happinessVal)
        update_happiness = update_happiness + update_happiness * (10 / 100)
        elements.happinessValue.innerHTML = update_happiness.toFixed(2)

        //cash
        //no changes
        // var update_cash = 0
        // var cashVal = elements.cashValue.innerText
        // update_cash = Number(cashVal)
        // elements.cashValue.innerHTML = update_cash + 2
    }

    function GroupStudy() {
        //health
        var healthVal = elements.healthValue.innerText
        update_health = Number(healthVal)
        update_health = update_health - update_health * (10 / 100)
        elements.healthValue.innerHTML = update_health.toFixed(2)

        //happiness
        var happinessVal = elements.happinessValue.innerText
        update_happiness = Number(happinessVal)
        update_happiness = update_happiness + update_happiness * (10 / 100)
        elements.happinessValue.innerHTML = update_happiness.toFixed(2)

        //cash
        //no changes
        // var update_cash = 0
        // var cashVal = elements.cashValue.innerText
        // update_cash = Number(cashVal)
        // elements.cashValue.innerHTML = update_cash + 2
    }

    function ClubMeeting() {
        //health
        var healthVal = elements.healthValue.innerText
        update_health = Number(healthVal)
        update_health = update_health + update_health * (10 / 100)
        elements.healthValue.innerHTML = update_health.toFixed(2)

        //happiness
        var happinessVal = elements.happinessValue.innerText
        update_happiness = Number(happinessVal)
        update_happiness = update_happiness + update_happiness * (10 / 100)
        elements.happinessValue.innerHTML = update_happiness.toFixed(2)

        //cash
        //no changes
        // var update_cash = 0
        // var cashVal = elements.cashValue.innerText
        // update_cash = Number(cashVal)
        // elements.cashValue.innerHTML = update_cash + 2
    }
    function EatCanteen() {
        //health
        var healthVal = elements.healthValue.innerText
        update_health = Number(healthVal)
        update_health = update_health - update_health * (10 / 100)
        elements.healthValue.innerHTML = update_health.toFixed(2)

        //happiness
        var happinessVal = elements.happinessValue.innerText
        update_happiness = Number(happinessVal)
        update_happiness = update_happiness + update_happiness * (10 / 100)
        elements.happinessValue.innerHTML = update_happiness.toFixed(2)

        //cash
        var cashVal = elements.cashValue.innerText
        update_cash = Number(cashVal)
        update_cash = update_cash - update_cash * (10 / 100)
        elements.cashValue.innerHTML = update_cash.toFixed(2)
    }
    function PlayGames() {
        //health
        var healthVal = elements.healthValue.innerText
        update_health = Number(healthVal)
        update_health = update_health + update_health * (10 / 100)
        elements.healthValue.innerHTML = update_health.toFixed(2)

        //happiness
        var happinessVal = elements.happinessValue.innerText
        update_happiness = Number(happinessVal)
        update_happiness = update_happiness + update_happiness * (10 / 100)
        elements.happinessValue.innerHTML = update_happiness.toFixed(2)

        //cash
        //no changes
        // var update_cash = 0
        // var cashVal = elements.cashValue.innerText
        // update_cash = Number(cashVal)
        // elements.cashValue.innerHTML = update_cash + 2
    }
    function StudyLibrary() {
        //health
        var healthVal = elements.healthValue.innerText
        update_health = Number(healthVal)
        update_health = update_health + update_health * (10 / 100)
        elements.healthValue.innerHTML = update_health.toFixed(2)

        //happiness
        var happinessVal = elements.happinessValue.innerText
        update_happiness = Number(happinessVal)
        update_happiness = update_happiness + update_happiness * (10 / 100)
        elements.happinessValue.innerHTML = update_happiness.toFixed(2)


        //cashhValue
        //no changes
        // var update_cash = 0
        // var cashVal = elements.cashValue.innerText
        // update_cash = Number(cashVal)
        // elements.cashValue.innerHTML = update_cash + 2
    }
}