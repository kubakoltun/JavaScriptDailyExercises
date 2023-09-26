function sum_intervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let mergedIntervals = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

    if (currentInterval[0] <= lastMergedInterval[1]) {
      lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
    } else {
      mergedIntervals.push(currentInterval);
    }
  }

  const sum = mergedIntervals.reduce((acc, interval) => acc + (interval[1] - interval[0]), 0);

  return sum;
}
