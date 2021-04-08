import * as elements from './elements.js'

document.addEventListener("DOMContentLoaded", () => {

      elements.restaurantEatFastFood.addEventListener("click", FastFood)
      elements.restaurantEatSeaFood.addEventListener("click", SeaFood)
      elements.restaurantEatSalad.addEventListener("click", Salad)
      elements.restaurantEatSouthIndian.addEventListener("click", SouthIndian)
      elements.restaurantEatNorthIndian.addEventListener("click", NorthIndian)
      elements.restaurantEatItalianFood.addEventListener("click", ItalianFood)
      elements.restaurantEatChineseFood.addEventListener("click", ChineseFood)

      var update_health = 0
      var update_happiness = 0
      var update_cash = 0

      function FastFood() {
            //health
            var healthVal = elements.healthValue.innerText
            update_health = Number(healthVal)
            update_health = update_health - update_health * (15 / 100)
            elements.healthValue.innerHTML = update_health.toFixed(2)

            //happiness
            var happinessVal = elements.happinessValue.innerText
            update_happiness = Number(happinessVal)
            update_happiness = update_happiness + update_happiness * (15 / 100)
            elements.happinessValue.innerHTML = update_happiness.toFixed(2)

            //cash
            var cashVal = elements.cashValue.innerText
            update_cash = Number(cashVal)
            update_cash = update_cash - update_cash * (15 / 100)
            elements.cashValue.innerHTML = update_cash.toFixed(2)
            elements.cashValue.innerHTML = update_cash + 2
      }
      function SeaFood() {
            //health
            var healthVal = elements.healthValue.innerText
            update_health = Number(healthVal)
            update_health = update_health + update_health * (20 / 100)
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
            elements.cashValue.innerHTML = update_cash + 2
      }
      function Salad() {
            //health
            var healthVal = elements.healthValue.innerText
            update_health = Number(healthVal)
            update_health = update_health + update_health * (20 / 100)
            elements.healthValue.innerHTML = update_health.toFixed(2)

            //happiness
            var happinessVal = elements.happinessValue.innerText
            update_happiness = Number(happinessVal)
            update_happiness = update_happiness + update_happiness * (20 / 100)
            elements.happinessValue.innerHTML = update_happiness.toFixed(2)

            //cash
            var cashVal = elements.cashValue.innerText
            update_cash = Number(cashVal)
            update_cash = update_cash - update_cash * (10 / 100)
            elements.cashValue.innerHTML = update_cash.toFixed(2)
            elements.cashValue.innerHTML = update_cash + 2
      }
      function SouthIndian() {
            //health
            var healthVal = elements.healthValue.innerText
            update_health = Number(healthVal)
            update_health = update_health + update_health * (20 / 100)
            elements.healthValue.innerHTML = update_health.toFixed(2)

            //happiness
            var happinessVal = elements.happinessValue.innerText
            update_happiness = Number(happinessVal)
            update_happiness = update_happiness + update_happiness * (20 / 100)
            elements.happinessValue.innerHTML = update_happiness.toFixed(2)

            //cash
            var cashVal = elements.cashValue.innerText
            update_cash = Number(cashVal)
            update_cash = update_cash - update_cash * (15 / 100)
            elements.cashValue.innerHTML = update_cash.toFixed(2)
            elements.cashValue.innerHTML = update_cash + 2
      }
      function NorthIndian() {
            //health
            var healthVal = elements.healthValue.innerText
            update_health = Number(healthVal)
            update_health = update_health + update_health * (20 / 100)
            elements.healthValue.innerHTML = update_health.toFixed(2)

            //happiness
            var happinessVal = elements.happinessValue.innerText
            update_happiness = Number(happinessVal)
            update_happiness = update_happiness + update_happiness * (20 / 100)
            elements.happinessValue.innerHTML = update_happiness.toFixed(2)

            //cash
            var cashVal = elements.cashValue.innerText
            update_cash = Number(cashVal)
            update_cash = update_cash - update_cash * (15 / 100)
            elements.cashValue.innerHTML = update_cash.toFixed(2)
            elements.cashValue.innerHTML = update_cash + 2
      }
      function ItalianFood() {
            //health
            var healthVal = elements.healthValue.innerText
            update_health = Number(healthVal)
            update_health = update_health + update_health * (20 / 100)
            elements.healthValue.innerHTML = update_health.toFixed(2)

            //happiness
            var happinessVal = elements.happinessValue.innerText
            update_happiness = Number(happinessVal)
            update_happiness = update_happiness + update_happiness * (20 / 100)
            elements.happinessValue.innerHTML = update_happiness.toFixed(2)

            //cash
            var cashVal = elements.cashValue.innerText
            update_cash = Number(cashVal)
            update_cash = update_cash - update_cash * (10 / 100)
            elements.cashValue.innerHTML = update_cash.toFixed(2)
            elements.cashValue.innerHTML = update_cash + 2
      }

      function ChineseFood() {
            //health
            var healthVal = elements.healthValue.innerText
            update_health = Number(healthVal)
            update_health = update_health - update_health * (20 / 100)
            elements.healthValue.innerHTML = update_health.toFixed(2)

            //happiness
            var happinessVal = elements.happinessValue.innerText
            update_happiness = Number(happinessVal)
            update_happiness = update_happiness + update_happiness * (20 / 100)
            elements.happinessValue.innerHTML = update_happiness.toFixed(2)

            //cash
            var cashVal = elements.cashValue.innerText
            update_cash = Number(cashVal)
            update_cash = update_cash - update_cash * (15 / 100)
            elements.cashValue.innerHTML = update_cash.toFixed(2)
            elements.cashValue.innerHTML = update_cash + 2
      }
})