function count_bananas(total) {
   if (total < 67) {
    return "false";
  }

  const apples = Math.round(total / (3 + 1 / 6 + 1 + 40 / 100 + 17));
  const oranges = apples + 17;
  const pears = Math.round(oranges * (60 / 100));
  const lemons = Math.round(pears * (5 / 6));
  const bananas = apples * 3;
  const tomatoes = total - (apples + oranges + pears + lemons + bananas);

  if (tomatoes > 0) {
    return bananas;
  } else {
    return "false";
  }
}
