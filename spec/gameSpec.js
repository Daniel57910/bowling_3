describe("Playing The Game", function() {
  describe("Scoring A Strike", function() {
    beforeEach(function() {
      game = new Game();
    });
    it("increments the strike debt by 2 then decrements strike debt upon adding to strike array", function() {
      spyOn(game, 'incrementStrikeArray');
      game.throwBall(10);
      expect(game.incrementStrikeArray).toHaveBeenCalledWith(10);
    });
    it("adds the strike to the strike array & sets the strike debt", function() {
      game.throwBall(10);
      game.throwBall(10);
      expect(game.strikeDebt).toEqual(2);
      expect(game.bonuses).toEqual([10, 10]);
    });
    it("adds the cumalitive score of three strikes", function() {
      game.throwBall(10);
      game.throwBall(10);
      game.throwBall(10);
      expect(game.score).toEqual(30);
      expect(game.bonuses).toEqual([10, 10]);
    });
    it("adds the cumalitive score of two strikes and the next roll", function() {
      game.throwBall(10);
      game.throwBall(10);
      game.throwBall(8);
      expect(game.score).toEqual(28);
      expect(game.bonuses).toEqual([10, 8]);
    });
  });

  describe("SCORING A SPARE", function() {
    beforeEach(function() {
      game = new Game();
    });
    it("calls the spare checker if a spare is called", function() {
      game.throwBall(5);
      game.throwBall(5);
      expect(game.spareChecker).toEqual(true);
      game.throwBall(3);
      expect(game.score).toEqual(13);
    });
  })

});