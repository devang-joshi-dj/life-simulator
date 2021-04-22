import * as elements from './elements.js'
import * as config from './config.js'

document.addEventListener("DOMContentLoaded", () => {

  // Eat Meal function
  const homeMeal = () => {
    config.updateValue(config.health, +2)

    config.updateValue(config.hunger, +2)

    config.updateValue(config.happiness, +2)

    config.updateTime(0, 20)
  }

  const homeRest = () => {
    config.updateValue(config.health, +2)

    config.updateValue(config.happiness, +2)

    config.updateTime(1);
  }

  const homeMeetfamily = () => {
    config.updateValue(config.health, -2)

    config.updateValue(config.happiness, +2)
  }

  function homeCleanRoom() {
    //config.updateValue(config.health, -2)
    config.updateValue(config.hunger, -2)

    config.updateValue(config.happiness, +2)
  }

  document.addEventListener('click', () => {
    config.disableElement(elements.homeRest, 23, 7)
  })

  // btngroup click
  elements.homeMeal.addEventListener("click", homeMeal)
  elements.homeRest.addEventListener("click", homeRest)
  elements.homeMeetFamily.addEventListener("click", homeMeetfamily)
  elements.homeCleanRoom.addEventListener("click", homeCleanRoom)
})