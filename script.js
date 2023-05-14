//[0,1,2]; number: 1, 2, 3; question; correct;
const allAnswer = document.querySelectorAll(".radio");
let question = document.querySelector('.question h3');
let nextButton = document.getElementById('next');
let questionsCounter = 0;
let userAnswers = [];

nextButton.addEventListener('click', function(e) {
    if(getSelected() === undefined) {
        return;
    } else {
        userAnswers.push(getSelected());
        questionsCounter++;
        document.getElementById('label-a').innerHTML = questions[questionsCounter].a;
        document.getElementById('label-b').innerHTML = questions[questionsCounter].b;
        document.getElementById('label-c').innerHTML = questions[questionsCounter].c;
        document.getElementById('label-d').innerHTML = questions[questionsCounter].d;
        question.innerHTML = questions[questionsCounter].question;
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