// const Question=document.querySelector('#que')
// const points=``
// const option=document.querySelector('#radios')
// const myquestions=[{
//     question:"who invented java script",answers:{
//         a:"douglas crockford",
//         b:"sheryl sandberg",
//         c:"brendan eich"
//     },correctanswer:"c"
// },{
//     question:"which of these are javascript package manager",answer:{
//         a:"pip",
//         b:"npm",
//         c:"ng"
//     },correctanswer:"b"
// },{
//     question:"which tag is used to style in css internally",answers:{
//         a:"<style>",
//         b:"<script>",
//         c:"<css>"
//     },correctanswer:"a"
// }]
// function quiz(){
//     for(con in myquestions){
//         Question.innerHTML=`hello`
//     }

// }
(function(){
    // Functions
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  
      
      if(numCorrect==10){
        cardz=document.querySelector(".card-body")
        cardz.innerHTML=`<img src="https://i.pinimg.com/originals/cf/50/6d/cf506d6998d68de01e9171f30fc4e287.gif">
        <h5><b>You are aresome you Got full points ${numCorrect} out of ${myQuestions.length}</b></h5>
        `
        quiz.innerHTML=`You are aresome you Got full points ${numCorrect} out of ${myQuestions.length}`
      }
      else{
        cardz=document.querySelector(".card-body")
        cardz.innerHTML=`<img src="https://i.pinimg.com/originals/cf/50/6d/cf506d6998d68de01e9171f30fc4e287.gif">
        <h5><b> you Got  ${numCorrect}  points please refresh page to Try Again</b></h5>`

      }
    
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
      
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
     
      {
        question: "which tag is represent for inernal css",
        answers:{
          a: "style",
          b: "script",
          c: "head",
          d:"title"
          
        },
        correctAnswer: "a"
      },{
        question: "which tag is represent to internal javscript",
        answers:{
          a:"style",
          b:"title",
          c:"script",
          d:"body"
        },
        correctAnswer:"c"
      },
      {
        question:"which one is the javascript frame work",
        answers:{
          a:"Django",
          b:"Asp.Net",
          c:"Expressjs",
          d:"php"
        },
        correctAnswer:"c"
      },{
        question:"which storage is used to store data in webbrouser",
        answers:{
          a:"localstorage",
          b:"mongoDB",
          c:"xampp",
          d:"sqllite"
        },
        correctAnswer:"a"
      },{
        question:"which one is the java script extention",
        answers:{
          a:".js",
          b:".py",
          c:".php",
          d:".css"
        },
        correctAnswer:"a"
      },{
        question:"which one is the typescript extention",
        answers:{
          a:".js",
          b:".ts",
          c:".php",
          d:".css"
        },
        correctAnswer:"b"
      }
      ,{
        question:"javascript frontend library are",
        answers:{
          a:"Angular",
          b:"react",
          c:"vuejs",
          d:"above all"
        },
        correctAnswer:"d"
      }, {
        question: "Who invented JavaScript?",
        answers: {
          a: "Douglas Crockford",
          b: "Sheryl Sandberg",
          c: "Brendan Eich"
        },
        correctAnswer: "c"
      },
      {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
          a: "Node.js",
          b: "TypeScript",
          c: "npm"
        },
        correctAnswer: "c"
      },
      {
        question: "Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint"
        },
        correctAnswer: "d"
      },
      
    ];
  
    // Kick things off
    buildQuiz();
  
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
   
  })();
  