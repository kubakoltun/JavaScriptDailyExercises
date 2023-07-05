function createPhoneNumber(numbers){
  let number = "(";
  
  for (let i = 0; i < numbers.length; i++) {
    number += numbers[i];
    
    if (i == 2) {
      number += ") ";
    }
    if (i == 5) {
      number += "-";
    }
  }
  
  return number;
}
