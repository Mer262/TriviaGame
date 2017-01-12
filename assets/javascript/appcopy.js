// * You'll create a trivia game that shows only one question until
//  the player answers it or their time runs out.

// * If the player selects the correct answer, show a screen congratulating
//  them for choosing the right option. After a few seconds, display the
//  next question -- do this without user input.

// * The scenario is similar for wrong answers and time-outs.

// * If the player runs out of time, tell the player that time's up and
//  display the correct answer. Wait a few seconds, then show the next question.

// * If the player chooses the wrong answer, tell the player they selected
//  the wrong option and then display the correct answer. Wait a few seconds,
//  then show the next question.

// * On the final screen, show the number of correct answers, incorrect
// answers, and an option to restart the game (without reloading the page).


$(document).ready(function() {

    var questions = [{
            question: "What words are typically used to describe the song of the Eastern Towhee?",
            choices: ["Drink your tea!", "Peter! Peter! Peter!", "Tea kettle!", "Teacher! Teacher!"],
            answer: 0,
            img: "assets/images/eastern_towhee.jpg"
        },

        {
            question: "What name is typically used to describe the song of the Tufted Titmouse?",
            choices: ["Allen! Allen! Allen!", "Steve! Steve! Steve!", "Tea kettle!", "Peter! Peter! Peter!"],
            answer: 3,
            img: "assets/images/tufted_titmouse.jpg"
        },

        {
            question: "What is the song of the Black and White Warbler frequently compared to?",
            choices: ["a trainwhistle", "the old Nextel push-to-talk chime", "the sound of a squeaky wheel", "a foghorn"],
            answer: 2,
            img: "assets/images/black_and_white_warbler.jpg"
        },

        {
            question: "What word(s) is typically used to describe the most well-known call of the Blue Jay?",
            choices: ["Popsicle", "Thief", "Dinosaur", "Tea Kettle"],
            answer: 1,
            img: "assets/images/blue_jay.jpg"
        },

        {
            question: "Which mimic usually repeats each phrase of its song 3 times?",
            choices: ["Three-Toed Sloth", "Brown Thrasher", "Northern Mockingbird", "Catbird"],
            answer: 2,
            img: "assets/images/northern_mockingbird.jpg"
        },

        {
            question: "Which bird of prey was previously known as the Marsh Hawk?",
            choices: ["Bald Eagle", "Northern Harrier", "Red-Tailed Hawk", "Red-Shouldered Hawk"],
            answer: 1,
            img: "assets/images/northern_harrier.jpg"
        },

        {
            question: "Which mimic usually repeats each phrase of its song 2 times?",
            choices: ["Brown Thrasher", "Northern Mockingbird", "Catbird", "Two-Lined Salamander"],
            answer: 0,
            img: "assets/images/brown_thrasher.jpg"
        },

        {
            question: "What words are typically used to describe the song of the Carolina Wren?",
            choices: ["Peter! Peter!", "Drink your tea!", "Tea kettle! Tea kettle! Tea kettle!", "Teacher! Teacher! Teacher!"],
            answer: 2,
            img: "assets/images/carolina_wren.jpg"
        },

        {
            question: "Which southeastern bird is sometimes referred to as a snow bird?",
            choices: ["Carolina Wren", "Red-Tailed Hawk", "Northern Mockingbird", "Dark-Eyed Junco"],
            answer: 3,
            img: "assets/images/dark_eyed_junco.jpg"
        },

        {
            question: "Which bird's song is often compared to the phrase - Oh sweet Canada?",
            choices: ["White-Throated Sparrow", "Northern Mockingbird", "Carolina Wren", "Eastern Towhee"],
            answer: 0,
            img: "assets/images/white_throated_sparrow.jpg"
        },

        {
            question: "The Carolina Chickadee is a common feeder bird that is easily distinguished by its...",
            choices: ["white wing bars", "golden hood", "black cap and throat", "red throat"],
            answer: 2,
            img: "assets/images/carolina_chickadee.jpg"
        },

        {
            question: "This is the state bird of North Carolina.",
            choices: ["Carolina Chicadee", "Red-Tailed Hawk", "White-Throated Sparrow", "Northern Cardinal"],
            answer: 3,
            img: "assets/images/northern_cardinal.jpg"
        }
    ];

    var numberCorrect = 0;
    var numberIncorrect = 0;
    var unanswered = 0;
    var thisQuestion;
    var answered;
    var storeAnswer;
    var birdPhoto;
    var answerDisplay;
    var currentQuestion = 0;

    //  Set our number counter to 16.
    var countdown = 16;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    // var timerObj = {
    //  timer: 16,
    //  timerRunning: false,
    //  countDownTimer: ''
    // }




    //starts the timer and checks to see if it's already running
    //*********************************************
    // function startTimer(){
    //      if(timerObj.timerRunning){return;}
    //          timerObj.countDownTimer = setInterval(decrement, 1000);
    //          timerObj.timerRunning = true;
    // }
    //***********************************************
    //function to run the interval and check if you're out of time on the current question
    // function decrement(){
    //      timerObj.timer--;
    //      (document.getElementById('currentTime')).innerHTML = timerObj.timer;
    //    }


    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function runtimer() {
        intervalId = setInterval(decrement, 1000);
    };

    //  The decrement function that decreases number by 1.
    function decrement() {
        countdown--;
        //  Show the number in the #show-number tag.
        $("#countdown").text("Time Remaining: " + countdown);
        //  Once number hits zero, run stop function.
        //**************
        if (countdown === 0) {
            stopTimer();
            clearDisplay();


            $("#response").text("Time is up! The correct answer was " + answerDisplay + ".");
            unanswered++;
            console.log("Unanswered questions: " + numberIncorrect)
                // $("#hiddenDiv").append("<br>")
                // $("#hiddenDiv").append("<br>")
            $("#birdie").prepend("<img src=" + '"' + birdPhoto + '"' + " >");
            
            currentQuestion++;
            if (currentQuestion >= questions.length) {
                displayResults();
            } else {
                resetTimer();
                displayDiv();
            }

            //      break out, show results
            //    endif   
            //    displayQuestion 
            //**************
            //     //  Alert the user that time is up.
        }
    };


    //  The stop function
    function stopTimer() {
        clearInterval(intervalId);
    };

    function resetTimer() {
        countdown = 16;
    };

    // function setDelay(i) {
    //     setTimeout(function() {
    //     console.log(i);
    //     }, 6000);
    // }

    // function waitForIt() {
    //     var pause = setTimeout(function() {}, 200000);
    // }

    //condition to check if out of time
    //******************************
    //    if(countdown === 0){
    //        resetTimer();
    //        stopTimer();   
    // }
    //******************************
    function displayResults() {
        $("#hiddenDiv").css("display", "none");
        $("#results-panel").css("display", "block");
        $("#correct-answers").text("Correct Answers: " + numberCorrect);
        $("#incorrect-answers").text("Incorrect Answers:" + numberIncorrect);
        $("#unanswered").text("Unanswered Questions: " + unanswered);
    };

    function clearDisplay() {
        $("#the-question").empty();
        $("#option-0").empty();
        $("#option-1").empty();
        $("#option-2").empty();
        $("#option-3").empty();
        $("#response").empty();
        $("#hiddenDiv").css("display", "none");
    };

    function displayDiv() {
        $("#hiddenDiv").css("display", "block");
        postQuestions()
    };

    function postQuestions() {

        thisQuestion = questions[currentQuestion].question;
        storeAnswer = questions[currentQuestion].answer;
        console.log("The storeAnswer is " + storeAnswer);
        answered = "option-" + questions[currentQuestion].answer;
        console.log("Answer is: " + answered)
        birdPhoto = questions[currentQuestion].img;
        console.log("birdPhoto: " + birdPhoto);
        answerDisplay = questions[currentQuestion].choices[storeAnswer];
        console.log("answerDisplay: " + answerDisplay);

        $("#the-question").text(thisQuestion);

        $("#option-0").text(questions[currentQuestion].choices[0]);
        $("#option-1").text(questions[currentQuestion].choices[1]);
        $("#option-2").text(questions[currentQuestion].choices[2]);
        $("#option-3").text(questions[currentQuestion].choices[3]);
        runtimer();
    };
    //   timeLeftForQuestion = 30
    //     setInterval(..1000)
    //       timeLeftForQuestion--
    //       if (tlfq <= 0)
    //         // clear interval

    // if (countdown === 0) {
    //     stopTimer();
    //     $("#hiddenDiv").empty();

    //     $("#hiddenDiv").text("Time is up! The correct answer was " + answerDisplay + ".");
    //     numberIncorrect++;
    //     console.log("numberIncorrect: " + numberIncorrect)
    //     $("#hiddenDiv").append("<br>")
    //     $("#hiddenDiv").append("<br>")
    //     $("#hiddenDiv").append("<img src=" + '"' + birdPhoto + '"' + " >");
    // }; 



    $(".choice").click(function(event) {
        console.log(event.target.getAttribute("id"));

        var getId = event.target.getAttribute("id");
        if (getId == answered) {
            stopTimer();
            clearDisplay();

            $("#response").text("That's correct! The answer was " + answerDisplay + ".");
            numberCorrect++;
            console.log("numberCorrect: " + numberCorrect)
                // $("#hiddenDiv").append("<br>")
                // $("#hiddenDiv").append("<br>")
            $("#birdie").prepend("<img src=" + '"' + birdPhoto + '"' + " >");
            currentQuestion++;
            if (currentQuestion >= questions.length) {
                displayResults();
            } else {
                resetTimer();
                displayDiv();
            };


        } else if (getId != answered) {
            stopTimer();
            clearDisplay();

            $("#response").text("Sorry! The correct answer was " + answerDisplay + ".");
            numberIncorrect++;
            console.log("numberIncorrect: " + numberIncorrect)
                // $("#hiddenDiv").append("<br>")
                // $("#hiddenDiv").append("<br>")
            $("#birdie").prepend("<img src=" + '"' + birdPhoto + '"' + " >");
            currentQuestion++;
            if (currentQuestion >= questions.length) {
                displayResults();
            } else {
                resetTimer();
                displayDiv();
            };
        }
    });








//   thisQuestion
//     getQuestion[currentQuestion]
//     timeLeftForQuestion = 30
//     setInterval(..1000)
//       timeLeftForQuestion--
//       if (tlfq <= 0)
//         // clear interval
//         // do times up code
//       endif

//  questionGuessed
//    stopInterval
//    reset timeLeftForQuestion = 30
//    currentQuestion++
//    if (currentQuestion >=questions.length)
//      break out, show results
//    endif   
//    displayQuestion 












// }

function hideStart() {
    $("#startGame").css("display", "none");
};





// After clicking Start button, display div with question
$("#startGame").on("click", displayDiv);
// After clicking Start button, hide Start button
$("#startGame").on("click", hideStart);

// runtimer();






});
