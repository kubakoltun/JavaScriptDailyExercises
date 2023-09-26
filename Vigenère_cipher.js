function Vigenère_cipher(key, abc) {  
  this.encode = function (str) {
    let res = "";
    let letter = "";
    let j = 0;
    
    for (let i = 0; i < str.length; i++) {     
      let shiftC = abc.indexOf(key.charAt(j));
      let letterPosition = abc.indexOf(str.charAt(i));

      letter = abc.charAt(letterPosition+shiftC);
      
      if (!abc.includes(str.charAt(i))) {
        res += str.charAt(i);
      } else {
        if (letterPosition+shiftC > abc.length-1) {
          let period = letterPosition+shiftC - abc.length;
          letter = abc.charAt(period);
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
    let res = "";
    let letter = "";
    let j = 0;
    
    for (let i = 0; i < str.length; i++) {     
      let shiftC = abc.indexOf(key.charAt(j));
      let letterPosition = abc.indexOf(str.charAt(i));

      letter = abc.charAt(letterPosition-shiftC);
      
      if (!abc.includes(str.charAt(i))) {
        res += str.charAt(i);
      } else {
        if (letterPosition-shiftC < 0) {
          let period = letterPosition-shiftC + abc.length;
          letter = abc.charAt(period);
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
