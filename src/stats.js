export function getBalance(transactions) {
  const balance = transactions
    .map(transaction => transaction.amount)
    .reduce((sum, amount) => (sum += amount), 0)

  return balance
}

export function getIncome(transactions) {
  const income = transactions
    .map(transaction => transaction.amount)
    .filter(amount => amount > 0)
    .reduce((sum, amount) => (sum += amount), 0)

  return income
}

export function getExpense(transactions) {
  const expense = transactions
    .map(transaction => transaction.amount)
    .filter(amount => amount < 0)
    .reduce((sum, amount) => (sum += amount), 0)

  return expense
}