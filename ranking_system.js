let User = (function () {
  let hierarchy = [ -8,-7,-6,-5,-4,-3,-2,-1, 1, 2, 3, 4, 5, 6, 7, 8 ];
  let progress = { min: 0, max: 100 };
  let rank = { min: hierarchy[0], max: hierarchy[hierarchy.length - 1] };
  
  progress.acceleration = function (userRank, activityRank) {
    let d = rank.difference(userRank, activityRank);
    if      (d === -1)  return 1;
    else if (d === 0)   return 3;
    else if (d > 0)     return 10*d*d;
    else                return 0;
  };

  progress.update = function (user, acceleration) {
    user.progress += acceleration;
    user.progress = (user.rank === rank.max) ? progress.min : user.progress % progress.max;
  };

  rank.difference = function (userRank, activityRank) {
    return hierarchy.indexOf(activityRank) - hierarchy.indexOf(userRank);
  };

  rank.update = function (user, acceleration) {
    let d = ~~((user.progress + acceleration) / progress.max);
    let i = hierarchy.indexOf(user.rank) + d;
    if (i >= hierarchy.length) i = hierarchy.length -1;
    user.rank = hierarchy[i];
  };

  rank.valid = function (r) {
    return hierarchy.indexOf(r) > -1;
  };
  
  let User = function () {
    this.progress = progress.min;
    this.rank = rank.min;
  };

  User.prototype.incProgress = function (activityRank) {
    if (!rank.valid(activityRank)) throw new Error("Invalid activity rank given");
    let accel = progress.acceleration(this.rank, activityRank);
    rank.update(this, accel);
    progress.update(this, accel);
  };
  
  return User;
}).call();
