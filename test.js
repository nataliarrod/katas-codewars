function duplicateSandwich(list) {
  const duplicated = [...list].find(a => list.indexOf(a) !== list.lastIndexOf(a));
  return list.slice(list.indexOf(duplicated) + 1, list.lastIndexOf(duplicated));
}

console.log('first test', duplicateSandwich(["None", "Hello", "Example", "hello", "None", "Extra"]));
console.log(duplicateSandwich([0, 1, 2, 3, 4, 5, 6, 1, 7, 8]));