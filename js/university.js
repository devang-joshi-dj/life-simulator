import * as elements from './elements.js'
import * as config from './config.js'

document.addEventListener("DOMContentLoaded", () => {

    const admission = () => {
        //health
        config.updateValue(config.health, -10)

        //happiness
        config.updateValue(config.happiness, +10)

        //cash
        config.updateValue(config.cash, -30)
    }

    const payFees = () => {
        //health
        config.updateValue(config.health, -10)

        //happiness
        //no changes
        // var update_happiness = 0
        // var happinessVal = elements.happinessValue.innerText
        // update_happiness = Number(happinessVal)
        // elements.happinessValue.innerHTML = update_happiness + 2

        //cash
        config.updateValue(config.cash, -30)
    }

    const attendClasses = () => {
        //health
        config.updateValue(config.health, -10)

        //happiness
        config.updateValue(config.happiness, +10)

        //cash
        //no changes
        // var update_cash = 0
        // var cashVal = elements.cashValue.innerText
        // update_cash = Number(cashVal)
        // elements.cashValue.innerHTML = update_cash + 2
    }

    const groupStudy = () => {
        //health
        config.updateValue(config.health, -10)

        //happiness
        config.updateValue(config.happiness, +10)

        //cash
        //no changes
        // var update_cash = 0
        // var cashVal = elements.cashValue.innerText
        // update_cash = Number(cashVal)
        // elements.cashValue.innerHTML = update_cash + 2
    }

    const clubMeeting = () => {
        //health
        config.updateValue(config.health, +10)

        //happiness
        config.updateValue(config.happiness, +10)

        //cash
        //no changes
        // var update_cash = 0
        // var cashVal = elements.cashValue.innerText
        // update_cash = Number(cashVal)
        // elements.cashValue.innerHTML = update_cash + 2
    }

    const eatCanteen = () => {
        //health
        config.updateValue(config.health, -10)

        //happiness
        config.updateValue(config.happiness, +10)

        //cash
        config.updateValue(config.cash, -10)
    }

    const playGames = () => {
        config.updateValue(config.health, +10)

        //happiness
        config.updateValue(config.happiness, +10)

        //cash
        //no changes
        // var update_cash = 0
        // var cashVal = elements.cashValue.innerText
        // update_cash = Number(cashVal)
        // elements.cashValue.innerHTML = update_cash + 2
    }

    const studyLibrary = () => {
        //health
        config.updateValue(config.health, +10)

        //happiness
        config.updateValue(config.happiness, +10)

        //cashhValue
        //no changes
        // var update_cash = 0
        // var cashVal = elements.cashValue.innerText
        // update_cash = Number(cashVal)
        // elements.cashValue.innerHTML = update_cash + 2
    }

    elements.universityAdmission.addEventListener("click", admission)
    elements.universityPayFees.addEventListener("click", payFees)
    elements.universityAttendClasses.addEventListener("click", attendClasses)
    elements.universityGroupStudy.addEventListener("click", groupStudy)
    elements.universityClubMeeting.addEventListener("click", clubMeeting)
    elements.universityEatCanteen.addEventListener("click", eatCanteen)
    elements.universityPlayGames.addEventListener("click", playGames)
    elements.universityStudyLibrary.addEventListener("click", studyLibrary)
})