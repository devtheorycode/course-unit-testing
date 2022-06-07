// @vitest-environment happy-dom

import { test, expect, describe } from "vitest";
import { getFromStorage, setInStorage } from './storage'

describe('getFromStorage()', () => {
  test('shoud get defined data from storage', () => {
    let result = getFromStorage('transactions')
    expect(result).toBeDefined()
  })
})

describe('setInStorage()', () => {
  test('shoud set data in storage', () => {
    const email = 'john.doe@gmail.com'

    setInStorage('email', email)
    let result = getFromStorage('email')

    expect(result).toBe(email)
  })
})