import { test, expect, describe, beforeEach } from "vitest";
import { generateID, addItemToArray, removeItemFromArray } from './utils'

describe('generateID()', () => {
  test('should be a string', () => {
    let result = generateID()
    expect(result).toBeTypeOf('string')
  })
  
  test.todo('should be longer than 10 characters')
})

describe.concurrent('addItemToArray()', () => {
  beforeEach(context => {
    context.items = [{ id: 1 }, { id: 2 }]
    context.newItem = { id: 3 }
  })

  test('should add an item to an array', ({ items, newItem }) => {
    let result = addItemToArray(items, newItem)
    expect(result).toEqual([...items, newItem])
  })

  test('should not change the base array', ({ items, newItem }) => {
    const totalItemsAtFirst = items.length
    addItemToArray(items, newItem)
    expect(items).toHaveLength(totalItemsAtFirst)
  })

  test('should throw error if not an array', ({ newItem }) => {
    expect(() => addItemToArray(null, newItem)).toThrowError('is not iterable')
  })
})

describe('removeItemFromArray()', () => {
  beforeEach(context => {
    context.items = [{ id: 1 }, { id: 2 }]
    context.itemToRemove = context.items[0]
  })

  test('should remove an item from an array', ({ items, itemToRemove }) => {
    const result = removeItemFromArray(items, itemToRemove)
    expect(result).toHaveLength(1)
  })

  test('should not change the base array', ({ items, itemToRemove }) => {
    const totalItemsAtFirst = items.length
    removeItemFromArray(items, itemToRemove)
    expect(items).toHaveLength(totalItemsAtFirst)
  })
})

function returnValueAfterPause(value) {
  return new Promise((resolve) => setTimeout(resolve(value), 500));
}

describe('returnValueAfterPause()', () => {
  test('should return value after pause (promises)', async () => {
    const value = true
    let resultPromise = returnValueAfterPause(value)
    await expect(resultPromise).resolves.toBe(value)
  })
})