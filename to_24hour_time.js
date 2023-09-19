function to_24hour_time(hour, minute, period) {
  if (period === 'pm' && hour !== 12) {
    hour += 12;
  } else if (period === 'am' && hour === 12) {
    hour = 0;
  }

  const hourStr24 = hour.toString().padStart(2, '0');
  const minuteStr24 = minute.toString().padStart(2, '0');

  return hourStr24 + minuteStr24;
}
