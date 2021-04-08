import * as elements from './elements.js'
document.addEventListener("DOMContentLoaded", () => {

  elements.gymTakeAdmission.addEventListener("click", TakeAdmission);
  elements.gymExerciseOneHour.addEventListener("click", ExerciseOneHour);
  elements.gymExerciseTwoHours.addEventListener("click", ExerciseTwoHours);
  elements.gymExerciseThreeHours.addEventListener("click", ExerciseThreeHours);
  elements.gymDietPlan.addEventListener("click", DietPlan);
  elements.gymTalkTrainer.addEventListener("click", TalkTrainer);

  var update_health = 0;
  var update_happiness = 0;
  var update_cash = 0;
  
  function TakeAdmission() {
    //health
    var healthVal = elements.healthValue.innerText;
    update_health = Number(healthVal);
    update_health = update_health - update_health * (5 / 100);
    elements.healthValue.innerHTML = update_health.toFixed(2);

    //happiness
    var happinessVal = elements.happinessValue.innerText;
    update_happiness = Number(happinessVal);
    update_happiness = update_happiness + update_happiness * (5 / 100);
    elements.happinessValue.innerHTML = update_happiness.toFixed(2);

    //cash
    var cashVal = elements.cashValue.innerText;
    update_cash = Number(cashVal);
    update_cash = update_cash - update_cash * (10 / 100);
    elements.cashValue.innerHTML = update_cash.toFixed(2);
  }

  function ExerciseOneHour() {
    //health
    var healthVal = elements.healthValue.innerText;
    update_health = Number(healthVal);
    update_health = update_health + update_health * (5 / 100);
    elements.healthValue.innerHTML = update_health.toFixed(2);

    //happiness
    var happinessVal = elements.happinessValue.innerText;
    update_happiness = Number(happinessVal);
    update_happiness = update_happiness + update_happiness * (5 / 100);
    elements.happinessValue.innerHTML = update_happiness.toFixed(2);

    //cash
    // no changes
    // var update_cash = 0;
    // var cashVal = elements.cashValue.innerText;
    // update_cash = Number(cashVal);
    // elements.cashValue.innerHTML = update_cash +2;
  }
  function ExerciseTwoHours() {
    //health
    var healthVal = elements.healthValue.innerText;
    update_health = Number(healthVal);
    update_health = update_health + update_health * (5 / 100);
    elements.healthValue.innerHTML = update_health.toFixed(2);

    //happiness
    var happinessVal = elements.happinessValue.innerText;
    update_happiness = Number(happinessVal);
    update_happiness = update_happiness + update_happiness * (5 / 100);
    elements.happinessValue.innerHTML = update_happiness.toFixed(2);
    //cash
    // no changes
    // var update_cash = 0;
    // var cashVal = elements.cashValue.innerText;
    // update_cash = Number(cashVal);
    // elements.cashValue.innerHTML = update_cash +2;
  }
  function ExerciseThreeHours() {
    //health
    var healthVal = elements.healthValue.innerText;
    update_health = Number(healthVal);
    update_health = update_health + update_health * (5 / 100);
    elements.healthValue.innerHTML = update_health.toFixed(2);

    //happiness
    var happinessVal = elements.happinessValue.innerText;
    update_happiness = Number(happinessVal);
    update_happiness = update_happiness + update_happiness * (5 / 100);
    elements.happinessValue.innerHTML = update_happiness.toFixed(2);

    //cash
    //no changes 
    //var update_cash = 0;
    // var cashVal = elements.cashValue.innerText;
    // update_cash = Number(cashVal);
    // elements.cashValue.innerHTML = update_cash +2;
    //  
  }
  function DietPlan() {
    //health
    var update_health = 0;
    var healthVal = elements.healthValue.innerText;
    update_health = Number(healthVal);
    elements.healthValue.innerHTML = update_health + 2;

    //happiness
    var update_happiness = 0;
    var happinessVal = elements.happinessValue.innerText;
    update_happiness = Number(happinessVal);
    elements.happinessValue.innerHTML = update_happiness + 2;

    //cash
    var cashVal = elements.cashValue.innerText;
    update_cash = Number(cashVal);
    update_cash = update_cash - update_cash * (5 / 100);
    elements.cashValue.innerHTML = update_cash.toFixed(2);
  }
  function TalkTrainer() {

    //health
    var healthVal = elements.healthValue.innerText;
    update_health = Number(healthVal);
    update_health = update_health + update_health * (5 / 100);
    elements.healthValue.innerHTML = update_health.toFixed(2);

    //happiness
    var happinessVal = elements.happinessValue.innerText;
    update_happiness = Number(happinessVal);
    update_happiness = update_happiness + update_happiness * (5 / 100);
    elements.happinessValue.innerHTML = update_happiness.toFixed(2);

    //cash
    //no changes
    // var update_cash = 0;
    // var cashVal = elements.cashValue.innerText;
    // update_cash = Number(cashVal);
    // elements.cashValue.innerHTML = update_cash +2;
  }

})
