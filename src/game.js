function Game () {
  this.allFrames = [];
  this.frame = new Frame();
  this.score = 0;
  this.allScores = [];
  this.strikeDebt = 0;
  this.bonuses = []
}

Game.prototype.throwBall = function (pinsKnocked) {
  this.frame.addBowl(pinsKnocked);
  this.checkBonus();
  this.addStrikeBonus(pinsKnocked);
} 

Game.prototype.checkBonus = function() {
  if (this.frame.isAStrike() && this.frame.isComplete(this.allFrames.length)) {
    this.strikeDebt += 2;
  }
}

Game.prototype.addStrikeBonus = function(pinsKnocked) {
  if (this.strikeDebt > 0) {
    this.incrementStrikeArray(pinsKnocked);
    this.strikeDebt -= 1;
  }
}

Game.prototype.incrementStrikeArray = function(pinsKnocked) {
  this.bonuses.push(pinsKnocked);
}

