function order(words) {
  let count = 1;
  let result = [];
  let word = words.split(" ");
  if (words === "") {
    return "";
  }

  while (result.length < word.length) {
    for (let w of word) {
      if (w.includes(count)) {
        result.push(w);
        count++;
      }
    }
  }
  return result.join(" ");
}
