function tvRemote (word) {
  const wordArray = word.split("");
  wordArray.unshift("a");
  const totalScore = wordArray.reduce((acc, letter, index) => {
    if (index === wordArray.length - 1 ) return acc;
    const actualLetter = letter;
    const actualLetterCodeOffset = actualLetter.charCodeAt(0) - 96;
    const actualLetterXIndex = actualLetterCodeOffset % 5 === 0 ? 4 : (actualLetterCodeOffset  % 5) - 1;
    const actualLetterIndexes = [ actualLetterXIndex, Math.ceil(actualLetterCodeOffset / 5) - 1 ];

    const nextLetter = wordArray[index + 1];
    const nextLetterCodeOffset = nextLetter.charCodeAt(0) - 96;
    const nextLetterXIndex = nextLetterCodeOffset % 5 === 0 ? 4 : (nextLetterCodeOffset % 5) - 1;
    const nextLetterIndexes = [ nextLetterXIndex, Math.ceil(nextLetterCodeOffset / 5) - 1 ];
    
    const [xScore, yScore] =  [Math.abs(nextLetterIndexes[0] - actualLetterIndexes[0]), Math.abs(nextLetterIndexes[1] - actualLetterIndexes[1])];
    const score = xScore + yScore + 1;

    return acc + score;
  }, 0);
  return totalScore;
}
console.log(tvRemote("codewars"));