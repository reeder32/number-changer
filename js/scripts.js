// Business Logic

function transormNumber(digit) {
  const digitString = digit.toString();
  const numberArray = digitString.split("");
  let str = ""
  for (let i = numberArray.length; i >= 0; i--) {

    if (numberArray[i] === "3") {
      str = str + "Won't you be my neighbor? "
      break;
    } else if (numberArray[i] === "2") {
      str = str + "Boop! ";
      break;
    } else if (numberArray[i] === "1") {
      str = str + "Beep! ";

      break;
    }
  }
  return str;
}

function evaluateInputValue(textInput, reversed) {
  const inputNumbers = parseInt(textInput);
  let returnString = "";
  if (reversed) {
    for (let i = inputNumbers; i >= 0; i--) {
      const str = transormNumber(i);
      if (str) {
        returnString = returnString + str;
      } else {
        returnString = returnString + i.toString() + " ";
      }
    }
  } else {
    for (let i = 0; i <= inputNumbers; i++) {
      const str = transormNumber(i);
      if (str) {
        returnString = returnString + str;
      } else {
        returnString = returnString + i.toString() + " ";
      }
    }
  }
  return returnString;
}


// UI Logic
$(document).ready(function () {
  let numberIndex = 0;
  $(".reverse-button").click(function () {
    console.log(numberIndex);
    const originalText = $(`#number-input-literal${numberIndex}`).text();
    const reversed = evaluateInputValue(originalText, true);
    console.log(reversed);
    $("#result").append(`<p> You reversed me:  <b id="result-txt">${reversed}<b>`);
    $(this).fadeOut();
  });
  $("#formOne").submit(function (e) {
    const numberInput = $("#numberInput").val();
    const result = evaluateInputValue(numberInput, false);
    if (result) {
      numberIndex++;
      $("#result").append(`<p> You entered: <em id="number-input-literal${numberIndex}">${numberInput}<em>, and here is your translation:  <b>${result}<b>`);
      $(".reverse-button").fadeIn();
    } else {
      alert("Try a different number");
    }
    e.preventDefault();
  });

});
