function wordsToMarks(string) {
  const newArray = string.split("");
  const wordValue = newArray.reduce((accum, letter) => accum + letter.charCodeAt() - 96, 0);
  return wordValue;
}
console.log(wordsToMarks("friendship"));