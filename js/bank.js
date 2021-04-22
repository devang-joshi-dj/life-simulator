import * as elements from "./elements.js"
import * as config from './config.js'

document.addEventListener("DOMContentLoaded", () => {

	let openAccountFlag1 = true
	let openAccountFlag2 = false

	elements.bankOpenAccount.disabled = false
	elements.bankDepositMoney.disabled = true
	elements.bankWithdrawMoney.disabled = true
	elements.bankTakeLoan.disabled = true
	elements.bankPayBills.disabled = true
	elements.bankTalkTeller.disabled = true

	function openAccount() {
		//health
		//config.updateValue(config.health, -5)
		//hunger
		config.updateValue(config.hunger, -3)

		//happiness
		config.updateValue(config.happiness, +5)

		//cash
		config.updateValue(config.cash, -50)
	}

	function depositMoney() {
		//health
		// config.updateValue(config.health, -5)
		//hunger
		config.updateValue(config.hunger, -5)
		//happiness
		config.updateValue(config.happiness, +5)

		//cash
		config.updateValue(config.cash, +40)
	}


	function withdrawMoney() {
		//health
		//config.updateValue(config.health, +5)
		//hunger
		config.updateValue(config.hunger, -5)
		//happiness
		// no changes
		// var update_happiness = 0
		// var happinessVal = elements.happinessValue.innerText
		// update_happiness = Number(happinessVal)
		// elements.happinessValue.innerHTML = update_happiness +2

		//cash
		config.updateValue(config.cash, -30)
	}

	function takeLoan() {
		//health
		// config.updateValue(config.health, -5)
		//hunger
		config.updateValue(config.hunger, -4)
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
		// config.updateValue(config.health, -5)
		//hunger
		config.updateValue(config.hunger, -4)
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
		//config.updateValue(config.health, -5)
		//hunger
		config.updateValue(config.hunger, -4)
		//happiness
		config.updateValue(config.happiness, +5)

		//cash
		config.updateValue(config.cash, -10)
	}

	document.addEventListener('click', () => {
		if (openAccountFlag1)
			config.disableElement(elements.bankOpenAccount, 17, 10)
		if (openAccountFlag2) {
			config.disableElement(elements.bankDepositMoney, 17, 10)
			config.disableElement(elements.bankWithdrawMoney, 17, 10)
			config.disableElement(elements.bankTakeLoan, 17, 10)
			config.disableElement(elements.bankPayBills, 17, 10)
			config.disableElement(elements.bankTalkTeller, 17, 10)
		}
	})

	elements.bankOpenAccount.addEventListener("click", () => {
		openAccount()
		openAccountFlag1 = false
		openAccountFlag2 = true
		elements.bankOpenAccount.disabled = true
		elements.bankDepositMoney.disabled = false
		elements.bankWithdrawMoney.disabled = false
		elements.bankTakeLoan.disabled = false
		elements.bankPayBills.disabled = false
		elements.bankTalkTeller.disabled = false
	})

	elements.bankDepositMoney.addEventListener("click", depositMoney)
	elements.bankWithdrawMoney.addEventListener("click", withdrawMoney)
	elements.bankTakeLoan.addEventListener("click", takeLoan)
	elements.bankPayBills.addEventListener("click", payBills)
	elements.bankTalkTeller.addEventListener("click", talkTeller)
})