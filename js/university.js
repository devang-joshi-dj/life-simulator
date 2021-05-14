import * as elements from './elements.js'
import * as config from './config.js'

document.addEventListener('DOMContentLoaded', () => {

	let admissionFlag1 = false
	let feesFlag1 = false
	let admissionFlag2 = true
	let feesFlag2 = true
	let admissionMoneyFlag1 = false
	let admissionMoneyFlag2 = false

	elements.universityPayFees.disabled = true
	elements.universityAttendClasses.disabled = true
	elements.universityGroupStudy.disabled = true
	elements.universityClubMeeting.disabled = true
	elements.universityEatCanteen.disabled = true
	elements.universityPlayGames.disabled = true
	elements.universityStudyLibrary.disabled = true

	const admission = () => {
		if (config.cash.innerHTML >= 500) {
			admissionMoneyFlag1 = true
			config.updateValue(config.happiness, +2)
			config.updateValue(config.cash, -500)
			config.updateTime(1);
			alert(`You got the admission`)
		} else {
			alert(`You don't have enough money`)
		}
	}


	const payFees = () => {
		if (config.cash.innerHTML >= 700) {
			admissionMoneyFlag2 = true
			config.updateValue(config.cash, -700)
			config.updateTime(0, 30);
		} else {
			alert(`You don't have enough money`)
		}
	}

	const attendClasses = () => {
		config.updateValue(config.hunger, +5)
		config.updateValue(config.happiness, +4)
		config.updateTime(1);
		config.updateValue(config.intelligence, +5)
	}

	const groupStudy = () => {
		config.updateValue(config.hunger, +5)
		config.updateValue(config.happiness, +3)
		config.updateTime(1);
		config.updateValue(config.intelligence, +7)
	}

	const clubMeeting = () => {
		config.updateValue(config.hunger, +4)
		config.updateValue(config.happiness, +3)
		config.updateTime(0, 30);
	}

	const eatCanteen = () => {
		if (config.cash.innerHTML > 4) {
			config.updateValue(config.health, -7)
			config.updateValue(config.hunger, -4)
			config.updateValue(config.happiness, +4)
			config.updateValue(config.cash, -2)
			config.updateTime(0, 30);
		} else {
			alert(`You don't have enough money`)
		}
	}

	const playGames = () => {
		config.updateValue(config.hunger, +10)
		config.updateValue(config.happiness, +4)
		config.updateTime(1);
	}

	const studyLibrary = () => {
		config.updateValue(config.hunger, +7)
		config.updateValue(config.happiness, +3)
		config.updateTime(1);
		config.updateValue(config.intelligence, +8)
	}

	document.addEventListener('click', () => {
		if (admissionFlag2)
			config.disableElement(elements.universityAdmission, 18, 8)
		if (admissionFlag1 && feesFlag2 && admissionMoneyFlag1)
			config.disableElement(elements.universityPayFees, 18, 8)
		if (feesFlag1 && admissionMoneyFlag2) {
			config.disableElement(elements.universityAttendClasses, 18, 8)
			config.disableElement(elements.universityGroupStudy, 18, 8)
			config.disableElement(elements.universityClubMeeting, 18, 8)
			config.disableElement(elements.universityEatCanteen, 18, 8)
			config.disableElement(elements.universityPlayGames, 18, 8)
			config.disableElement(elements.universityStudyLibrary, 18, 8)
		}
	})

	elements.universityAdmission.addEventListener('click', () => {
		admission()
		admissionFlag1 = true
		admissionFlag2 = false
		if (admissionMoneyFlag1) {
			elements.universityAdmission.disabled = true
			elements.universityPayFees.disabled = false
			elements.universityAttendClasses.disabled = true
			elements.universityGroupStudy.disabled = true
			elements.universityClubMeeting.disabled = true
			elements.universityEatCanteen.disabled = true
			elements.universityPlayGames.disabled = true
			elements.universityStudyLibrary.disabled = true
		}
	})
	elements.universityPayFees.addEventListener('click', () => {
		payFees()
		feesFlag1 = true
		feesFlag2 = false
		if (admissionMoneyFlag2) {
			elements.universityAdmission.disabled = true
			elements.universityPayFees.disabled = true
			elements.universityAttendClasses.disabled = false
			elements.universityGroupStudy.disabled = false
			elements.universityClubMeeting.disabled = false
			elements.universityEatCanteen.disabled = false
			elements.universityPlayGames.disabled = false
			elements.universityStudyLibrary.disabled = false
		}
	})
	elements.universityAttendClasses.addEventListener('click', attendClasses)
	elements.universityGroupStudy.addEventListener('click', groupStudy)
	elements.universityClubMeeting.addEventListener('click', clubMeeting)
	elements.universityEatCanteen.addEventListener('click', eatCanteen)
	elements.universityPlayGames.addEventListener('click', playGames)
	elements.universityStudyLibrary.addEventListener('click', studyLibrary)
})