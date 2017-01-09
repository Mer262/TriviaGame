// * You'll create a trivia game that shows only one question until
// 	the player answers it or their time runs out.

// * If the player selects the correct answer, show a screen congratulating
// 	them for choosing the right option. After a few seconds, display the
// 	next question -- do this without user input.

// * The scenario is similar for wrong answers and time-outs.

// * If the player runs out of time, tell the player that time's up and
// 	display the correct answer. Wait a few seconds, then show the next question.

// * If the player chooses the wrong answer, tell the player they selected
// 	the wrong option and then display the correct answer. Wait a few seconds,
// 	then show the next question.

// * On the final screen, show the number of correct answers, incorrect
// answers, and an option to restart the game (without reloading the page).

// Trivia Questions:

// What words are typically used to describe the song of the Easter Towhee?
// Correct: "Drink your tea!"
// "Peter! Peter! Peter!"
// "Tea kettle! Tea kettle! Tea kettle!"
// "Teacher! Teacher! Teacher!"

// What name is typically used to describe the song of the Tufted Titmouse?
// Correct: "Peter! Peter! Peter!"
// "Tea kettle! Tea kettle! Tea kettle!"
// "Allen! Allen! Allen!"
// "Steve! Steve! Steve!"

// What is the song of the Black and White Warbler frequently compared to?
// Correct: the sound of a squeaky wheel
// a foghorn
// the old Nextel "push-to-talk" chime
// a trainwhistle

// What word(s) is typically used to describe the most well-known call of the Blue Jay?
// Correct: Thief
// Popsicle
// Dinosaur
// Tea Kettle

// Which mimic usually repeats each "phrase" of its song 3 times?
// Correct: Northern Mockingbird
// Three-Toed Sloth
// Brown Thrasher
// Catbird

// Which mimic usually repeats each "phrase" of its song 2 times?
// Correct: Brown Thrasher
// Northern Mockingbird
// Catbird
// 2-lined salamander

// Which bird of prey was previously known as the Marsh Hawk?
// Correct: Northern Harrier
// Red-Tailed Hawk
// Red-Shouldered Hawk
// Bald Eagle

// What words are typically used to describe the song of the Carolina Wren?
// Correct: "Tea kettle! Tea kettle! Tea kettle!"
// "Peter! Peter! Peter!"
// "Drink your tea!"
// "Teacher! Teacher! Teacher!"

// Which southeastern bird is sometimes referred to as a "snow bird?"
// Correct: Dark-Eyed Junco
// Red-Tailed Hawk
// Northern Mockingbird
// Carolina Wren

// Which bird's song is often compared to the phrase "Oh sweet Canada?"
// Correct: White-Throated Sparrow
// Northern Mockingbird
// Carolina Wren
// Eastern Towhee

// The Carolina Chickadee is a common feeder bird that is easily distinguished by its...
// Correct: black cap and throat
// golden hood
// red throat
// white wing bars

// This is the state bird of North Carolina.
// Correct: Northern Cardinal
// Red-Tailed Hawk
// White-Throated Sparrow
// Carolina Chicadee


$(document).ready(function() {



    //  Set our number counter to 20.
    var countdown = 20;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  When the stop button gets clicked, run the stop function.
    // $("#stop").on("click", stop);

    //  When the resume button gets clicked, execute the run function.
    // $("#resume").on("click", run);

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function runtimer() {
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function that decreases number by 1.
    function decrement() {
      countdown--;

      //  Show the number in the #show-number tag.
      $("#countdown").html("<h2>" + countdown + "</h2>");

      //  Once number hits zero, run stop function.
      if (countdown === 0) {
        stop();
        //  Alert the user that time is up.
      }
    }
    //  The stop function
    function stop() {
      clearInterval(intervalId);
    }

    function displayDiv() {
    	document.getElementById("hiddenDiv").style.display = "block";
    }

    function hideStart() {
    	document.getElementById("startGame").style.display = "none";
    }

    // After clicking Start button, display div with question
    $("#startGame").on("click", displayDiv);
    // After clicking Start button, hide Start button
    $("#startGame").on("click", hideStart);

	runtimer();




});
