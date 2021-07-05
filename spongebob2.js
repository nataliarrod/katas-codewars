function spongeMeme(sentence) {
  const sentenceArray = sentence.split("");
  const result = sentenceArray.map((letter, index) => {
    return index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
  });
  return result.join("");
}
console.log(spongeMeme("colored teens cant Be successful in tech"));
