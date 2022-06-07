export function getFromStorage(itemName) {
  const itemUnparsed = localStorage.getItem(itemName)
  return (itemUnparsed) ? JSON.parse(itemUnparsed) : null
}

export function setInStorage(itemName, itemValue) {
  localStorage.setItem(itemName, JSON.stringify(itemValue))
}