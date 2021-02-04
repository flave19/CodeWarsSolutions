//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
  let oCounter = 0
  let xCounter = 0
  let string = str.toLowerCase()
  for (let i of string){
    if(i === 'x'){
      xCounter += 1
    }
    else if(i === 'o'){
      oCounter += 1
    }
  }
  return xCounter === oCounter
}