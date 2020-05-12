const questions = [
    {
        question: 'When did Rick & Morty first air?',
        image: 'images/1-1.png',
        optionA: 'A. January 2014',
        optionB: 'B. March 2015',
        optionC: 'C. December 2013',
        optionD: 'D. August 2013',
        correct: 'C. December 2013'
    },
    {
        question: 'What is the name of Morty\'s dog?',
        image: 'images/1-2.jpeg',
        optionA: 'A. Snowball',
        optionB: 'B. Fluffles',
        optionC: 'C. Squanchy',
        optionD: 'D. Simba',
        correct: 'A. Snowball'
    },
    {
        question: 'Who voices Fart?',
        image: 'images/1-3.png',
        optionA: 'A. Oscar the Grouch',
        optionB: 'B. Jemaine Clement',
        optionC: 'C. Martha Stewart',
        optionD: 'D. David Bowie',
        correct: 'B. Jemaine Clement'
    },
    {
        question: 'What does Jerry ask Meeseeks for help with?',
        image: 'images/1-4.png',
        optionA: 'A. Talk with Beth',
        optionB: 'B. Kill Rick',
        optionC: 'C. Job Presentation',
        optionD: 'D. His Golf Game',
        correct: 'D. His Golf Game'
    },
    {
        question: 'What sauce did Rick want from McDonald\'s?',
        image: 'images/1-5.png',
        optionA: 'A. Ranch',
        optionB: 'B. Sriracha',
        optionC: 'C. Mac Sauce',
        optionD: 'D. Szechuan Sauce',
        correct: 'D. Szechuan Sauce'
    },
    {
        question: 'Who is Rick\'s former lover?',
        image: 'images/1-6.png',
        optionA: 'A. Super Nova',
        optionB: 'B. Unity',
        optionC: 'C. Beth',
        optionD: 'D. Jessica',
        correct: 'B. Unity'
    },
    {
        question: 'What is the name of Beth\'s imaginary world?',
        image: 'images/1-7.jpeg',
        optionA: 'A. Hoth',
        optionB: 'B. Froopyland',
        optionC: 'C. Neverland',
        optionD: 'D. Atlantis',
        correct: 'B. Froopyland'
    },
    {
        question: 'Who voices Birdperson?',
        image: 'images/1-8.jpeg',
        optionA: 'A. Justin Roiland',
        optionB: 'B. Thomas Middleditch',
        optionC: 'C. Dan Harmon',
        optionD: 'D. Lin Manuel Miranda',
        correct: 'C. Dan Harmon'
    },
    {
        question: 'Who is the first to go in \'Total Rickall\'?',
        image: 'images/1-9.jpg',
        optionA: 'A. Uncle Steve',
        optionB: 'B. Pencilvester',
        optionC: 'C. Mr. Poopybutthole',
        optionD: 'D. The Butler',
        correct: 'A. Uncle Steve'
    },
    {
        question: 'What is the only thing Rick cares about in the Vindicators?',
        image: 'images/1-10.png',
        optionA: 'A. Noob Noob',
        optionB: 'B. Nothing',
        optionC: 'C. Morty',
        optionD: 'D. Birdperson',
        correct: 'A. Noob Noob'
    }
];

let questionTracker = 0;
let score = 0;

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
        score++;
        console.log('Correct');
    } else {
        console.log('Incorrect');
    }
    console.log(`Score: ${score}`);
}

displayQuestions(questions[0]);

const $removeSelection = () => {
    $removeCheck = $('input[name=answers]:checked').prop('checked', false);
    // console.log($removeCheck);
}

$('button').click(function() {
    // console.log('Clicked');
    // const $answer = $('input[name=answers]:checked').siblings('label').html();
    // displayQuestions(question1);
    checkValue(questions[questionTracker]);
    questionTracker++;
    displayQuestions(questions[questionTracker]);
    $removeSelection();
});