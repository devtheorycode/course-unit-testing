// @vitest-environment happy-dom

import { test, describe, expect } from 'vitest'
import { getFromStorage, setInStorage } from './storage'

describe('getFromStorage()', () => {
  test('should get data from localStorage', () => {
    let transactions = [{ id: 1 }]    
    localStorage.setItem('transactions', JSON.stringify(transactions))

    let result = getFromStorage('transactions')

    expect(result).toEqual(transactions)
  })
})

describe('setInStorage()', () => {
  test('should set data in localStorage', () => {
    const email = 'john.doe@gmail.com'
    
    setInStorage('email', email)
    let result = JSON.parse(localStorage.getItem('email'))
    
    expect(result).toBe(email)
  })
})