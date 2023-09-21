function longest_vowel_chain(s) {
  let longest = 0;
  let currentLength = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    if ("aeiou".includes(char)) {
      currentLength++;
    } else {
      longest = Math.max(longest, currentLength);
      currentLength = 0;
    }
  }
  longest = Math.max(longest, currentLength);

  return longest;
}
