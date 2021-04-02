// Utility Logic

let numbers = /[1 - 3]/;
function isaMatch(index) {
  return index.toString().match(numbers);
}

let transformedNumbers = [];

function transormNumber(digit, length) {
  const digitString = digit.toString();
  let returnArray = [];
  if (isaMatch(digitString)) {
    const numberArray = digitString.split("");
    //console.log(numberArray);
    for (let i = 0; i <= length; i++) {

      if (numberArray[i] === "1") {
        returnArray.push("Beep!");
      } else if (numberArray[i] === "2") {
        returnArray.push("Boop!");
      } else if (numberArray[i] === "3") {
        returnArray.push("Won't you be my neighbor?");
      } else {
        console.log(numberArray[i]);
      }
    }
  } else {
    //console.log(digitString);
    returnArray.push(digitString);
  }
  console.log(returnArray);
  return returnArray.join(" ");
  //console.log(numberArray);
}

function evaluateInputValue(textInput) {
  const inputNumbers = parseInt(textInput);
  let returnString = "";
  for (let i = 0; i <= inputNumbers; i++) {

    returnString = returnString + transormNumber(i, textInput.toString().length);
  }
  return returnString;
}
let inputValue = evaluateInputValue(50);
//console.log(inputValue);
// UI Logic

