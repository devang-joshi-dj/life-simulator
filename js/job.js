import * as elements from './elements.js'

window.onload = () => {

      elements.jobWorkOneHour.addEventListener("click", WorkOneHour)
      elements.jobWorkThreeHours.addEventListener("click", WorkThreeHours)
      elements.jobWorkFiveHours.addEventListener("click", WorkFiveHours)
      elements.jobWorkNineHours.addEventListener("click", WorkNineHours)
      elements.jobTakeBreak.addEventListener("click", TakeBreak)
      elements.jobAttendMeeting.addEventListener("click", AttendMeeting)
      elements.jobApplyPromotion.addEventListener("click", ApplyPromotion)

      var update_health = 0
      var update_happiness = 0
      var update_cash = 0

      function WorkOneHour() {
            //health
            var healthVal = elements.healthValue.innerText
            update_health = Number(healthVal)
            update_health = update_health - update_health * (5 / 100)
            elements.healthValue.innerHTML = update_health.toFixed(2)

            //happiness
            var happinessVal = elements.happinessValue.innerText
            update_happiness = Number(happinessVal)
            update_happiness = update_happiness + update_happiness * (5 / 100)
            elements.happinessValue.innerHTML = update_happiness.toFixed(2)

            //cash
            var cashVal = elements.cashValue.innerText
            update_cash = Number(cashVal)
            update_cash = update_cash + update_cash * (10 / 100)
            elements.cashValue.innerHTML = update_cash.toFixed(2)
      }

      function WorkThreeHours() {
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
            update_cash = update_cash + update_cash * (20 / 100)
            elements.cashValue.innerHTML = update_cash.toFixed(2)
      }


      function WorkFiveHours() {
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
            update_cash = update_cash + update_cash * (30 / 100)
            elements.cashValue.innerHTML = update_cash.toFixed(2)
      }

      function WorkNineHours() {
            //health
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
            update_cash = update_cash + update_cash * (40 / 100)
            elements.cashValue.innerHTML = update_cash.toFixed(2)
      }

      function TakeBreak() {
            //health
            var healthVal = elements.healthValue.innerText
            update_health = Number(healthVal)
            update_health = update_health + update_health * (5 / 100)
            elements.healthValue.innerHTML = update_health.toFixed(2)

            //happiness
            var happinessVal = elements.happinessValue.innerText
            update_happiness = Number(happinessVal)
            update_happiness = update_happiness + update_happiness * (5 / 100)
            elements.happinessValue.innerHTML = update_happiness.toFixed(2)

            //cash
            //no changes
            // var update_cash = 0
            // var cashVal = elements.cashValue.innerText
            // update_cash = Number(cashVal)
            // elements.cashValue.innerHTML = update_cash +2
      }

      function AttendMeeting() {
            //health
            var healthVal = elements.healthValue.innerText
            update_health = Number(healthVal)
            update_health = update_health - update_health * (5 / 100)
            elements.healthValue.innerHTML = update_health.toFixed(2)

            //happiness
            var happinessVal = elements.happinessValue.innerText
            update_happiness = Number(happinessVal)
            update_happiness = update_happiness + update_happiness * (5 / 100)
            elements.happinessValue.innerHTML = update_happiness.toFixed(2)

            //cash
            //no changes
            // var update_cash = 0
            // var cashVal = elements.cashValue.innerText
            // update_cash = Number(cashVal)
            // elements.cashValue.innerHTML = update_cash +2
      }

      function ApplyPromotion() {
            //health
            //health
            var healthVal = elements.healthValue.innerText
            update_health = Number(healthVal)
            update_health = update_health - update_health * (5 / 100)
            elements.healthValue.innerHTML = update_health.toFixed(2)

            //happiness
            var happinessVal = elements.happinessValue.innerText
            update_happiness = Number(happinessVal)
            update_happiness = update_happiness + update_happiness * (5 / 100)
            elements.happinessValue.innerHTML = update_happiness.toFixed(2)

            //cash
            //no changes
            // var update_cash = 0
            // var cashVal = elements.cashValue.innerText
            // update_cash = Number(cashVal)
            // elements.cashValue.innerHTML = update_cash +2
      }
}