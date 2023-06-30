function top_three_words(text) {
  let counter = 0;
  let hasCountedItsefl = false;
  
  let top1Counter = 0;
  let top2Counter = 0;
  let top3Counter = 0;
  let wordHold = "";
  let differentWords = 0;
  let podiumWords =  [];
  
  let replacedStrings = text.trim().replace(/[^a-zA-Z0-9 ']/g, "").split(/\s+/);
  let inSearch1 = replacedStrings.filter((str) => str !== '');
  let inSearch = inSearch1.filter((str) => str !== '\'');
  
  for (let i = 0; i < inSearch.length; i++) {
    counter = 0; 
    differentWords = 0;
    hasCountedItsefl = false;
    for (let j = 0; j < inSearch.length; j++) {
      if (inSearch[j].toLowerCase() === inSearch[i].toLowerCase()) {
        counter++;
        if (hasCountedItsefl == false) {
          hasCountedItsefl = true;
          differentWords++;
        }
      }
      else if (wordHold != inSearch[j]) {
        wordHold = inSearch[j];
        differentWords++;
      }
     }
    if (podiumWords.includes(inSearch[i].toLowerCase())) {
      //{}
    }
    else if (differentWords >= 3) {
      if (counter > top1Counter) {
        top3Counter = top2Counter;
        podiumWords[2] = podiumWords[1];
        top2Counter = top1Counter;
        podiumWords[1] = podiumWords[0];
        top1Counter = counter;
        podiumWords[0] = inSearch[i].toLowerCase();
      }
      else if (counter > top2Counter) {
        top3Counter = top2Counter;
        podiumWords[2] = podiumWords[1];
        top2Counter = counter;
        podiumWords[1] = inSearch[i].toLowerCase();
      }
      else if (counter > top3Counter) {
        top3Counter = counter;
        podiumWords[2] = inSearch[i].toLowerCase();
      }
    }
    else if (differentWords >= 2) {
      if (counter > top1Counter) {
        top2Counter = top1Counter;
        podiumWords[1] = podiumWords[0];
        top1Counter = counter;
        podiumWords[0] = inSearch[i].toLowerCase();
      }
      else if (counter > top2Counter) {
        top2Counter = counter;
        podiumWords[1] = inSearch[i].toLowerCase();
      }
    }
    else {
       podiumWords[0] = inSearch[i].toLowerCase();
    }
  }
  
  return podiumWords;
}
