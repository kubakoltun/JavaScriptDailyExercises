function countBananas(total) {
  if (total < 67) {
    return "false";
  }

  let apples = 0; 
  let bananas = 0; 

  while (true) {
    let oranges = apples + 17;
    let pears = Math.round(oranges * (40 / 100));
    let lemons = Math.round(pears * (5 / 6));

    if (apples + oranges + pears + lemons + bananas >= total) {
      return bananas;
    }

    apples++;
    bananas += 3;
  }
}
