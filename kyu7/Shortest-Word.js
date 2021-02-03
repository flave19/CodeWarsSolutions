//Simple, given a string of words, return the length of the shortest word(s).

function findShort(s){
  let words = s.split(" ")
  let shortest = words[0].length
  for( let word of word){
    if (word.length < shortest){
      shortest = word.length
    }
  }
  return shortest
}