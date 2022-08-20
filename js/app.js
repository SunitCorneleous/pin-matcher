function getPin() {
  const pin = generatePin();
  const pinString = pin + "";

  if (pinString.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

document
  .getElementById("generate-pin-btn")
  .addEventListener("click", function () {
    const pin = getPin();

    const pinDisplayField = document.getElementById("display-pin");
    pinDisplayField.value = pin;
  });

document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const clickedNumber = event.target.innerText;
    const display = document.getElementById("calculator-display");
    const previousValue = display.value;

    if (isNaN(clickedNumber)) {
      if (clickedNumber === "C") {
        display.value = "";
      } else if (clickedNumber === "<") {
        const allDigits = previousValue.split("");
        allDigits.pop();
        display.value = allDigits.join("");
      }
    } else {
      display.value = previousValue + clickedNumber;
    }
  });

document.getElementById("submit-btn").addEventListener("click", function () {
  const pinDisplayField = document.getElementById("display-pin");
  const display = document.getElementById("calculator-display");

  const matchedMessage = document.getElementById("matched");
  const unmatchedMessage = document.getElementById("not-matched");

  if (pinDisplayField.value === display.value) {
    unmatchedMessage.classList.remove("display");
    matchedMessage.classList.add("display");
  } else {
    matchedMessage.classList.remove("display");
    unmatchedMessage.classList.add("display");
  }
});
