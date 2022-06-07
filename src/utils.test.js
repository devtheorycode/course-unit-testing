import { test, expect, describe, beforeEach } from "vitest";
import { generateID, addItemToArray, removeItemFromArray } from './utils'

describe('generateID()', () => {
  test('shoud be a string', () => {
    let result = generateID()
    expect(result).toBeTypeOf('string')
  })
})

describe('addItemToArray()', () => {
  let items = null
  let newItem = null
  beforeEach(() => {
    items = [{ id: 1 }, { id: 2 }]
    newItem = { id: 3 }
  })

  test('should add an item to an array', () => {
    let result = addItemToArray(items, newItem)
    expect(result).toEqual([...items, newItem])
  })

  test('should not change the base array', () => {
    const totalItemsAtFirst = items.length
    addItemToArray(items, newItem)
    expect(items).toHaveLength(totalItemsAtFirst)
  })

  test('should throw error if not an array', () => {
    expect(() => addItemToArray(null, newItem)).toThrowError('is not iterable')
  })
})

describe('removeItemFromArray()', () => {
  let items = null
  let itemToRemove = null
  beforeEach(() => {
    items = [{ id: 1 }, { id: 2 }]
    itemToRemove = items[0]
  })

  test('should remove an item from an array', () => {
    const result = removeItemFromArray(items, itemToRemove)
    expect(result).toHaveLength(1)
  })

  test('should not change the base array', () => {
    const totalItemsAtFirst = items.length
    removeItemFromArray(items, itemToRemove)
    expect(items).toHaveLength(totalItemsAtFirst)
  })
})