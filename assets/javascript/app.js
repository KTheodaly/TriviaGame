//start quiz
//answer you click needs to compare to correct answer
//if right, add to correct answers
//add a 90 second timer that tallies results at 0
//on click event to tally results for submit answers

(function() {
    function buildQuiz() {
      const output = [];
  
      myQuestions.forEach((currentQuestion, questionNumber) => {
       
        const answers = [];
        
        for (letter in currentQuestion.answers) {
          
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
      });
  
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      let numCorrect = 0;
  
      myQuestions.forEach((currentQuestion, questionNumber) => {
        
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct add to correct tally
        if (userAnswer === currentQuestion.correctAnswer) {
          numCorrect++;
  
          // display it green
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // otherwise make it red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total questions
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
      {
        question: "Which dinosaur is the most deadly canivore?",
        answers: {
          a: "Spinosaurus",
          b: "Allosaurus",
          c: "Velociraptor"
        },
        correctAnswer: "a"
      },
      {
        question: "Which dinosaur can run the fastest?",
        answers: {
          a: "Plateosaurus",
          b: "Pterosaurs",
          c: "Dromiceiomimus",
        },
        correctAnswer: "c"
      },
      {
        question: "Which dinosaur has spikes?",
        answers: {
          a: "Brachiosaurus",
          b: "Stegosaurus",
          c: "Giganotosaurus"
        },
        correctAnswer: "b"
      },
      {
        question: "Which dinosaur is a herbivore?",
        answers: {
          a: "Albertosaurus",
          b: "Sigilmassasaurus",
          c: "Parvicursor"
        },
        correctAnswer: "a"
      },
      {
        question: "Which dinosaur did not have feathers?",
        answers: {
          a: "Microraptor",
          b: "Avimimus",
          c: "Tyrannosaurus Rex"
          
        },
        correctAnswer: "c"
      }
    ];
  
    // build the quiz on load
    buildQuiz();

    //if timer runs out display results

    $("<div id='timer'>")

    var number = 90;
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
        showResults ();
    };

    run();

  
    // on click of submit show results
    submitButton.addEventListener("click", showResults);
  })();