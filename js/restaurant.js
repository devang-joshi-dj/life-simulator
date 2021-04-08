import * as elements from './elements.js'
import * as config from './config.js'

document.addEventListener("DOMContentLoaded", () => {

      const fastFood = () => {
            //health
            config.updateValue(config.health, -15)

            //happiness
            config.updateValue(config.happiness, +15)

            //cash
            config.updateValue(config.cash, -17)
      }

      const seaFood = () => {
            //health
            config.updateValue(config.health, -20)

            //happiness
            config.updateValue(config.happiness, +20)

            //cash
            config.updateValue(config.cash, -22)
      }

      const salad = () => {
            //health
            config.updateValue(config.health, +20)

            //happiness
            config.updateValue(config.happiness, +20)

            //cash
            config.updateValue(config.cash, -12)
      }

      const southIndian = () => {
            //health
            config.updateValue(config.health, +20)

            //happiness
            config.updateValue(config.happiness, +20)

            //cash
            config.updateValue(config.cash, -17)
      }

      const northIndian = () => {
            //health
            config.updateValue(config.health, +20)

            //happiness
            config.updateValue(config.happiness, +20)

            //cash
            config.updateValue(config.cash, -17)
      }

      const italianFood = () => {
            //health
            config.updateValue(config.health, +20)

            //happiness
            config.updateValue(config.happiness, +20)

            //cash
            config.updateValue(config.cash, -12)
      }

      const chineseFood = () => {
            //health
            config.updateValue(config.health, -20)

            //happiness
            config.updateValue(config.happiness, +20)

            //cash
            config.updateValue(config.cash, -17)
      }

      elements.restaurantEatFastFood.addEventListener("click", fastFood)
      elements.restaurantEatSeaFood.addEventListener("click", seaFood)
      elements.restaurantEatSalad.addEventListener("click", salad)
      elements.restaurantEatSouthIndian.addEventListener("click", southIndian)
      elements.restaurantEatNorthIndian.addEventListener("click", northIndian)
      elements.restaurantEatItalianFood.addEventListener("click", italianFood)
      elements.restaurantEatChineseFood.addEventListener("click", chineseFood)
})