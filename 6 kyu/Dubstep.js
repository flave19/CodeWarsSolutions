function songDecoder(song){
  let letters = song.split("WUB")
  let string = ''
    for(let letter of letters){
      if(letter != ''){
      string = string + ' ' + letter
      }
    }
    return string.trim()
  }