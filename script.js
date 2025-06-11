const display = document.getElementById("display");

function appendSymbol(symbol) {
  display.value += symbol;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (e) {
    display.value = "Error";
  }
}

// Keyboard input support
document.addEventListener("keydown", function (e) {
  const allowedKeys = "0123456789+-*/().";
  if (allowedKeys.includes(e.key)) {
    appendSymbol(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    backspace();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});
