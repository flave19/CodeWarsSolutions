//Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  let letters = alphabet.split("")
  let str = string.split("")
  let filtered = letters.filter((word) => !str.includes(word))
  return filtered.length === 0 ? true : false
}