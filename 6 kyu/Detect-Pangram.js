//Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
}