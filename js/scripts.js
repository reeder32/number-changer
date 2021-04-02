// Utility Logic

let numbers = ["1", "2", "3"];
function isaMatch(index) {
  return numbers.includes(index);
}

let transformedNumbers = [];

function transormNumber(digit) {
  const digitString = digit.toString();

  const numberArray = digitString.split("");
  for (let i = 0; i <= numberArray.length; i++) {
    if (isaMatch(numberArray[i])) {
      if (numberArray[i] === "1") {
        transformedNumbers.push("Beep!");
        //break;
      } else if (numberArray[i] === "2") {
        transformedNumbers.push("Boop!");
        //break;
      } else if (numberArray[i] === "3") {
        transformedNumbers.push("Won't you be my neighbor?");
        //break;
      }
    } else {
      transformedNumbers.push(digitString);
    }
    return transformedNumbers.join(" ");
  }
}

function evaluateInputValue(textInput) {
  const inputNumbers = parseInt(textInput);
  let returnString = "";
  for (let i = 0; i <= inputNumbers; i++) {
    returnString = transormNumber(i);
  }
  return returnString;
}
let inputValue = evaluateInputValue(32);
console.log(inputValue);
// UI Logic

