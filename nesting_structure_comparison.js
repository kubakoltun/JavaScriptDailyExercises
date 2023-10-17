Array.prototype.sameStructureAs = function (other) {
  if (!isArray(this) || !isArray(other)) {
    return false;
  }

  if (this.length !== other.length) {
    return false;
  }

  for (let i = 0; i < this.length; i++) {
    if (isArray(this[i]) && isArray(other[i])) {
      if (!this[i].sameStructureAs(other[i])) {
        return false;
      }
    } else if (!isArray(this[i]) && isArray(other[i]) || isArray(this[i]) && !isArray(other[i])) {
      return false;
    }
  }

  return true;
};
