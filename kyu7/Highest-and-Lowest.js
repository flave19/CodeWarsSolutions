function highAndLow(numbers){
  let trap = numbers.split(" ")
  console.log(trap)
  let highest = Number(trap[0]) ;
  let lowest = Number(trap[0]);
  for(let i = 0;i<trap.length;i++){
    if (Number(trap[i])>highest){
      highest = Number(trap[i])
    }
    else if(trap[i]<lowest){
      lowest = Number(trap[i])
    }
  }
  return highest + " " +lowest
}