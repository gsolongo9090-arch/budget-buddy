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
  incomeInput.value = "";
  updateBalance();
});
const expenseInput = document.getElementById("expense-input");
const addExpenseButton = document.getElementById("add-expense");
const totalExpensesDisplay = document.getElementById("total-expenses");
addExpenseButton.addEventListener("click", function() {
  const expense = Number(expenseInput.value);
  if (expense <= 0) {
    alert("Please enter a valid expense amount.");
    return;
  }
  const currentTotal = Number(totalExpensesDisplay.textContent);
  const newTotal = currentTotal + expense;
  totalExpensesDisplay.textContent = newTotal;
  expenseInput.value = "";
  updateBalance();
});
const totalBalanceDisplay = document.getElementById("total-balance");
function updateBalance() {
  const income = Number(totalIncomeDisplay.textContent);
  const expenses = Number(totalExpensesDisplay.textContent);
  const balance = income - expenses;
  totalBalanceDisplay.textContent = balance;
}
