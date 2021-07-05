function largestPairSum(numbers) {
  const maxNumber = numbers.sort((a, b) => b - a);
  return maxNumber[0] + maxNumber[1];
}

console.log(largestPairSum([0,102,34,50,103]));


