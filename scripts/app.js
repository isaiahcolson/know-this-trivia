// $('.quiz-container h3').html('Who is this?');

// $('.quiz-container img').attr('src', 'images/test.png')

// $('label[for=optionA]').html('A. Martha Stewart');
// $('label[for=optionB]').html('B. Mr. Poopybutthole');
// $('label[for=optionC]').html('C. Pickle Rick');
// $('label[for=optionD]').html('D. Scary Terry');

const question1 = {
    question: 'Who is this?',
    image: 'images/test.png',
    optionA: 'A. Martha Stewart',
    optionB: 'B. Mr. Poopybutthole',
    optionC: 'C. Pickle Rick',
    optionD: 'D. Scary Terry',
    correct: 'C. Pickle Rick'
};

const displayQuestions = (questionArray) => {
    $('.quiz-container h3').html(questionArray.question);
    $('.quiz-container img').attr('src', questionArray.image);
    $('label[for=optionA]').html(questionArray.optionA);
    $('label[for=optionB]').html(questionArray.optionB);
    $('label[for=optionC]').html(questionArray.optionC);
    $('label[for=optionD]').html(questionArray.optionD);
}

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

displayQuestions(question1);

// console.log(question1);

$('button').click(function() {
    // console.log('Clicked');
    // const $answer = $('input[name=answers]:checked').siblings('label').html();
    // console.log($answer);
    checkValue(question1);
});