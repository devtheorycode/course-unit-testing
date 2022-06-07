import { v4 as uuid } from '@lukeed/uuid';

export function generateID() {
  return uuid();
}

export function addItemToArray(array, item) {
  return [...array, item]
}

export function removeItemFromArray(array, item) {
  return array.filter(el => el !== item)
}