function findOdd(A) {
  let obj = {}
    for(let num of A){
    if(obj[num]){
      obj[num]++
    }else {
     obj[num] = 1
    }
  }
  for(let key in obj){
    if(obj[key] % 2 !== 0){
      return Number(key)
    }
  }
}