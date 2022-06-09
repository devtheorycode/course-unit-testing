import { test, describe, expect, beforeEach } from 'vitest'
import { generateID, addItemToArray, removeItemFromArray } from './utils'

describe('generateID()', () => {
  test('should be a string', () => {
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

  test('should send a new array with new item', () => {
    let result = addItemToArray(items, newItem)

    expect(result).toEqual([...items, newItem])
  })

  test('should not change the origin array', () => {
    const itemsLength = items.length

    addItemToArray(items, newItem)

    expect(items).toHaveLength(itemsLength)
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