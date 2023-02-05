function scuberGreetingForFeet(feet){
 
  const promoGreeting = "This one is on me!"
  const greeting = "That will be twenty bucks."
  const surgeGreeting = "I will gladly take your thirty bucks."
  const noGreeting = "No can do."

  let distanceTraveled = promoGreeting
  if (feet <= 400) {
    return distanceTraveled;
  } else if (
    feet <= 2000) {
      return greeting;
  } else if (
    feet <= 2500) {
      return surgeGreeting;
  } else if (
    feet > 2500) {
      return noGreeting;
    }  
};
scuberGreetingForFeet(feet);

function ternaryCheckCity(city){

  const yesRide = "Ok, sounds good."
  const noRide = "No go."
  return (city === "NYC" ? yesRide : noRide);
};
ternaryCheckCity(city);

function switchOnCharmFromTip(tip){

  const bigTip = "Thank you so much."
  const littleTip = "Thank you."
  const noTip = "Bye."

  switch(tip) {
    case "generous":
      return bigTip
    case "not as generous":
      return littleTip
    default:
      return noTip
  };
};
switchOnCharmFromTip(tip);