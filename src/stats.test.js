import { test, expect, describe, beforeEach } from "vitest";
import { getBalance, getIncome, getExpense } from './stats'

let transactions = null
beforeEach(() => {
  transactions = [
    {
      id: 1,
      text: 'Gain',
      amount: 10
    },    
    {
      id: 3,
      text: 'Loss',
      amount: -5
    },    
    {
      id: 3,
      text: 'Loss',
      amount: -2
    }
  ]
})

describe('getBalance()', () => {
  test('shoud calculate the proper balance', () => {
    let result = getBalance(transactions)
    expect(result).toBe(3)
  })
})

describe('getIncome()', () => {
  test('shoud calculate the total of income', () => {
    let result = getIncome(transactions)
    expect(result).toBe(10)
  })
})

describe('getExpense()', () => {
  test('shoud calculate the total of expense', () => {
    let result = getExpense(transactions)
    expect(result).toBe(-7)
  })
})