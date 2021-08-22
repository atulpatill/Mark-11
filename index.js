const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberOfButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");


function compareValues(sum,luckyNumber){
  if (sum%luckyNumber===0){
    outputBox.innerText ="Hurray!!!Your Birthday is Lucky😀";
    outputBox.style.color ="green"
    outputBox.style.fontSize ="25px";
  }else{
    outputBox.innerText="Sorry!!! Your Birthday is not Lucky😐";
    outputBox.style.color ="pink"
    outputBox.style.fontSize ="25px";
  }
}


 function checkBirthDateIsLucky(){
  const dob = dateOfBirth.value ;
    const sum = calculateSum(dob);
    if (sum&&dob){
      compareValues(sum, luckyNumber.value)
    } else{
      outputBox.innerText = "Ohh!!! Please enter both the fields😮"
      outputBox.style.color = "red"
      outputBox.style.fontSize ="25px";
    }
  
 
}

function calculateSum(dob){
  dob = dob.replaceAll("-","");
  let sum = 0;
  for(let i=0; i<dob.length; i++){
  sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

checkNumberOfButton.addEventListener("click", checkBirthDateIsLucky)