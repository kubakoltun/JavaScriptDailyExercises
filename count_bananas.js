function count_bananas(total) {
   if (total <= 0) {
    return false;
  }

  let bananas = 0;
  let apples = 0;
  let oranges = 0;
  let pears = 0;
  let lemons = 0;
  let tomatoes = 0;

  oranges = apples + 17;
  pears = oranges * 0.6;
  lemons = pears * (5 / 6);
  apples = bananas / 3;

  tomatoes = total - bananas - apples - oranges - pears - lemons;

  if (total < bananas + apples + oranges + pears + lemons) {
    return false;
  }

  return Math.min(bananas, total - tomatoes);
}
