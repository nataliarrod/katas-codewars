function isFlush(cards) {
  const cardsFlush = cards.every((card) => card[-1] === cards[0][-1]);
  return cardsFlush;
}
console.log(isFlush([ "10D", "4D",  "QD", "KD", "5D" ]));
