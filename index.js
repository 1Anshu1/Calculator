const inner = document.querySelector(".inner");
const input = document.getElementById("input");
const options = document.querySelectorAll(".input");

let valueoftext = "";

options.forEach((option) => {
  option.addEventListener("click", checkbutton);
});

function checkbutton(e) {
  const buttoncontents = e.target.innerText;

  if (buttoncontents === "=") {
    calculateResult();
  } else if (buttoncontents === "DEL") {
    deleteLastInput();
  } else if (buttoncontents === "RESET") {
    resetInput();
  } else {
    valueoftext += buttoncontents;
    console.log(valueoftext);
    updateDisplay();
  }
}
function calculateResult() {
    try {
      const newval = valueoftext.replace(/X/g, "*");
      const result = evaluateExpression(newval);
      valueoftext = result.toString();
      updateDisplay();
    } catch (error) {
      valueoftext = "Error";
      updateDisplay();
    }
  }
  
  function deleteLastInput() {
    valueoftext = valueoftext.slice(0, -1);
    updateDisplay();
  }
  
  function updateDisplay() {
    input.value = valueoftext || "0";
  }
  
  function resetval() {
    valueoftext = "";
    updateDisplay();
  }
  
  function evaluateExpression(valueoftext) {
    const result = eval(valueoftext);
    return result;
    console.log(result);
  }