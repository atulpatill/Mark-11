const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberOfButton = document.querySelector("#check-number");



 function checkBirthDateIsLucky(){
  const date = dateOfBirth.value ;
    const sum = calculateSum(date);
  console.log(sum)
}

function calculateSum(date){
   return 12;
}

checkNumberOfButton.addEventListener("click", checkBirthDateIsLucky)