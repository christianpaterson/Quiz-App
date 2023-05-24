const correctAnswers = [];
for (const problem of questions) {
    correctAnswers.push(problem.correct);
}

const questionNumber = document.querySelector('.question span');
const question = document.querySelector('.question h3');
const lastQuestionWarning = document.querySelector('#warning');
let questionsCounter = 0;
const answerBlock = document.querySelector('.answers');
const answers = document.querySelectorAll('.answer');
const allRadio = document.querySelectorAll(".radio");
const allLabel = document.querySelectorAll(".radio-label");
const userAnswers = [];
const nextButton = document.getElementById('next');
const backButton = document.getElementById('back');
const resetButton = document.getElementById('reset');
const submitInstruction = document.createElement('p');
const scoreDisplay = document.createElement('p');

backButton.style.display = "none";
resetButton.style.display = "none";

nextButton.addEventListener('click', function(e) {
    if(getSelected() === undefined) {
        return;
    } else if(questionsCounter === correctAnswers.length) {
        endQuiz();
        return;
    } else {
        if(questionsCounter === correctAnswers.length - 2) {
            nextButton.innerHTML = 'Submit';
            lastQuestionWarning.style.float = "right";
            lastQuestionWarning.innerHTML = "Last Question!";
            lastQuestionWarning.style.color = "crimson";
            lastQuestionWarning.style.fontSize = "18px";
        }
        userAnswers.push(getSelected());
        questionsCounter++;
        backButton.style.display = "inline";
        if(questionsCounter === correctAnswers.length) {
            lastQuestionWarning.style.display = "none";
            nextButton.innerHTML = 'Reveal';
            for (let ans of allRadio) {ans.style.display = 'none';}
            for (let label of allLabel) {label.style.display = 'none';}
            submitInstruction.style.padding = '35px 25px 35px 25px';
            submitInstruction.innerHTML = 'Your quiz is over! Hit reveal to see your score.';
            for (let answer of answers) {
                answer.style.display = 'none';
            }
            backButton.remove();
            question.remove();
            questionNumber.remove();
            answerBlock.appendChild(submitInstruction);
        } else {
            for (let ans of allRadio) {ans.checked = false;}
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
    for (let ans of allRadio) {ans.checked = false;}

    if(questionsCounter === correctAnswers.length) {return;}
    else {
        if(questionsCounter === 1) {
            backButton.style.display = "none";
        }
        if(questionsCounter === correctAnswers.length - 1) {
            lastQuestionWarning.style.display = "none";
            nextButton.innerHTML = 'Next';
            questionNumber.innerHTML = questionNumber.innerHTML.slice(0, -1);
        }
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
    nextButton.remove();
    resetButton.style.display = "inline";
    document.querySelector('.answers p').style.display = 'none';
    let score = calculateScore();
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