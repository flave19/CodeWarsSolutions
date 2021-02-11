//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
  let empty = []
  let word = str.toLowerCase();
  const letters = word.split("");
  
  for (let letter of letters){
    if (empty.includes(letter)){
      return false
    }
    else{
      empty.push(letter)
    }
  }
  return true
}

//refactored
function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}