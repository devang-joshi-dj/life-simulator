import * as elements from './elements.js'
import * as config from './config.js'

document.addEventListener("DOMContentLoaded", () => {

  // Eat Meal function
  const homeMeal = () => {
    //health
    config.updateValue(config.health, +5)

    //happiness
    config.updateValue(config.happiness, +10)
  }

  const homeRest = () => {

    //health
    config.updateValue(config.health, +5)

    //happiness
    config.updateValue(config.happiness, +10)

  }

  const homeMeetfamily = () => {
    //health
    config.updateValue(config.health, -5)

    //happiness
    config.updateValue(config.happiness, +10)
  }

  function homeCleanRoom() {
    //health
    config.updateValue(config.health, -10)

    //happiness
    config.updateValue(config.happiness, +20)
  }

  // btngroup click
  elements.homeMeal.addEventListener("click", homeMeal)
  elements.homeRest.addEventListener("click", homeRest)
  elements.homeMeetFamily.addEventListener("click", homeMeetfamily)
  elements.homeCleanRoom.addEventListener("click", homeCleanRoom)
})