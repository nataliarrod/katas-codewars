/*function generateShape(integer) {
  let result = [];
  for (let i = 0; i < integer; i++) {
    result.push("+");
  }
  return result;
}
console.log(generateShape(4));*/
/*
function generateShape2(integer) {
  let result = "";
  for(let i=0; i < integer; i++) {
    for(let j=0; j < integer; j++) {
      result = result + "+";
    }
    if (i < integer) {
      result = result + "\n";
    }
  }
  return result;
}
console.log(generateShape2(8));
*/
/*
function generateShape(integer) {
  let result = "";
  for (let i = 0; i < integer; i++) {
    const endCharacter = i < integer ? "\n" : "";
    result = result + "+".repeat(integer) + endCharacter;
  }
  return result;
}
*/

function generateShape (int) {
  return [...Array(int)].map(_ => "+".repeat(int)).join("\n")
} 

console.log(generateShape(5));
