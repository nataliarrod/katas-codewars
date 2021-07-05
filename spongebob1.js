function spongeMeme(sentence) {
  const sentenceArray = sentence.split("");
  const upperCaseRegex = /[A-Z]/g;
  const result = sentenceArray.map((letter) => {
    return upperCaseRegex.test(letter)
      ? letter.toLowerCase()
      : letter.toUpperCase();
  });
  return result.join("");
}
console.log(spongeMeme("colored teens cant Be successful in tech"));
