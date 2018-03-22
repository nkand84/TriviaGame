$(document).ready(function () {
  stop();
  // when page loads show start button and hide main-div,finish button and result
  $('#main-div').hide();
  $("#finish").hide();
  $('#result').hide();
  // when start button is clicked
  $('#start-game').click(function () {
     // hide the start button
    $('#start-game').hide();
    // show the main div
    $('#main-div').show();
    //show finish button
    $("#finish").show();
    //hide the result
    $('#result').hide();
  });
  // when finish button is clicked 
  $('#finish').click(function () {
    //stop the interval timer
    stop();
    //hide start button, finish button and main div 
    $('#start-game').hide();
    $('#main-div').hide();
    $("#finish").hide();
    //show result
    $("#result").show();
  });
  //timer 
  function run() {
    intervalId = setInterval(decrement, 1000); // running the decrement function every 1sec
  }
  function decrement() {
    number--;
    $("#timer").text(number);
    if (number === 0) {
      stop();
      alert("Time Up!");
      // hide main div
      $("#main-div").hide();
      //calling the validate function 
      validate();
      $("#finish").hide();
      $("#result").show();
    }
  }
  function stop(){
    clearInterval(intervalId);
  }
  run();
  //declaring variables
  var correct, incorrect, unanswered;
  correct = 0;
  incorrect = 0;
  unanswered = 0;
  var number = 60;
  var intervalId;
  //defining objects
  var questions = [
    { question: "1", answer: "B" },
    { question: "2", answer: "C" },
    { question: "3", answer: "B" },
    { question: "4", answer: "B" },
    { question: "5", answer: "C" },
    { question: "6", answer: "B" }
  ];

  var finalArray = [];
  $("#finish").click(function () {
    validate();
  });
  function validate() {
    //Loop over all questoins
    $(".form-page").each(function () {
      var questionId = $(this).attr("id");
      console.log(this);
      var answer = $("input[name='option']:checked", $(this)).val();
      if (answer !== undefined) {
        finalArray.push({
          question: questionId,
          answer: answer
        });
      }
      else {
        finalArray.push({
          question: questionId,
          answer: "empty"
        });
      }
    });
    console.log(finalArray);
    console.log(questions.length, finalArray.length);
    for (var i = 0; i < questions.length; i++) {
      if (finalArray[i].answer == "empty") {
        unanswered++;
        console.log("unanswered value is " + unanswered);
      }
      else if (questions[i].answer == finalArray[i].answer) {
        correct++;
        console.log("correct value is " + correct);
      }
      else if (questions[i].answer != finalArray[i].answer) {
        incorrect++;
        console.log("uncorrect value is " + incorrect);
      }
    }

    $("#result").append("<p>" + "correct: " + correct + "</p>");
    $("#result").append("<p>" + "unanswered: " + unanswered + "</p>");
    $("#result").append("<p>" + "incorrect: " + incorrect + "</p>");

  }


});

