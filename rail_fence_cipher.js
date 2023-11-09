function encodeRailFenceCipher(string, numberRails) {
  if (string === "" || numberRails < 2) {
    return "";
  }

  const rails = Array.from({ length: numberRails }, () => []);
  let railIndex = 0;
  let direction = 1;

  for (let char of string) {
    rails[railIndex].push(char);

    if (railIndex === 0) {
      direction = 1;
    } 
    else if (railIndex === numberRails - 1) {
      direction = -1;
    }
    railIndex += direction;
  }
  return rails.flat().join("");
}

function decodeRailFenceCipher(string, numberRails) {
  if (string === "" || numberRails < 2) {
    return "";
  }

  const rails = Array.from({ length: numberRails }, () => []);
  let railIndex = 0;
  let direction = 1;

  for (let char of string) {
    rails[railIndex].push(null);
    railIndex += direction;
    if (railIndex === 0 || railIndex === numberRails - 1) {
      direction = -direction;
    }
  }

  let stringIndex = 0;
  for (let i = 0; i < numberRails; i++) {
    for (let j = 0; j < rails[i].length; j++) {
      rails[i][j] = string[stringIndex++];
    }
  }

  railIndex = 0;
  direction = 1;
  let decodedString = "";

  for (let i = 0; i < string.length; i++) {
    decodedString += rails[railIndex].shift();
    railIndex += direction;

    if (railIndex === 0 || railIndex === numberRails - 1) {
      direction = -direction;
    }
  }

  return decodedString;
}
