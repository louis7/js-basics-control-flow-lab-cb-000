function scuberGreetingForFeet(distance){
  let message;
  if (distance <= 400){
        message = "This one is on me!";
   }
<<<<<<< HEAD
   else if (distance >= 2000 && distance <=2500){
        message = "I will gladly take your thirty bucks.";

   }
   else {
     message = "No can do.";
   }
=======
   elseif (distance >= 2000) && (distance <=2500) {
        message = "I will gladly take your thirty bucks."

   }
>>>>>>> 23409017f0a506899d2f5edf02c023c6c69d2f6d


return message

}

function ternaryCheckCity(city){
  let message;
  city === "NYC" ? (message = "Ok, sounds good."):(message ="No go.");
  return message
}

<<<<<<< HEAD
function switchOnCharmFromTip(tip){
let message;
  switch (tip) {
    case "generous":
          message = "Thank you so much."
          break;
    case "not as generous":
          message = "Thank you."
          break;
    default:
          message = "Bye."
          break;

  }

  return message

=======
function switchOnCharmFromTip(){
  // Write your code here!
>>>>>>> 23409017f0a506899d2f5edf02c023c6c69d2f6d
}
