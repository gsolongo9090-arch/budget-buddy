const incomeInput = document.getElementById("income-input");
const addIncomeButton = document.getElementById("add-income");
const totalIncomeDisplay = document.getElementById("total-income");
addIncomeButton.addEventListener("click", function() {
  const income = Number(incomeInput.value);
  if (income <= 0) {
    alert("Please enter a valid income amount.");
    return;
  }
  const currentTotal = Number(totalIncomeDisplay.textContent);
  const newTotal = currentTotal + income;
  totalIncomeDisplay.textContent = newTotal;
  incomeInput.value = null;
});
