//Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

function arrayDiff(a, b) {
  let result = []
  for(let i = 0; i<a.length;i++){
    if(!b.includes(a[i])){
      result.push(a[i])
    }
  }
  return result
}


//refactored
function arrayDiff(a, b) {
  return a.filter(num => !b.includes(num))
}
