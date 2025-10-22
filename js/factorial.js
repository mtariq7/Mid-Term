function calculatePower() {
  const inputEl = document.getElementById("userInput");
  const outEl = document.getElementById("output");
  const raw = inputEl.value.trim();
  if (raw === "") {
    outEl.textContent = "Please enter a number.";
    return;
  }
  const n = Number(raw);
  if (!Number.isInteger(n) || n < 0) {
    outEl.textContent = "Enter a whole number ≥ 0.";
    return;
  }
  let fact = 1;
  for (let i = 1; i <= n; i++) fact *= i;
  outEl.textContent = `${n}\n${n}! = ${fact}`;
}
const calculateFactorial = calculatePower;
