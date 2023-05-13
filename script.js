//[0,1,2]; number: 1, 2, 3; question; correct;
const allAnswer = document.querySelectorAll(".radio");
let question = document.querySelector('.question h3');
let nextButton = document.getElementById('next');
let questionsCounter = 0;
let userAnswers = [];

// let labels = document.querySelectorAll('.radio-label');
// for(let label of labels) {
//     document.body.appendChild(label);
// }

nextButton.addEventListener('click', function(e) {

    if(getSelected() === undefined) {
        return;
    } else {
        userAnswers.push(getSelected())
        document.getElementById('label-a').innerHTML = questions[questionsCounter].a;
        document.getElementById('label-b').innerHTML = questions[questionsCounter].b;
        document.getElementById('label-c').innerHTML = questions[questionsCounter].c;
        document.getElementById('label-d').innerHTML = questions[questionsCounter].d;
        question.innerHTML = questions[questionsCounter].question;
        questionsCounter++;  
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



//   let ans = getSelected();
// if(ans){
//     if (ans === questions[questionsCounter].correct) {
//       correctAnswers.push(true);
//       questionsCounter++;
//     } else {
//       correctAnswers.push(false);
//       questionsCounter++;
//     }}