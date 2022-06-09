import { generateID, addItemToArray, removeItemFromArray } from './src/utils'
import { getBalance, getIncome, getExpense } from './src/stats'
import { getFromStorage, setInStorage } from './src/storage'

// DOM elements
const balanceText = document.getElementById('balance')
const incomeText = document.getElementById('income')
const expenseText = document.getElementById('expense')
const historyContainer = document.getElementById('historyList')
const newTransactionForm = document.getElementById('newTransactionForm')
const textInput = document.querySelector('#newTransactionForm input#text')
const amountInput = document.querySelector('#newTransactionForm input#amount')

// Init the data on the website
let transactions = getFromStorage('transactions') ?? []
transactions.forEach(addTransactionToDOM)
updateStats()

// Event listener for adding a new transaction
newTransactionForm.addEventListener('submit', (e) => {
  e.preventDefault()

  if (textInput.value.trim() === '' || amountInput.value.trim() === '') {
    alert('Please add a text and amount')
    return
  }

  const newTransaction = {
    id: generateID(),
    text: textInput.value,
    amount: Number(amountInput.value)
  }

  transactions = addItemToArray(transactions, newTransaction)
  addTransactionToDOM(newTransaction)

  updateStats()
  saveTransactions()

  textInput.value = ''
  amountInput.value = ''
})


/**
 * Add a transaction to the DOM and the event listener for deleting it
 *
 * @param {*} transaction
 */
function addTransactionToDOM(transaction) {
  // Create the transaction element in the DOM (on top of the list)
  const item = document.createElement('li')
  historyContainer.prepend(item)
  item.outerHTML = `
    <li id="transaction-${transaction.id}" class="border-r-4 bg-gray-800 flex justify-between mx-0 my-2 p-2 relative text-gray-200 ${transaction.amount < 0 ? 'border-red-500' : 'border-green-500'}">
      ${transaction.text} <span>${transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}€</span>
      <form data-transaction-id="${transaction.id}" class="absolute top-0 left-0 bottom-0">
        <button type="submit" class="delete-btn">x</button>
      </form>
    </li>
  `
  
  // Add event listener to delete the transaction
  document.body.querySelector(`form[data-transaction-id="${transaction.id}"]`).addEventListener('submit', function (e) {
    e.preventDefault()
    removeTransaction(transaction)
    saveTransactions()
    updateStats()
  })
}

/**
 * Remove a transaction from the DOM and the global array
 *
 * @param {*} transaction
 */
function removeTransaction(transaction) {
  transactions = removeItemFromArray(transactions, transaction)
  historyContainer.removeChild(document.getElementById(`transaction-${transaction.id}`))
}


/**
 * Update the stats on the website
 *
 */
function updateStats() {
  const balance = getBalance(transactions)
  const income = getIncome(transactions)
  const expense = getExpense(transactions)

  balanceText.innerText = `${balance.toFixed(2)}€`
  incomeText.innerText = `${income.toFixed(2)}€`
  expenseText.innerText = `${expense.toFixed(2)}€`
}


/**
 * Update the local storage with the current transactions
 *
 */
function saveTransactions() {
  setInStorage('transactions', transactions)
}
