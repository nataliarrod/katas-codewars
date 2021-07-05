function solve(s){
  const regexMayus = s.match(/[A-Z]/g).length;
  const regexLowerCase = s.match(/[a-z]/g).length;
  const regexNumbers = s.match(/\d/g).length;
  const regexSpecialCharacters = s.match(/\W/g).length;
  return [regexMayus,regexLowerCase,regexNumbers,regexSpecialCharacters];
 }


 console.log(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"));