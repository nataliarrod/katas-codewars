function isFlush(cards) {
  const compareIsFlush = cards.reduce((accu, card) => {
    return {
      suit: accu.suit,
      status: (accu.status) && (accu.suit === card[1]),
    };
  });
  return compareIsFlush.status;
};
console.log(isFlush(["AS" ,"3S", "9S", "KS", "4S"]));