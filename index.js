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

  const generous = "tip is generous"
  const notAsGenerous = "tip is not as generous"
  const noTip = "Bye."

  switch(tip) {
    case generous: {
      let tip = 10
      const bigTip = "Thank you so much."
      console.log(bigTip)
      break;
    };  
    case notAsGenerous: {
      const littleTip = "Thank you."
      console.log(littleTip)
      break;
    };  
    default:
      return noTip;
  }
};
switchOnCharmFromTip(tip);