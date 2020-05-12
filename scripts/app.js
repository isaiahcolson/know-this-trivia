/* const question1 = {
    question: 'Who is this?',
    image: 'images/test.png',
    optionA: 'A. Martha Stewart',
    optionB: 'B. Mr. Poopybutthole',
    optionC: 'C. Pickle Rick',
    optionD: 'D. Scary Terry',
    correct: 'C. Pickle Rick'
};
 */
/* const question2 = {
    question: 'What is the name of Morty\'s dog?',
    image: 'images/snowball.jpeg',
    optionA: 'A. Snowball',
    optionB: 'B. Fluffles',
    optionC: 'C. Squanchy',
    optionD: 'D. Simba',
    correct: 'A. Snowball'
}; */

const questions = [
    {
        question: 'Who is this?',
        image: 'images/test.png',
        optionA: 'A. Martha Stewart',
        optionB: 'B. Mr. Poopybutthole',
        optionC: 'C. Pickle Rick',
        optionD: 'D. Scary Terry',
        correct: 'C. Pickle Rick'
    },
    {
        question: 'What is the name of Morty\'s dog?',
        image: 'images/snowball.jpeg',
        optionA: 'A. Snowball',
        optionB: 'B. Fluffles',
        optionC: 'C. Squanchy',
        optionD: 'D. Simba',
        correct: 'A. Snowball'
    }
]

const displayQuestions = (question) => {
    $('.quiz-container h3').html(question.question);
    $('.quiz-container img').attr('src', question.image);
    $('label[for=optionA]').html(question.optionA);
    $('label[for=optionB]').html(question.optionB);
    $('label[for=optionC]').html(question.optionC);
    $('label[for=optionD]').html(question.optionD);
}

// array or obj to hold checkValue

const checkValue = (array) => {
    const $answer = $('input[name=answers]:checked').siblings('label').html();
    const correct = array.correct;
    if (correct === $answer) {
        console.log('Correct');
    } else {
        console.log('Incorrect');
    }
    // console.log(`Correct answer is ${correct}`);
}

let questionTracker = 0;

displayQuestions(questions[0]);

// console.log(question1);

$('button').click(function() {
    // console.log('Clicked');
    // const $answer = $('input[name=answers]:checked').siblings('label').html();
    // console.log($answer);
    // displayQuestions(question1);
    this.checked = false;
    checkValue(questions[questionTracker]);
    questionTracker++;
    displayQuestions(questions[questionTracker]);
    // checkValue(question2);
});