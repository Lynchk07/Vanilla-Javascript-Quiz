const startButton =document.getElementById('start-b')
const questContainerEl= document.getElementById ('questions-container')
const questionEl = document.getElementById ('quiz-question')
const optionButton = document.getElementById('answerbuttons')


let questionIndex


//Start button click  function and timer
startButton.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('Start')
    startButton.classList.add('hide')
    randomQuestion = question.sort(() => Math.random()-.5)
    questionIndex = [0]
    questContainerEl.classList.remove('hide')
    startNextQuestion()
    startNextQuestionTIMER()

}

function startNextQuestionTIMER (){
    var count=20
    var interval = setInterval(function(){
        document.getElementById('count').innerHTML = count
       count--

        if(count === 0){
            clearInterval(interval);
            document.getElementById('count').innerHTML = "Completed!"
            alert("Out of time!")
         }
}, 1000);  
}

function startNextQuestion (){
    showQuestion(randomQuestion[questionIndex])

}

function populateQuestion (question){
    questionEl.innerText = questions.question

}

// function pickAnswer(){

// }

const questions = [
    {question:"Commonly used data types DO not include.",
    options:
    ["a.booleans","b. Strings", "c. Alerts","d. Numbers"],
    answer:"a"},

    {question:"Which of the following methods is used to access HTML elements using javascript?",
    options:["a. getElementbyid()","b. getElementByTomorrow()", "c. getItStarted()","d. getIT()"],
    answer:"a"},

    {question:"The condition in an if/else statement is enclosed with?",
    options:
    ["a. quotes","b. curly brackets", "c. parenthesis","d. square brackets"],
    answer:"b"},

    {question:"Which of the following keywords is used to define a variable in Javascript?",
    options:
    ["a. var","b. let", "c. const","d. all the above"],
    answer:"d"},
]