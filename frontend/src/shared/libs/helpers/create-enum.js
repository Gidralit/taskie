/**
 * Creates an enum object from the given key-value pairs and freezes it.
 * @param {Object} keysValues - The key-value pairs for the enum.
 * @returns {Object} - The frozen enum object.
 */
export const createEnum = (keysValues) => {
  const enumObject = Object.keys(keysValues).reduce((obj, key) => {
    obj[key] = keysValues[key]
    return obj
  }, {})

  return Object.freeze(enumObject)
}
