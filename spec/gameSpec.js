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
  });

});