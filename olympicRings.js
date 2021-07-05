function olympicRing(a){
  if (a === undefined) return 'Bronze!';
  const oneRingRegexp = /[abdegopqADOPQR]/g
  const twoRingRegexp = /[B]/g
  const oneRings = a.match(oneRingRegexp) || [];
  const twoRings = a.match(twoRingRegexp) || [];
  const score = Math.floor((oneRings.length + 2 * (twoRings.length)) / 2);
  if (score <= 1) {
    return "Not even a medal!";
  } else if (score === 2) {
    return "Bronze!";
  } else if (score === 3){
    return "Silver!";
  }
  return "Gold!";
}
console.log(olympicRing('wHjMudLwtoPGocnJ'));