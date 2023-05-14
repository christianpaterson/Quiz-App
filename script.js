//[0,1,2]; number: 1, 2, 3; question; correct;
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


let question = document.querySelector('.question h3');
let questionsCounter = 0;
const allAnswer = document.querySelectorAll(".radio");
let answerBlock = document.querySelector('.answers');
let userAnswers = [];
let nextButton = document.getElementById('next');
let backButton = document.getElementById('back');
let resetButton = document.getElementById('reset');
let submitCommand = document.createElement('p');
let scoreDisplay = document.createElement('p');


backButton.addEventListener('click', function() {
    if(questionsCounter === 0) {return;}
    else if(questionsCounter === correctAnswers.length) {backButton.style.display = 'none';}
    else {
        userAnswers.pop(); questionsCounter--;
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
        //alert(`You selected: ${userAnswers} and ${correctAnswers} were correct.`);
        endQuiz();
        return;
    } else {
        userAnswers.push(getSelected());
        questionsCounter++;

        if(questionsCounter === correctAnswers.length) {
            document.getElementById('a').style.display = 'none';
            document.getElementById('b').style.display = 'none';
            document.getElementById('c').style.display = 'none';
            document.getElementById('d').style.display = 'none';
            document.getElementById('label-a').style.display = 'none';
            document.getElementById('label-b').style.display = 'none';
            document.getElementById('label-c').style.display = 'none';
            document.getElementById('label-d').style.display = 'none';
            answerBlock.appendChild(submitCommand);
            submitCommand.innerHTML = 'Quiz is over! Hit submit to see your score';
            submitCommand.style.padding = '0px 0px 35px 25px';
            nextButton.innerHTML = 'Submit';
        } else {
            document.getElementById('label-a').innerHTML = questions[questionsCounter].a;
            document.getElementById('label-b').innerHTML = questions[questionsCounter].b;
            document.getElementById('label-c').innerHTML = questions[questionsCounter].c;
            document.getElementById('label-d').innerHTML = questions[questionsCounter].d;
            question.innerHTML = questions[questionsCounter].question;
        }
    }
})

const getSelected = function () {
    let ans = '';
    allAnswer.forEach((el) => {
        if (el.checked) {
        ans = el.id;
        }
    });
    return ans ? ans : alert('Select an option to proceed');
}

const endQuiz = function () {
    document.querySelector('.answers p').style.display = 'none';
    let score = calculateScore();
    scoreDisplay.innerHTML = `Your score is ${score} out of ${correctAnswers.length}.`;
    scoreDisplay.style.padding = '0px 0px 35px 25px';
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