/**
 * This file contains solutions to the lab, use it when you get stuck or when 
 * you want to compare your solution to with the teachers solution.
 * 
 * Execute the lab in the browser through lab.html and review the output in the 
 * console, or execute the lab through node using `node lab -s` in the terminal.
 */



/**
 * Returns the string "Hello world".
 *
 * @returns {string} A welcome message "Hello world".
 */
export function hello () {
  // TODO: Write your code here.
  return "Hello world"
}



/**
 * Returns the sum of two integer values.
 * 
 * @param {number} value1 - The first number to add.
 * @param {number} value2 - The second number to add.
 * @returns {number} The sum of the two values.
 */
export function add (value1, value2) {
  // TODO: Write your code here.
  return value1 + value2
}



/**
 * Returns the numeric value 42.
 *
 * @returns {number} The numeric value 42.
 */
export function magicNumber () {
  // TODO: Write your code here.
  return 42
}



/**
 * Checks the incoming value and returns boolean TRUE if it is higher than 42 or FALSE if it is 
 * lower than 42 or 0 when the incoming number is equal to 42.
 *
 * @param {number} number - The number to compare with 42.
 * @returns {number} The numeric value 42.
 */
export function compare (number) {
  // TODO: Write your code here.
  if (number > 42) {
    return true
  } else if (number < 42) {
    return false
  }
  return 0
}



/**
 * Convert celcius degrees to fahrenheit degrees.
 *
 * @param {number} celcius - The degree value in celcius.
 * @returns {number} The degree value in fahrenheit.
 */
export function celsiusToFahrenheit (celcius) {
  // TODO: Write your code here.
  return 9/5 * celcius + 32
}



/**
 * Sum all values from 1 up to the argument n.
 *
 * @param {number} n - Last value to sum.
 * @returns {number} Sum of all integers between 1 and up to n.
 */
export function sumToN (n) {
  // TODO: Write your code here.
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += i
  }
  return sum
}



/**
 * Check if a number is odd.
 *
 * @param {number} number - A number to check.
 * @returns {boolean} True if the number is odd, otherwise false.
 */
export function isOdd (number) {
  // TODO: Write your code here. 
  return number % 2 == 1 ? true : false
}



/**
 * Sum all values in an array.
 *
 * @param {number[]} numbers - All values to sum.
 * @returns {number} Sum of all numbers in the array.
 */
export function sum (numbers) {
  // TODO: Write your code here.
  let sum = 0
  for (const element of numbers) {
    sum += element
  }
  return sum
}



/**
 * Find the highest number in an array.
 *
 * @param {number[]} numbers - All values to to search in.
 * @returns {number} Highest value in the array.
 */
export function max (numbers) {
  // TODO: Write your code here.
  return Math.max(...numbers)
}



/**
 * Reverse a string.
 *
 * @param {string} str - A string.
 * @returns {string} The reversed represention of the string.
 */
export function reverseString (str) {
  // TODO: Write your code here.
  let reverse = ''
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i]
  }
  return reverse
}



/**
 * Count the number of words in a string where the word separator is a space.
 *
 * @param {string} str - A string.
 * @returns {number} Number of words in the string.
 */
export function countWords (str) {
  // TODO: Write your code here.
  str = str.trim()
  let countSpace = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      countSpace++
    }
  }
  return countSpace + 1
}



/**
 * Count the number of swedish vowels in a string.
 *
 * @param {string} str - A string.
 * @returns {number} Number of vowels in the string.
 */
export function countVowels (str) {
  // TODO: Write your code here.
  const vowel = ['a', 'e', 'i', 'o', 'u', 'y', 'å', 'ä', 'ö']
  let numVowel = 0
  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) {
      numVowel++
    }
  }
  return numVowel
}



/**
 * Check if the string is a palindrom.
 *
 * @param {string} str - A string.
 * @returns {boolean} True if the string is a palindrom, otherwise false.
 */
export function isPalindrom (str) {
  // TODO: Write your code here.
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true
}
