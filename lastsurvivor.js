function lastSurvivor(letters, coords) {
  const result = coords.reduce((acc, letterIndex) => {
    const newArray = acc.split("");
    newArray.splice(letterIndex, 1);
    return newArray.join("");
  }, letters);
  return result;
}