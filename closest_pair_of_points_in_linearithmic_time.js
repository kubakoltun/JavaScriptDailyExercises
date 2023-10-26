function closestPair(points, distanceFn) {
  points.sort((a, b) => a[0] - b[0]);

  function closestPairRec(points, left, right) {
    if (right - left <= 3) {
      let minDistance = Infinity;
      let closestPoints;

      for (let i = left; i < right; i++) {
        for (let j = i + 1; j < right; j++) {
          const dist = distanceFn(points[i], points[j]);
          if (dist < minDistance) {
            minDistance = dist;
            closestPoints = [points[i], points[j]];
          }
        }
      }

      return closestPoints;
    }

    const mid = Math.floor((left + right) / 2);
    const leftClosest = closestPairRec(points, left, mid);
    const rightClosest = closestPairRec(points, mid, right);
    
    const minDistance = Math.min(
      distanceFn(leftClosest[0], leftClosest[1]),
      distanceFn(rightClosest[0], rightClosest[1])
    );

    const strip = [];
    for (let i = left; i < right; i++) {
      if (Math.abs(points[i][0] - points[mid][0]) < minDistance) {
        strip.push(points[i]);
      }
    }

    strip.sort((a, b) => a[1] - b[1]);

    let closestStripPoints;
    let minStripDistance = minDistance;
    for (let i = 0; i < strip.length; i++) {
      for (let j = i + 1; j < Math.min(i + 7, strip.length); j++) {
        const dist = distanceFn(strip[i], strip[j]);
        if (dist < minStripDistance) {
          minStripDistance = dist;
          closestStripPoints = [strip[i], strip[j]];
        }
      }
    }

    if (!closestStripPoints) {
      return minDistance === distanceFn(leftClosest[0], leftClosest[1]) ? leftClosest : rightClosest;
    }

    if (minDistance <= minStripDistance) {
      return minDistance === distanceFn(leftClosest[0], leftClosest[1]) ? leftClosest : rightClosest;
    } else {
      return closestStripPoints;
    }
  }

  return closestPairRec(points, 0, points.length);
}
