function Frame() {
  this.bowls = [];
}

Frame.prototype.addBowl = function(bowl) {
  this.bowls.push(bowl);
}

Frame.prototype.isComplete = function(currentFrame) {
  currentFrame < 9 ? a = this.checkRegularframe() : a = this.checkFinalFrame();
  return a;
}

Frame.prototype.isAStrike = function() {
  return this.bowls[0] === 10;
}

Frame.prototype.isASpare = function() {
  return (this.bowls.reduce((a, b) => a + b)) === 10;
}

Frame.prototype.checkRegularframe = function() {
  return this.isAStrike() || this.bowls.length === 2;
}

Frame.prototype.checkFinalFrame = function() {
   if (this.bowls.length === 3) {
     return true
   };
   if (this.isAStrike()) {
     return false
   };
   if (this.isASpare()) {
     return false
   };
   if (this.bowls.length === 2) {
     return true
   };
}

