//

function incrementString (strng) {
  let letters = strng.replace(/[0-9]/g, '');
  console.log('letters', letters)
  
  let len = strng.length  - letters.length;
  console.log('length diff', len)
  
  let str = strng.slice(letters.length) || "0";
  console.log('str', str)
  console.log('str length', str.length)
  
  str = (parseInt(str) + 1).toString();
    console.log('add', str)
    console.log('str alt length', str.length)
  
    while (str.length < len) {
    str = "0" + str;
    console.log('updated str ', str)
  }
    
    return letters.concat(str);
}