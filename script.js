let questions = [
    {
        number: 1,
        question: "Excited for this quiz?",
        a: "Nope",
        b: "I'm scared",
        c: "I quit",
        d: "Let's do it",
        correct: 'd'
    },
    {
        number: 2,
        question: "Which of the following is not a real eCommerce platform?",
        a: "Shopify",
        b: "WooCommerce",
        c: "ShopCommerce",
        d: "BigCommerce",
        correct: 'c'
    },
    {
        number: 3,
        question: "If Shopify is so good, why are Shopify developers necessary?",
        a: "To save time on things like setups and migrations",
        b: "To extend the limited design options and functionalities of themes with custom code",
        c: "To provide support with a deep understanding of the platform and its limitations",
        d: "All the above",
        correct: 'd'
    },
    {
        number: 4,
        question: "Which of the following is true about Shopify developers?",
        a: "They are paid extremely well",
        b: "There is a high demand for them",
        c: "They need to know web development, the platform itself, and the liquid template language",
        d: "All the above",
        correct: 'd'
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

//Keep selected answer highlighted
//el.parentElement.parentElement.style.backgroundColor = '#ffc0ad';


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

function getSelected() {
    let ans = '';
    allRadio.forEach((el) => {
        if (el.checked) {
        ans = el.id;
        }
    });
    return ans ? ans : alert('Select an option to proceed');
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