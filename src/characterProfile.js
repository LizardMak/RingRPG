export function CharacterProfile (strength, speed, intelligence, round, name) {
  this.strength = strength;
  this.speed = speed;
  this.intelligence = intelligence;
  this.round = round;
  this.name = name;
}

CharacterProfile.prototype.addAttribStrength = function () {
  this.strength = this.strength + 1;
};

CharacterProfile.prototype.addAttribSpeed = function () {
  this.speed = this.speed + 1;
};

CharacterProfile.prototype.addAttribIntelligence = function () {
  this.intelligence = this.intelligence + 1;
};

CharacterProfile.prototype.setName = function(name) {
  this.name = name;
};

CharacterProfile.prototype.nextRound = function() {
  this.round = this.round + 1;
};