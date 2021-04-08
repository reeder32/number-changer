// Business Logic

function transormNumber(digit) {
  const digitString = digit.toString();
  if (digitString.includes("3")) {
    return "Won't you be my neighbor? "
  } else if (digitString.includes("2")) {
    return "Boop! ";
  } else if (digitString.includes("1")) {
    return "Beep! ";
  } else {
    return digitString + " ";
  }
}

function evaluateInputValue(textInput, reversed) {
  const inputNumbers = parseInt(textInput);
  let returnString = "";
  if (reversed) {
    for (let i = inputNumbers; i >= 0; i--) {
      const str = transormNumber(i);
      if (str) {
        returnString = returnString + str;
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
    const originalText = $(`#number-input-literal${numberIndex}`).text();
    const reversed = evaluateInputValue(originalText, true);
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
