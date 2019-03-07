//start quiz needs to make body box visible
//answer you click needs to compare to correct answer
//if right, add to correct answers
//add a one minute timer that tallies results at 0
//on click event to tally results for submit answers
// $(document).ready(function () {

//     alert('Welcome to DINO TRIVIA! Choose the correct answers for the best score.');

// });

//set variables
var correct = 0;
var incorrect = 0;

//if the right answer selected, adjust tally


if (document.getElementById('right1').checked) {
    correct++;
}
else {
    incorrect++;
    console.log();
};
if (document.getElementById('right2').checked) {
    correct++;
}
else {
    incorrect++;
    console.log();
};
if (document.getElementById('right3').checked) {
    correct++;
}
else {
    incorrect++;
    console.log();
};
if (document.getElementById('right4').checked) {
    correct++;
}
else {
    incorrect++;
    console.log();
};
if (document.getElementById('right5').checked) {
    correct++;
}
else {
    incorrect++;
    console.log();
};

//timer

$("<div id='timer'>")

var number = 120;
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

        alert("Time Up! Check your score");
    }
}

function stop() {

    clearInterval(intervalId);
}

run();


