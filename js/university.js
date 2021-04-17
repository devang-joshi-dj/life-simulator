import * as elements from './elements.js'
import * as config from './config.js'

document.addEventListener("DOMContentLoaded", () => {

    elements.universityAdmission.disabled = false
    elements.universityPayFees.disabled = true
    elements.universityAttendClasses.disabled = true
    elements.universityGroupStudy.disabled = true
    elements.universityClubMeeting.disabled = true
    elements.universityEatCanteen.disabled = true
    elements.universityPlayGames.disabled = true
    elements.universityStudyLibrary.disabled = true

    const admission = () => {
        //health
        config.updateValue(config.health, -2)

        //happiness
        config.updateValue(config.happiness, +2)

        //cash
        config.updateValue(config.cash, -500)
    }

    const payFees = () => {
        //health
        config.updateValue(config.health, -2)

        //happiness
        //no changes
        // var update_happiness = 0
        // var happinessVal = elements.happinessValue.innerText
        // update_happiness = Number(happinessVal)
        // elements.happinessValue.innerHTML = update_happiness + 2

        //cash
        config.updateValue(config.cash, -500)
    }

    const attendClasses = () => {
        //health
        config.updateValue(config.health, -4)

        //happiness
        config.updateValue(config.happiness, +4)

        //cash
        //no changes
        // var update_cash = 0
        // var cashVal = elements.cashValue.innerText
        // update_cash = Number(cashVal)
        // elements.cashValue.innerHTML = update_cash + 2
    }

    const groupStudy = () => {
        //health
        config.updateValue(config.health, -3)

        //happiness
        config.updateValue(config.happiness, +3)

        //cash
        //no changes
        // var update_cash = 0
        // var cashVal = elements.cashValue.innerText
        // update_cash = Number(cashVal)
        // elements.cashValue.innerHTML = update_cash + 2
    }

    const clubMeeting = () => {
        //health
        config.updateValue(config.health, -3)

        //happiness
        config.updateValue(config.happiness, +3)

        //cash
        //no changes
        // var update_cash = 0
        // var cashVal = elements.cashValue.innerText
        // update_cash = Number(cashVal)
        // elements.cashValue.innerHTML = update_cash + 2
    }

    const eatCanteen = () => {
        //health
        config.updateValue(config.health, -4)

        //happiness
        config.updateValue(config.happiness, +4)

        //cash
        config.updateValue(config.cash, -4)
    }

    const playGames = () => {
        config.updateValue(config.health, +4)

        //happiness
        config.updateValue(config.happiness, +4)

        //cash
        //no changes
        // var update_cash = 0
        // var cashVal = elements.cashValue.innerText
        // update_cash = Number(cashVal)
        // elements.cashValue.innerHTML = update_cash + 2
    }

    const studyLibrary = () => {
        //health
        config.updateValue(config.health, +3)

        //happiness
        config.updateValue(config.happiness, +3)

        //cashhValue
        //no changes
        // var update_cash = 0
        // var cashVal = elements.cashValue.innerText
        // update_cash = Number(cashVal)
        // elements.cashValue.innerHTML = update_cash + 2
    }

    elements.universityAdmission.addEventListener("click", () => {
        admission()
        elements.universityAdmission.disabled = true
        elements.universityPayFees.disabled = false
        elements.universityAttendClasses.disabled = true
        elements.universityGroupStudy.disabled = true
        elements.universityClubMeeting.disabled = true
        elements.universityEatCanteen.disabled = true
        elements.universityPlayGames.disabled = true
        elements.universityStudyLibrary.disabled = true
    })
    elements.universityPayFees.addEventListener("click", () => {
        payFees()
        elements.universityAdmission.disabled = true
        elements.universityPayFees.disabled = true
        elements.universityAttendClasses.disabled = false
        elements.universityGroupStudy.disabled = false
        elements.universityClubMeeting.disabled = false
        elements.universityEatCanteen.disabled = false
        elements.universityPlayGames.disabled = false
        elements.universityStudyLibrary.disabled = false
    })
    document.addEventListener('click', () => {
        config.disableElement(elements.universityAdmission, 18,9)
        config.disableElement(elements.universityPayFees, 18,9)
        config.disableElement(elements.universityAttendClasses, 18,9)
        config.disableElement(elements.universityGroupStudy, 18,9)
        config.disableElement(elements.universityClubMeeting, 18,9)
        config.disableElement(elements.universityEatCanteen,18,9)
        config.disableElement(elements.universityPlayGames, 18,9)
        config.disableElement(elements.universityStudyLibrary, 18,9)

    })

    elements.universityAttendClasses.addEventListener("click", attendClasses)
    elements.universityGroupStudy.addEventListener("click", groupStudy)
    elements.universityClubMeeting.addEventListener("click", clubMeeting)
    elements.universityEatCanteen.addEventListener("click", eatCanteen)
    elements.universityPlayGames.addEventListener("click", playGames)
    elements.universityStudyLibrary.addEventListener("click", studyLibrary)
})