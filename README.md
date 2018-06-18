**Bowling Challenge**

The bowling challenge is a weekend challenge set by Makers Academy. Due to my preference for back end logic I have created a console based bowling score calculator.

**Approach To The Project**

There are two classes, a game class and a frame class.

The frame class has a method for adding bowls to the frame. The state of the frame class (complete/incomplete) is determined by methods for determining whether the frame is a strike or has a length of 2. The frame also is able to return whether there is a spare (two bowls === 10).

When calling whether the frame is complete, the total number of frames is passed in as an argument. If the total number is less than 9, then the regular frame evaluator is called. If the frame count is 9, then the final frame calculator is called. This is to account for the fact that the last frame will have 3 rolls if a strike or a spare is called.

The game class has a addBowl method, which sends integers to the frame class.

The integers are then passed through various functions which are triggered by different states of the frame class.

If a strike is confirmed by the frame class, the integer is injected into a bonuses array. A bonus counter is then incremented by 2, and while the bonus counter is > 0 concurrent integers are injected into the array. When the array is at length 3 the sum of the integers is incremented to the score and the score is injected into the score array. The first value in the bonuses array is then removed.

If a spare is confirmed a boolean spare value is set to true. If the boolean is true the subsequent score will be 10 + the next integer. The score is then injected into the scores array.

If a frame is confirmed to be complete then the frame is injected into the frames array, and the frame is reset to represent the beginning of a new frame.

When the frames array has a length of 10 the game is marked as complete. Any attempts to add more bowls will throw an error.

**Work To Be Completed**
* Cover corner cases for users entering non-integers, integers < 0 || integers > 10
* Front end for the application
* Refactoring game class to remove nested conditional statements
* Creation of a score class to manage the scoring of the game and separate the scoring from the game
* More unit and integration testing
* Front End created for the game

**Example Game**

Open SpecRunner.html

Inside the browser console type the following commands

game = new Game()<br/>

game.throwBall(10)<br/>

game.throwBall(10)<br/>

game.throwBall(10)<br/>

game.throwBall(10)<br/>

game.throwBall(10)<br/>

game.throwBall(10)<br/>

game.throwBall(5)<br/>
game.throwBall(5)<br/>

game.throwBall(8)<br/>
game.throwBall(1)<br/>

game.throwBall(10)<br/>

game.throwBall(10)<br/>
game.throwBall(8)<br/>
game.throwBall(2)<br/>

game.allScores
