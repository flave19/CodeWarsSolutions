//Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. If the two numbers are equal return a or b.

function getSum(a,b){
  let count = 0
  if (a == b )return a
  if(a < b){
    for(; a <= b ; a++){
      count += a
    }
  } else if (a > b) {
    for (; b <= a ; b++){
      count += b
    }
  }
  return count
}


