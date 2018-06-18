function Frame() {
  this.bowls = [];
}

Frame.prototype.addBowl = function(bowl) {
  this.bowls.push(bowl);
}
Frame.prototype.isComplete = function(currentFrame) {
  if (currentFrame < 9) {
    return this.isAStrike() || this.bowls.length === 2
  }
}

Frame.prototype.isAStrike = function() {
  return this.bowls[0] === 10;
}

Frame.prototype.isASpare = function() {
  return (this.bowls.reduce((a, b) => a + b)) === 10;
}

