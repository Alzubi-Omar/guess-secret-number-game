/**
 * Generate a random integer between 1 and max (inclusive)
 * @param {number} max
 * @returns {number}
 */
export function getRandomNumber(max) {
  return Math.trunc(Math.random() * max + 1);
}

/**
 * Get the current year
 * @returns {number}
 */
export function getCurrentYear() {
  return new Date().getFullYear();
}
