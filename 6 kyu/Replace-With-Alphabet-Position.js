//In this kata you are required to, given a string, replace every letter with its position in the alphabet.If anything in the text isn't a letter, ignore it and don't return it.

function alphabetPosition(text) {
  let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let result = []
  let letters = text.toLowerCase().split("")
  for (let letter of letters ){
    if (alpha.includes(letter)){
      result.push(alpha.indexOf(letter)+1)
    }
  }
  return result.join(" ")
}