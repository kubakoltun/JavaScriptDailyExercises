function will_this_fly(object, crew, balloons) {
  this.houseWeight = object.weight;
  this.crewCount = crew;
  this.balloonCount = balloons;
}

will_this_fly.prototype.isPossible = function () {
  const balloonLiftCapacity = 0.0048; 
  const crewWeight = 80; 

  const totalCrewWeight = this.crewCount * crewWeight;
  const totalHouseWeight = this.houseWeight;
  const totalLiftCapacity = this.balloonCount * balloonLiftCapacity;

  return totalLiftCapacity > (totalCrewWeight + totalHouseWeight);
};
