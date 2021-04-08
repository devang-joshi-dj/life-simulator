import * as elements from './elements.js'

window.onload = () => {
  var update_health = 0
  var update_happiness = 0

  // btngroup click 
  elements.homeMeal.addEventListener("click", homemeal)
  elements.homeRest.addEventListener("click", homerest)
  elements.homeMeetFamily.addEventListener("click", homemeetfamily)
  elements.homeCleanRoom.addEventListener("click", homecleanroom)

  // Eat Meal function
  function homemeal() {
    //health
    // var update_health = 0
    var healthVal = elements.healthValue.innerText
    update_health = Number(healthVal)
    update_health = update_health + update_health * (5 / 100)
    elements.healthValue.innerHTML = update_health.toFixed(2)

    //happiness
    // var update_happiness = 0
    var happinessVal = elements.happinessValue.innerText
    update_happiness = Number(happinessVal)
    update_happiness = update_happiness + update_happiness * (10 / 100)
    elements.happinessValue.innerHTML = update_happiness.toFixed(2)
  }

  function homerest() {

    //health
    var healthVal = elements.healthValue.innerText
    update_health = Number(healthVal)
    update_health = update_health + update_health * (5 / 100)
    elements.healthValue.innerHTML = update_health.toFixed(2)

    //happiness
    var happinessVal = elements.happinessValue.innerText
    update_happiness = Number(happinessVal)
    update_happiness = update_happiness + update_happiness * (10 / 100)
    elements.happinessValue.innerHTML = update_happiness.toFixed(2)

  }

  function homemeetfamily() {
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
  }
  function homecleanroom() {
    //health
    var healthVal = elements.healthValue.innerText
    update_health = Number(healthVal)
    update_health = update_health - update_health * (10 / 100)
    elements.healthValue.innerHTML = update_health.toFixed(2)

    //happiness
    var happinessVal = elements.happinessValue.innerText
    update_happiness = Number(happinessVal)
    update_happiness = update_happiness + update_happiness * (20 / 100)
    elements.happinessValue.innerHTML = update_happiness.toFixed(2)
  }
}