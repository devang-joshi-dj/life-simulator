
document.addEventListener("DOMContentLoaded", () => {

  //homeContent --> btnGroup
  const homemeal = document.getElementById("homeMeal"); //eat meal button
  const homerest = document.getElementById("homeRest"); // rest/sleep
  const homemeetfamily = document.getElementById("homeMeetFamily");  //Meet Family members button
  const homecleanroom = document.getElementById("homeCleanRoom"); //Clean rooms

  // statitics 
  const healthValue = document.getElementById("healthValue");
  const happinessValue = document.getElementById("happinessValue");
  const cashValue = document.getElementById("cashValue");


  // btngroup click 
  homemeal.addEventListener("click", homeMeal);
  homerest.addEventListener("click", homeRest);
  homemeetfamily.addEventListener("click", homeMeetFamily);
  homecleanroom.addEventListener("click", homeCleanRoom);

  // Eat Meal function
  function homeMeal() {
    //health
    var update_health = 0;
    var healthVal = healthValue.innerText;
    update_health = Number(healthVal);
    update_health = update_health + 2;
    healthValue.innerHTML = update_health;

    //happiness
    var update_happiness = 0;
    var happinessVal = happinessValue.innerText;
    update_happiness = Number(happinessVal);
    update_happiness = update_happiness + 2;
    happinessValue.innerHTML = update_happiness;
  }

  function homeRest ()
  {
   var update_health = 0;
   var healthVal = healthValue.innerText;
   update_health = Number(healthVal);
   healthValue.innerHTML = update_health +2;

   var update_happiness = 0;
   var happinessVal = happinessValue.innerText;
   update_happiness = Number(happinessVal);
   happinessValue.innerHTML = update_happiness +2;
  }

  function homeMeetFamily ()
  {
    var update_health = 0;
    var healthVal = healthValue.innerText;
    update_health = Number(healthVal);
    healthValue.innerHTML = update_health +2;
 
    var update_happiness = 0;
    var happinessVal = happinessValue.innerText;
    update_happiness = Number(happinessVal);
    happinessValue.innerHTML = update_happiness +2;
  }
  function homeCleanRoom ()
  {
    var update_health = 0;
    var healthVal = healthValue.innerText;
    update_health = Number(healthVal);
    healthValue.innerHTML = update_health +2;
 
    var update_happiness = 0;
    var happinessVal = happinessValue.innerText;
    update_happiness = Number(happinessVal);
    happinessValue.innerHTML = update_happiness +2;
  }
  
})
