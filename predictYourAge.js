function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  const ages = [age1,age2,age3,age4,age5,age6,age7,age8];
  const sumPoweredAges = ages.reduce((sum, age) => Math.pow(age, 2) + sum , 0);
  const squaredSum = Math.sqrt(sumPoweredAges);
  const result = Math.floor(squaredSum / 2);
  return result;
}