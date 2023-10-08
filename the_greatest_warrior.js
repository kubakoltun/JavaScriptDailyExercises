function the_greatest_warrior() {
  var experience = 100;
  var achievements = [];
  var ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
  
  this.training = function(data) {
    if (data[2] <= this.level()) {
      experience += data[1];
      achievements.push(data[0]);
      return data[0];
    }
    
    return "Not strong enough";
  }
  
  this.battle = function(enemy) {
      if (enemy <= 0 || enemy > 100) {
        return "Invalid level";
      }
      if (enemy - this.level() > 4 && Math.floor(enemy/10) - Math.floor(this.level()/10) == 1) {
        return "You've been defeated";
      } 
      else if (enemy - this.level() >= 1) {
        experience += 20 * Math.pow(this.level() - enemy, 2);
        return "An intense fight";
      } 
      else if (this.level() == enemy) {
        experience += 10;
        return "A good fight";
      } 
      else if (this.level() - enemy == 1) {
        experience += 5;
        return "A good fight";
      } else {
        return "Easy fight";
      }
  }
  
  this.level = function() { return Math.floor(experience/100) > 100 ? 100 : Math.floor(experience/100); }
  this.rank = function() { return ranks[Math.floor(experience/1000) > 10 ? 10 : Math.floor(experience/1000)]; }
  this.achievements = function() { return achievements; }
  this.experience = function() { return experience > 10000 ? 10000 : experience; }
}
