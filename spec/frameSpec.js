describe("Frame", function() {
  describe("Beginning of a new frame", function() {
     beforeEach(function () {
       testFrame = new Frame();
       completeFrame = new Frame();
       incompleteFrame = new Frame();
     });
    it("begins with an empty frame and is !isComplete", function() {
      expect(testFrame.bowls).toEqual([]);
      expect(testFrame.isComplete(0)).toEqual(false);
    });
    it("returns complete for a strike that's not the final frame", function() {
      completeFrame.addBowl(10);
      expect(completeFrame.isComplete(3)).toEqual(true);
    });
    it("returns false if the frame is not complete", function() {
      incompleteFrame.addBowl(8);
      expect(incompleteFrame.isComplete(6)).toEqual(false);
    });
    it("returns true if the frame is complete", function() {
      completeFrame.addBowl(6);
      completeFrame.addBowl(3);
     expect(completeFrame.isComplete(6)).toEqual(true);
    });


  });

});