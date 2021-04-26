import * as elements from "./elements.js"
import * as config from './config.js'

document.addEventListener("DOMContentLoaded", () => {

	config.setValue(config.balance, 0)
	config.setValue(config.loan, 0)
	config.setValue(config.bills, 0)

	let openAccountFlag1 = true
	let openAccountFlag2 = false

	elements.bankOpenAccount.disabled = false
	elements.bankDepositMoney.disabled = true
	elements.bankWithdrawMoney.disabled = true
	elements.bankTakeLoan.disabled = true
	elements.bankPayLoan.disabled = true
	elements.bankPayBills.disabled = true
	elements.bankTalkTeller.disabled = true

	const openAccount = () => {
		config.updateValue(config.hunger, -3)
		config.updateValue(config.happiness, +5)

		if (config.cash.innerHTML > 50) {
			config.updateValue(config.cash, -50)
		} else {
			alert("You don't have enough money")
		}
		config.updateTime(1)
	}

	const depositMoney = () => {
		config.updateValue(config.hunger, -5)
		config.updateValue(config.happiness, +5)

		if (config.cash.innerHTML > 0) {
			config.updateValue(config.cash, -50)
			config.updateValue(config.balance, +50)
		} else {
			alert("You don't have enough money")
		}
		config.updateTime(1)
	}

	const withdrawMoney = () => {
		config.updateValue(config.hunger, -5)

		if (config.balance.innerHTML > 0) {
			config.updateValue(config.cash, +50)
			config.updateValue(config.balance, -50)
		} else {
			alert("You don't have enough balance")
		}
		config.updateTime(1)
	}

	const takeLoan = () => {
		config.updateValue(config.hunger, -4)
		config.updateValue(config.cash, +1000)
		config.updateValue(config.loan, +1000)
		config.updateTime(1)
	}

	const payLoan = () => {
		config.updateValue(config.hunger, -4)

		if (config.loan.innerHTML > 0) {
			config.updateValue(config.cash, -1000)
			config.updateValue(config.loan, -1000)
		} else {
			alert("You have no loan to pay")
		}
	}

	const payBills = () => {
		config.updateValue(config.hunger, -4)
		const bill = Number(config.bills.innerHTML) - Number(config.bills.innerHTML) - Number(config.bills.innerHTML)
		config.updateValue(config.cash, bill)
		config.setValue(config.bills, 0)
		config.updateTime(1)
	}

	const talkTeller = () => {
		config.updateValue(config.hunger, -4)
		config.updateValue(config.happiness, +5)
		config.updateTime(0,30)
	}

	document.addEventListener('click', () => {
		config.updateValue(config.bills, +0.1)
		let bills = Number(config.bills.innerHTML)
		bills = bills.toFixed(2)
		config.setValue(config.bills, bills)

		let cash = Number(config.cash.innerHTML)
		cash = cash.toFixed(2)
		config.setValue(config.cash, cash)

		if (openAccountFlag1)
			config.disableElement(elements.bankOpenAccount, 17, 10)
		if (openAccountFlag2) {
			config.disableElement(elements.bankDepositMoney, 17, 10)
			config.disableElement(elements.bankWithdrawMoney, 17, 10)
			config.disableElement(elements.bankPayLoan, 17, 10)
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
		elements.bankPayLoan.disabled = false
		elements.bankPayBills.disabled = false
		elements.bankTalkTeller.disabled = false
	})
	elements.bankDepositMoney.addEventListener("click", depositMoney)
	elements.bankWithdrawMoney.addEventListener("click", withdrawMoney)
	elements.bankTakeLoan.addEventListener("click", takeLoan)
	elements.bankPayLoan.addEventListener("click", payLoan)
	elements.bankPayBills.addEventListener("click", payBills)
	elements.bankTalkTeller.addEventListener("click", talkTeller)
})

