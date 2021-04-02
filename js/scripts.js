// Business Logic

function transormNumber(digit) {
  const digitString = digit.toString();
  const numberArray = digitString.split("").reverse();
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


// UI Logic
$(document).ready(function () {
  $("#formOne").submit(function (e) {
    const numberInput = $("#numberInput").val();
    const result = evaluateInputValue(numberInput);
    console.log(numberInput);
    if (result) {
      $("#result").append(`<p> You entered: <em>${numberInput}<em>, and here is your translation: <b>${result}<b>`)
    } else {
      alert("Try a different number");
    }
    e.preventDefault();
  });
});
