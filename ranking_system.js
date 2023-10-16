class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
  }

  incProgress(activityRank) {
    if (activityRank < -8 || activityRank > 8 || activityRank === 0) {
      throw new Error("Invalid activity rank");
    }

    const rankDifference = activityRank - this.rank;
    let progressEarned = 0;

    if (rankDifference === 0) {
      progressEarned = 3;
    } else if (rankDifference === -1 && this.rank !== -1) {
      progressEarned = 1;
    } else if (rankDifference > 0) {
      progressEarned = 10 * rankDifference * rankDifference;
    }

    if (this.rank < 0 && activityRank > 0) {
      rankDifference === -1 ? (progressEarned = 1) : (progressEarned *= 2);
    }

    this.progress += progressEarned;

    while (this.progress >= 100) {
      if (this.rank === -1 && this.progress >= 100) {
        this.progress -= 100;
      } else {
        this.progress -= 100;
        this.rank++;
      }
    }

    if (this.rank === 8) {
      this.progress = 0;
    }
  }
}
