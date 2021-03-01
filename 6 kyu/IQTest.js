//Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

function iqTest(numbers){
  let digits = numbers.split(' ')
  let even = []
  let odd = []
  for(let digit of digits){
    if(digit % 2 === 0 ){
      even.push(digit)
    }
    else{
      odd.push(digit)
    }
  }
  return even.length === 1? digits.indexOf(even[0]) +1  : digits.indexOf(odd[0]) +1
}