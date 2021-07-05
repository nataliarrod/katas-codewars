function duplicateSandwich(a) {
  const twice = [...a].find(elem => {
    const firstTwiceIndex = a.indexOf(elem);
    const lastTwiceIndex = a.lastIndexOf(elem);
    return firstTwiceIndex !== lastTwiceIndex;
  });
  const result = a.slice(a.indexOf(twice) + 1, a.lastIndexOf(twice));
  return result;
}

console.log(duplicateSandwich(["None", "Hello", "Example", "hello", "None", "Extra"]));
console.log(duplicateSandwich([0, 1, 2, 3, 4, 5, 6, 1, 7, 8]));