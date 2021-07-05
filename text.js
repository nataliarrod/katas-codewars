function validSpacing(s) {
  const stringLength = s.length;
  const newStringLength = s.trim().length;
  const result = stringLength === newStringLength ? false : true;
  return result;
}
console.log(validSpacing("holaivan"));