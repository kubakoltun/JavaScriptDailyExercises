function Vigenère_cipher(key, abc) {  
  this.encode = function (str) {
    let res = "";
    let letter = "";
    let j = 0;
    
    for (let i = 0; i < str.length; i++) {
      let shiftC = key.charCodeAt(j)-97;

      letter = String.fromCharCode(str.charCodeAt(i)+shiftC);
      
      if (!abc.includes(String.fromCharCode(str.charCodeAt(i)))) {
        res += String.fromCharCode(str.charCodeAt(i))
      } else {
        if (str.charCodeAt(i)-97+shiftC > 25) {
          let period = str.charCodeAt(i)-97+shiftC - 25;
          letter = String.fromCharCode(period+96);
        }
        res += letter;
      }
      j++;
      if (j === key.length) {
        j = 0;
      }
    }
  
    return res;
  };
  this.decode = function (str) {
    console.log(str)
    let res = "";
    let letter = "";
    let j = 0;

    for (let i = 0; i < str.length; i++) {
      let shiftC = (key.charCodeAt(j)-97);

      letter = String.fromCharCode(str.charCodeAt(i)-shiftC);

      if (!abc.includes(String.fromCharCode(str.charCodeAt(i)))) {
        res += String.fromCharCode(str.charCodeAt(i))
      } else {
        if (str.charCodeAt(i)-97-shiftC < 0) {
          let period = str.charCodeAt(i)-97-shiftC + 25;
          letter = String.fromCharCode(period+98);
        }
        res += letter;
      }
      j++;
      if (j === key.length) {
        j = 0;
      }
    }
  
    return res;
  };
}
