// Utility Logic

let numbers = ["1", "2", "3"];

function isaMatch(numberArray) {
  isIncluded = numberArray.some(function (e) {
    //console.log(numbers.includes(e.toString()));
    return numbers.includes(e.toString());
  });
  return isIncluded;
}

function transormNumber(digit) {
  const digitString = digit.toString();
  const numberArray = digitString.split("");
  //console.log(digitString, numberArray);
  let str = ""
  for (let i = 0; i <= numberArray.length; i++) {

    if (numberArray[i] === "1") {
      str = str + "Beep! ";
    } else if (numberArray[i] === "2") {
      str = str + "Boop! ";
    } else if (numberArray[i] === "3") {
      str = str + "Won't you be my neighbor? "
    }
  }
  return str;
}

function evaluateInputValue(textInput) {
  const inputNumbers = parseInt(textInput);
  let returnString = "";
  for (let i = 0; i <= inputNumbers; i++) {
    const str = transormNumber(i);
    if (str) {
      returnString = returnString + str;
    } else {
      returnString = returnString + i.toString() + " ";
    }
  }
  return returnString;
}
let inputValue = evaluateInputValue(56);
console.log(inputValue);

// UI Logic

