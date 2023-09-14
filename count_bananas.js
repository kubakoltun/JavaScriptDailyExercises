function countBananas(total) {
  let lastValidBananas = false;

  for (let bananas = 0; ; bananas += 3) {
    let apples = bananas / 3;
    let oranges = 17 + apples;
    let pears = oranges * 0.6;
    let lemons = pears + pears * (5 / 6);
    let sum = apples + oranges + pears + lemons + bananas;

    if (!Number.isInteger(pears)) continue;
    if (!Number.isInteger(lemons)) continue;
    
    if (sum > total) {
      if (bananas === 0) return false;
      return lastValidBananas;
    }
    lastValidBananas = bananas;
  }
}
