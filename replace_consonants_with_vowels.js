function replaceLetters(word) {
  console.log(word);
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  
  let newWord = '';
  
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    
    if (vowels.includes(char)) {
      let index = alphabet.indexOf(char) - 1;
      if (index === -1) {
        index = alphabet.length - 1;
      }
      while(!(consonants.includes(alphabet[index]))) {
        index--;
        if (index === -1) {
          index = alphabet.length - 1;
        }
      }
      newWord += alphabet[index];
    } else {
      let index = alphabet.indexOf(char) + 1;
      if (index === alphabet.length) {
        index = 0;
      }
      while(!(vowels.includes(alphabet[index]))) {
        index++;
        if (index === alphabet.length) {
          index = 0;
        }
      }
      newWord += alphabet[index];
    }
  }
  
  return newWord;
}
