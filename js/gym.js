import * as elements from './elements.js'
import * as config from './config.js'

document.addEventListener("DOMContentLoaded", () => {

  const takeAdmission = () => {
    //health
    config.updateValue(config.health, -5)

    //happiness
    config.updateValue(config.happiness, +5)

    //cash
    config.updateValue(config.cash, -10)
  }

  const exerciseOneHour = () => {
    //health
    config.updateValue(config.health, +5)

    //happiness
    config.updateValue(config.happiness, +5)

    //cash
    // no changes
    // var update_cash = 0
    // var cashVal = elements.cashValue.innerText
    // update_cash = Number(cashVal)
    // elements.cashValue.innerHTML = update_cash +2
  }

  const exerciseTwoHours = () => {
    //health
    config.updateValue(config.health, +5)

    //happiness
    config.updateValue(config.happiness, +5)

    //cash
    // no changes
    // var update_cash = 0
    // var cashVal = elements.cashValue.innerText
    // update_cash = Number(cashVal)
    // elements.cashValue.innerHTML = update_cash +2
  }

  const exerciseThreeHours = () => {
    //health
    config.updateValue(config.health, +5)

    //happiness
    config.updateValue(config.happiness, +5)

    //cash
    //no changes 
    //var update_cash = 0
    // var cashVal = elements.cashValue.innerText
    // update_cash = Number(cashVal)
    // elements.cashValue.innerHTML = update_cash +2
    //  
  }

  const dietPlan = () => {
    //health
    config.updateValue(config.health, +2)

    //happiness
    config.updateValue(config.happiness, +2)

    //cash
    config.updateValue(config.cash, -5)
  }

  const talkTrainer = () => {

    //health
    config.updateValue(config.health, +5)

    //happiness
    config.updateValue(config.happiness, +5)

    //cash
    //no changes
    // var update_cash = 0
    // var cashVal = elements.cashValue.innerText
    // update_cash = Number(cashVal)
    // elements.cashValue.innerHTML = update_cash +2
  }

  elements.gymTakeAdmission.addEventListener("click", takeAdmission)
  elements.gymExerciseOneHour.addEventListener("click", exerciseOneHour)
  elements.gymExerciseTwoHours.addEventListener("click", exerciseTwoHours)
  elements.gymExerciseThreeHours.addEventListener("click", exerciseThreeHours)
  elements.gymDietPlan.addEventListener("click", dietPlan)
  elements.gymTalkTrainer.addEventListener("click", talkTrainer)
})