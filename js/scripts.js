// Utility Logic

let numbers = [1 - 3];
function isaMatch(index) {
  return numbers.includes(index);
}
function getReturnValue(index) {

  let returnArray = [];
  if (isaMatch) {
    const matchedNumber = index.toString().split("");
    if (matchedNumber[0] === "1") {
      returnArray.push("Beep!")
    } else if (matchedNumber[0] === "2") {
      returnArray.push("Boop!");
    } else if (matchedNumber[0] === "3") {
      returnArray.push("Won't you be my neighbor?");
    }
  } else {
    console.log("here");
    returnArray.push(index.toString());
  }
  return returnArray;
};
// Business Logic


function evaluateInputValue(textInput) {

  const inputNumbers = parseInt(textInput);
  let returnString;
  if (inputNumbers == 0) {
    returnString == "0"
  } else {
    for (let i = 0; i < inputNumbers; i++) {
      returnString = returnString + getReturnValue(i);
    }
  }
  return returnString;
}
let inputValue = evaluateInputValue(4);
console.log(inputValue);
// UI Logic

