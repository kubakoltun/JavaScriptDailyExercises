function getKeyword(ciphertext, keyLength) {
  let key = '';
  for (let i = 0; i < keyLength; i++) {
    const frq = (new Array(26)).fill(0);
    for (let j = i; j < ciphertext.length; j+=keyLength) {
      frq[ciphertext.charCodeAt(j)-65]++;
    }
    const AEHINORST = new Array(26);
    for (let j = 0; j< 26; j++) {
      AEHINORST[(j)%26] = frq[j] + frq[(j+4)%26] + frq[(j+7)%26] +
                          frq[(j+8)%26] + frq[(j+13)%26] + frq[(j+14)%26] +
                          frq[(j+17)%26] + frq[(j+18)%26] + frq[(j+19)%26];
    }
    let maxAEHINORST = AEHINORST[0];
    AEHINORST.forEach(el => {
      if (el > maxAEHINORST) maxAEHINORST = el;
    });
    key += String.fromCharCode(AEHINORST.indexOf(maxAEHINORST)+65);
  }
  return key;
}
