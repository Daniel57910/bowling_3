function Game () {
  this.allFrames = [];
  this.frame = new Frame();
  this.score = 0;
  this.allScores = [];
  this.strikeDebt = 0;
  this.bonuses = []
  this.spareChecker = false;
}

Game.prototype.throwBall = function (pinsKnocked) {

  if (this.allFrames.length === 10) {
    throw "GAME IS COMPLETE";
  }

  this.frame.addBowl(pinsKnocked);

  if (this.spareChecker && this.allFrames.length < 9) {
    this.score += 10 + pinsKnocked;
    this.allScores.push(this.score);
    this.spareChecker = false;
  }

  this.checkBonus();
  this.addStrikeBonus(pinsKnocked);
  this.addStrikeDebt();
  
  if (this.frame.isComplete(this.allFrames.length)) {
    console.log(this.score);
    console.log(this.allScores);
    this.allFrames.push(this.frame.bowls);
    if (this.allFrames.length === 10) {
      this.spareChecker = false;
      this.strikeDebt = 0;
    }
    if (this.spareChecker === false && this.strikeDebt === 0) {
      console.log(game.frame.bowls);
      console.log("FRAME LENGTH");
      console.log(this.frame.bowls)
      this.score += this.getTheScore(this.frame.bowls);
      this.allScores.push(this.score);
    }
    this.frame.reset();
  }
  
} 

Game.prototype.checkBonus = function() {
  if (this.frame.isAStrike() || this.frame.isComplete(this.allFrames.length)) {
    this.strikeDebt += 2;
  }

  if (this.frame.isASpare()) {
    this.spareChecker = true;
  }
}

Game.prototype.addStrikeBonus = function(pinsKnocked) {

  if (this.allFrames.length === 9) {
    if (pinsKnocked === 10) {
      this.strikeDebt += 2;
    }
  }
  if (this.strikeDebt > 0) {
    this.incrementStrikeArray(pinsKnocked);
    this.strikeDebt -= 1;
  }
}

Game.prototype.incrementStrikeArray = function(pinsKnocked) {
  this.bonuses.push(pinsKnocked);
}

Game.prototype.addStrikeDebt = function() {
  if (this.bonuses.length === 3 && this.allScores.length != 9) {
    this.score += this.getTheScore(this.bonuses);
    this.allScores.push(this.score);
    this.bonuses.shift();
  }

  if (this.checkBonusArray()) {
    this.strikeDebt = 0;
    this.bonuses = [];
  }
}

Game.prototype.getTheScore = function(scoreArray) {
  return scoreArray.reduce((a, b) => a + b);
}

Game.prototype.checkBonusArray = function() {
  return this.bonuses[0] != 10;
}

Game.prototype.resetBonuses = function() {
  this.bonuses = [];
  this.strikeDebt = 0;
}
