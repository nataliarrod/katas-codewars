function initializeNames(name) {
  const names = name.split(" ");
  const namesQuantity = names.length;
  if (namesQuantity <= 2) return name;
  const middleNames = names.slice(1, namesQuantity - 1);
  middleNames.forEach((middleName, index) => {
    names[index + 1] = middleName.slice(0,1) + ".";
  });
  return names.join(" ");
}

function initializeNamesV2(name) {
  const nameArray = name.split(" ");
  if (nameArray.length <= 2) return name;
  switch(nameArray.length) {
    case 3:
      nameArray[1] = nameArray[1].slice(0,1) + ".";
      break;
    case 4:
      nameArray[1] = nameArray[1].slice(0,1) + ".";
      nameArray[2] = nameArray[2].slice(0,1) + ".";
      break;
    default:
      break;
  }
  return nameArray.join(" ");
}

console.log(initializeNames("Juanita Andrea Perpetuo Socorro Anais Gonzalez"));