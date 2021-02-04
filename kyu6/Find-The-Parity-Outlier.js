//You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers){
  let even =[]
  let odd = []
  for(let i=0; i<integers.length; i++){
    if(integers[i]% 2=== 0){
        even.push(integers[i])
    }
    else {
      odd.push(integers[i])
    }
  }
  return even.length === 1? even[0] : odd[0]
}

