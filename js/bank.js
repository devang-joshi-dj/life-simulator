import * as elements from "./elements.js"

document.addEventListener("DOMContentLoaded", () => {

     elements.bankOpenAccount.addEventListener("click", OpenAccount)
     elements.bankDepositMoney.addEventListener("click", DepositMoney)
     elements.bankWithdrawMoney.addEventListener("click", WithdrawMoney)
     elements.bankTakeLoan.addEventListener("click", TakeLoan)
     elements.bankPayBills.addEventListener("click", PayBills)
     elements.bankTalkTeller.addEventListener("click", TalkTeller)

     var update_health = 0
     var update_happiness = 0
     var update_cash = 0

     function OpenAccount() {
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
          update_cash = update_cash - update_cash * (10 / 100)
          elements.cashValue.innerHTML = update_cash.toFixed(2)
     }

     function DepositMoney() {
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

     function WithdrawMoney() {
          //health
          var healthVal = elements.healthValue.innerText
          update_health = Number(healthVal)
          update_health = update_health - update_health * (5 / 100)
          elements.healthValue.innerHTML = update_health.toFixed(2)

          //happiness
          // no changes
          // var update_happiness = 0
          // var happinessVal = elements.happinessValue.innerText
          // update_happiness = Number(happinessVal)
          // elements.happinessValue.innerHTML = update_happiness +2

          //cash
          var cashVal = elements.cashValue.innerText
          update_cash = Number(cashVal)
          update_cash = update_cash - update_cash * (10 / 100)
          elements.cashValue.innerHTML = update_cash.toFixed(2)
     }

     function TakeLoan() {
          //health
          var healthVal = elements.healthValue.innerText
          update_health = Number(healthVal)
          update_health = update_health - update_health * (5 / 100)
          elements.healthValue.innerHTML = update_health.toFixed(2)

          //happiness
          //  no changes
          // var happinessVal = elements.happinessValue.innerText
          // update_happiness = Number(happinessVal)
          // update_happiness = update_happiness + update_happiness * (5 / 100)
          // elements.happinessValue.innerHTML = update_happiness.toFixed(2)

          //cash
          var cashVal = elements.cashValue.innerText
          update_cash = Number(cashVal)
          update_cash = update_cash + update_cash * (10 / 100)
          elements.cashValue.innerHTML = update_cash.toFixed(2)
     }

     function PayBills() {
          //health
          var healthVal = elements.healthValue.innerText
          update_health = Number(healthVal)
          update_health = update_health - update_health * (5 / 100)
          elements.healthValue.innerHTML = update_health.toFixed(2)

          //happiness
          //no changes
          // var update_happiness = 0
          // var happinessVal = elements.happinessValue.innerText
          // update_happiness = Number(happinessVal)
          // elements.happinessValue.innerHTML = update_happiness +2

          //cash
          var cashVal = elements.cashValue.innerText
          update_cash = Number(cashVal)
          update_cash = update_cash - update_cash * (10 / 100)
          elements.cashValue.innerHTML = update_cash.toFixed(2)
     }

     function TalkTeller() {
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
          update_cash = update_cash - update_cash * (10 / 100)
          elements.cashValue.innerHTML = update_cash.toFixed(2)
     }
})