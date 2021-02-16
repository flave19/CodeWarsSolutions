//Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
  let newstr = "";
  if (cc.length < 4) {
    return cc;
  } else {
    for (let i = 0; i < cc.length - 4; i++) {
      newstr += "#";
    }
    let fourDigits = cc.slice(-4);
    return newstr.concat(fourDigits);
  }
}

