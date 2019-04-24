//start quiz
//answer you click needs to compare to correct answer
//if right, add to correct answers
//add a 90 second timer that tallies results at 0
//on click event to tally results for submit answers

$(document).ready(function () {
    
    $("#results").empty();

    $("<div id='timer'>")

    var number = 30;
    var intervalId;

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        number--;

        $("#timer").html("<h2>" + number + "</h2>");

        if (number === 0) {

            stop();
        }
    }

    function stop() {

        clearInterval(intervalId);
        score ();
    };

    run();

    function score() {

        //set variables
        var correct = 0;
        var incorrect = 0;

        //if the right answer selected, adjust tally


        if (document.getElementsByName('optradio').checked) {
            correct++;
        } else {
            incorrect++;
            console.log();
        };
        if (document.getElementsByName('optradio5').checked) {
            correct++;
        } else {
            incorrect++;
            console.log();
        };
        if (document.getElementsByName('optradio9').checked) {
            correct++;
        } else {
            incorrect++;
            console.log();
        };
        if (document.getElementsByName('optradio10').checked) {
            correct++;
        } else {
            incorrect++;
            console.log();
        };
        if (document.getElementsByName('optradio14').checked) {
            correct++;
        } else {
            incorrect++;
            console.log();
        };

        $("#results").append("correct answers: " + correct + "\n" ,"incorrect answers: "+ incorrect);

       // $("question").hide(1000);

    };

    score();


    // $("#submit").click(function () {
    //     stop();

    //     score();
    // });
});