import * as elements from "./elements.js"
import * as config from './config.js'

document.addEventListener("DOMContentLoaded", () => {

     function openAccount() {
          //health
          config.updateValue(config.health, -5)

          //happiness
          config.updateValue(config.happiness, +5)

          //cash
          config.updateValue(config.cash, -10)
     }

     function depositMoney() {
          //health
          config.updateValue(config.health, -5)

          //happiness
          config.updateValue(config.happiness, +5)

          //cash
          config.updateValue(config.cash, +10)
     }

     function withdrawMoney() {
          //health
          config.updateValue(config.health, +5)

          //happiness
          // no changes
          // var update_happiness = 0
          // var happinessVal = elements.happinessValue.innerText
          // update_happiness = Number(happinessVal)
          // elements.happinessValue.innerHTML = update_happiness +2

          //cash
          config.updateValue(config.cash, -10)
     }

     function takeLoan() {
          //health
          config.updateValue(config.health, -5)

          //happiness
          //  no changes
          // var happinessVal = elements.happinessValue.innerText
          // update_happiness = Number(happinessVal)
          // update_happiness = update_happiness + update_happiness * (5 / 100)
          // elements.happinessValue.innerHTML = update_happiness.toFixed(2)

          //cash
          config.updateValue(config.cash, +10)
     }

     function payBills() {
          //health
          config.updateValue(config.health, -5)

          //happiness
          //no changes
          // var update_happiness = 0
          // var happinessVal = elements.happinessValue.innerText
          // update_happiness = Number(happinessVal)
          // elements.happinessValue.innerHTML = update_happiness +2

          //cash
          config.updateValue(config.cash, -10)
     }

     function talkTeller() {
          //health
          config.updateValue(config.health, -5)

          //happiness
          config.updateValue(config.happiness, +5)

          //cash
          config.updateValue(config.cash, -10)
     }

     elements.bankOpenAccount.addEventListener("click", openAccount)
     elements.bankDepositMoney.addEventListener("click", depositMoney)
     elements.bankWithdrawMoney.addEventListener("click", withdrawMoney)
     elements.bankTakeLoan.addEventListener("click", takeLoan)
     elements.bankPayBills.addEventListener("click", payBills)
     elements.bankTalkTeller.addEventListener("click", talkTeller)
})