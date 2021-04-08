import * as elements from './elements.js'
import * as config from './config.js'

document.addEventListener("DOMContentLoaded", () => {

    const shopping = () => {
        //health
        config.updateValue(config.health, -5)

        //happiness
        config.updateValue(config.happiness, +10)

        //cash
        config.updateValue(config.cash, -25)
    }

    const watchMovies = () => {
        //health
        config.updateValue(config.health, -5)

        //happiness
        config.updateValue(config.happiness, +10)

        //cash
        config.updateValue(config.cash, -20)
    }

    const gamingZone = () => {
        //health
        config.updateValue(config.health, -5)

        //happiness
        config.updateValue(config.happiness, +10)

        //cash
        config.updateValue(config.cash, -25)
    }

    const foodCourt = () => {
        //health
        config.updateValue(config.health, +15)

        //happiness
        config.updateValue(config.happiness, +10)

        //cash
        config.updateValue(config.cash, -20)
    }

    elements.mallShopping.addEventListener("click", shopping)
    elements.mallWatchMovies.addEventListener("click", watchMovies)
    elements.mallGamingZone.addEventListener("click", gamingZone)
    elements.mallFoodCourt.addEventListener("click", foodCourt)
})