import { test, describe, expect, beforeEach } from 'vitest'
import { generateID, addItemToArray, removeItemFromArray } from './utils'

describe('generateID()', () => {
  test('should be a string', () => {
    let result = generateID();
    expect(result).toBeTypeOf('string')
  })

  test.todo('should be more than 10 characters')
})

describe.concurrent('addItemToArray()', () => {

  beforeEach((context) => {
    context.items = [{ id: 1 }, { id: 2 }]
    context.newItem = { id: 3 }
  })

  test('should send a new array with new item', ({ items, newItem }) => {
    let result = addItemToArray(items, newItem)

    expect(result).toEqual([...items, newItem])
  })

  test('should not change the origin array', ({ items, newItem }) => {
    const itemsLength = items.length

    addItemToArray(items, newItem)

    expect(items).toHaveLength(itemsLength)
  })

  test('should throw error if not an array', ({ newItem }) => {
    const method = () => addItemToArray(null, newItem)
    expect(method).toThrowError('iterable')
  })
})

describe('removeItemFromArray()', () => {
  test('should send a new array without an item', () => {
    const items = [{ id: 1 }, { id: 2 }]
    const itemToRemove = items[0]

    const result = removeItemFromArray(items, itemToRemove)

    expect(result[0].id).toBe(2)
  })

  test('should not change the origin array', () => {
    const items = [{ id: 1 }, { id: 2 }]
    const itemsLength = items.length
    const itemToRemove = items[0]

    removeItemFromArray(items, itemToRemove)

    expect(items).toHaveLength(itemsLength)
  })
})

// Async test

function returnValueAfterPause(value) {
  return new Promise((resolve) => setTimeout(resolve(value), 500));
}

describe('returnValueAfterPause()', () => {
  test('should resolve after a pause', async () => {
    const valueToReturn = 123

    const resultPromise = returnValueAfterPause(valueToReturn)

    await expect(resultPromise).resolves.toBe(valueToReturn)
  })
})
