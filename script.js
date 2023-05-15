let questions = [
    {
        number: 1,
        question: "Excited for this quiz?",
        a: "Nope",
        b: "Let's do it",
        c: "I quit",
        d: "I'm scared",
        correct: "b"
    },
    {
        number: 2,
        question: "Which is true when using reduce without it's optional 2nd argument?",
        a: "The callbackFn's accumulator is initialized to the initialValue argument",
        b: "The callbackFn starts executing with the 1st value in the array as currentValue",
        c: "The callbackFn's accumulator argument is set to the array's 1st value",
        d: "You can run it on an empty array",
        correct: "c"
    },
    {
        number: 3,
        question: "Which of the following values are falsy in JavaScript?",
        a: "{}",
        b: "[]",
        c: "'0'",
        d: "''",
        correct: "d"
    },
    {
        number: 4,
        question: "Which of the following isn't true about Node.js?",
        a: "It can interact with the OS",
        b: "It can manipulate HTML & CSS",
        c: "It can access the local file system",
        d: "It can be run outside of a browser environment",
        correct: "b"
    }
];

let correctAnswers = [];
for (let problem of questions) {
    correctAnswers.push(problem.correct);
}

let questionNumber = document.querySelector('.question p');
let question = document.querySelector('.question h3');
let questionsCounter = 0;
let answerBlock = document.querySelector('.answers');
let answers = document.querySelectorAll('.answer');
let allRadio = document.querySelectorAll(".radio");
let allLabel = document.querySelectorAll(".radio-label");
let userAnswers = [];
let nextButton = document.getElementById('next');
let backButton = document.getElementById('back');
let resetButton = document.getElementById('reset');
let submitInstruction = document.createElement('p');
let scoreDisplay = document.createElement('p');

nextButton.addEventListener('click', function(e) {
    if(getSelected() === undefined) {
        return;
    } else if(questionsCounter === correctAnswers.length) {
        endQuiz();
        return;
    } else {
        userAnswers.push(getSelected());
        questionsCounter++;

        if(questionsCounter === correctAnswers.length) {
            for (let ans of allRadio) {ans.style.display = 'none';}
            for (let label of allLabel) {label.style.display = 'none';}
            nextButton.innerHTML = 'Submit';
            submitInstruction.style.padding = '35px 25px 35px 25px';
            submitInstruction.innerHTML = 'Your quiz is over! Hit submit to see your score.';
            for (let answer of answers) {
                answer.style.display = 'none';
            }
            backButton.remove();
            question.remove();
            questionNumber.remove();
            answerBlock.appendChild(submitInstruction);
        } else {
            questionNumber.innerHTML = questionNumber.innerHTML.slice(0, -1);
            questionNumber.innerHTML += `${questionsCounter + 1}`;
            document.getElementById('label-a').innerHTML = questions[questionsCounter].a;
            document.getElementById('label-b').innerHTML = questions[questionsCounter].b;
            document.getElementById('label-c').innerHTML = questions[questionsCounter].c;
            document.getElementById('label-d').innerHTML = questions[questionsCounter].d;
            question.innerHTML = questions[questionsCounter].question;
        }
    }
})

backButton.addEventListener('click', function() {
    if(questionsCounter === 0) {return;}
    else if(questionsCounter === correctAnswers.length) {return;}
    else {
        userAnswers.pop(); questionsCounter--;
        questionNumber.innerHTML = questionNumber.innerHTML.slice(0, -1);
        questionNumber.innerHTML += `${questionsCounter + 1}`;
        document.getElementById('label-a').innerHTML = questions[questionsCounter].a;
        document.getElementById('label-b').innerHTML = questions[questionsCounter].b;
        document.getElementById('label-c').innerHTML = questions[questionsCounter].c;
        document.getElementById('label-d').innerHTML = questions[questionsCounter].d;
        question.innerHTML = questions[questionsCounter].question;
    }
})

resetButton.addEventListener('click', function() {
    document.location.reload();
})

function getSelected() {
    let ans = '';
    allRadio.forEach((el) => {
        if (el.checked) {
        ans = el.id;
        }
    });
    return ans ? ans : alert('Select an option to proceed.');
}

function endQuiz() {
    document.querySelector('.answers p').style.display = 'none';
    let score = calculateScore();
    nextButton.remove();
    scoreDisplay.innerHTML = `Your score is ${score} out of ${correctAnswers.length}.`;
    scoreDisplay.style.padding = '35px 25px 35px 25px';
    answerBlock.appendChild(scoreDisplay);
}

function calculateScore() {
    let score = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
        if(correctAnswers[i] === userAnswers[i]) {
            score++;
        }
    }
    return score;
}