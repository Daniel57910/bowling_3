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
  this.frame.addBowl(pinsKnocked);

  if (this.spareChecker) {
    this.score += 10 + pinsKnocked;
    this.allScores.push(this.score);
    this.spareChecker = false;
  }

  this.checkBonus();
  this.addStrikeBonus(pinsKnocked);
  this.addStrikeDebt();
  
  if (this.frame.isComplete(this.allFrames.length)) {
    this.allFrames.push(this.frame.bowls);
    if (this.spareChecker === false && this.strikeDebt === 0) {
      this.score += this.frame.bowls[0] + this.frame.bowls[1];
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
  if (this.bonuses.length === 3) {
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


game = new Game()

game.throwBall(10)

game.throwBall(10)

game.throwBall(10)

game.throwBall(7)
game.throwBall(2)

game.throwBall(6)
game.throwBall(3)

game.throwBall(10)

game.throwBall(10)

game.throwBall(10)

game.throwBall(5)
game.throwBall(3)

game.throwBall(10)
game.throwBall(10)
game.throwBall(10)