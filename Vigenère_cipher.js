function VigenèreCipher(key, abc) {
  this.encode = function (str) {
    let res = "";
    let letter = "";
    for (let i = 0; i < str.length; i++) {
      let shiftC = key.charCodeAt(i)-97;
      
      letter = String.fromCharCode(str.charCodeAt(i)+shiftC)
      
      if (str.charCodeAt(i)-97+shiftC > 25) {
        let period = str.charCodeAt(i)-97+shiftC - 25;
        letter = String.fromCharCode(period+97);
      }
      
      res += letter;
    }
    return res;
  };
  this.decode = function (str) {
    let res = "";
    let letter = "";
    for (let i = 0; i < str.length; i++) {
      let shiftC = (key.charCodeAt(i)-97);
      
      letter = String.fromCharCode(str.charCodeAt(i)+25-shiftC)
      
      if (str.charCodeAt(i)-97+25-shiftC > 25) {
        let period = str.charCodeAt(i)-97+shiftC - 25;
        letter = String.fromCharCode(period+97);
      }
      
      res += letter;
    }
    return res;
  };
}
