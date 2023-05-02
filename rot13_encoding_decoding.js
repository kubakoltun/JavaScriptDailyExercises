function rot13(str) { 
    let newStr = "";
    let charCode = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i).match(/[a-zA-Z]/g)) {
         charCode = (str[i].charCodeAt());
          if (str[i].toLowerCase().charCodeAt() > 109) {
            charCode -= 13;
            newStr += String.fromCharCode(charCode);
          }
          else {
            charCode += 13;
            newStr += String.fromCharCode(charCode);
          }
      }
      else {
        newStr += str.charAt(i);
      }
    }
    
    return newStr;
  }
