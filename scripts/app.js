/* Rick & Morty questions */
const questions = [
    {
        question: 'When did \'Rick and Morty\' first air?',
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
let userScore = 0;

// DOM manipulation - reaches into the array given to display value
const displayQuestions = (question) => {
    $('.quiz-container h3').html(question.question);
    $('.quiz-container img').attr('src', question.image);
    $('label[for=optionA]').html(question.optionA);
    $('label[for=optionB]').html(question.optionB);
    $('label[for=optionC]').html(question.optionC);
    $('label[for=optionD]').html(question.optionD);
}

// Checks if radio selection is correct or not
const checkValue = (array) => {
    const $answer = $('input[name=answers]:checked').siblings('label').html();
    const correct = array.correct;
    if (correct === $answer) {
        userScore++;
        console.log('Correct');
    } else {
        console.log('Incorrect');
    }
    console.log(`Score: ${userScore}`);
}

// Removes previous radio selection
const $removeSelection = () => {
    $removeCheck = $('input[name=answers]:checked').prop('checked', false);
}

// Display correct score progress bar
const $scoreImg = (score) => {
    if ( score == 0 ) {
        $('.score__text h2').eq(1).css('background-image', 'url(../images/0per.png)');
    } else if ( score == 1 ) {
        $('.score__text h2').eq(1).css('background-image', 'url(../images/10per.png)');
    } else if ( score == 2 ) {
        $('.score__text h2').eq(1).css('background-image', 'url(../images/20per.png)');
    } else if ( score == 3 ) {
        $('.score__text h2').eq(1).css('background-image', 'url(../images/30per.png)');
    } else if ( score == 4 ) {
        $('.score__text h2').eq(1).css('background-image', 'url(../images/40per.png)');
    } else if ( score == 5 ) {
        $('.score__text h2').eq(1).css('background-image', 'url(../images/50per.png)');
    } else if ( score == 6 ) {
        $('.score__text h2').eq(1).css('background-image', 'url(../images/60per.png)');
    } else if ( score == 7 ) {
        $('.score__text h2').eq(1).css('background-image', 'url(../images/70per.png)');
    } else if ( score == 8 ) {
        $('.score__text h2').eq(1).css('background-image', 'url(../images/80per.png)');
    } else if ( score == 9 ) {
        $('.score__text h2').eq(1).css('background-image', 'url(../images/90per.png)');
    } else {
        $('.score__text h2').eq(1).css('background-image', 'url(../images/100per.png)');
    }
}

// Display score through DOM
const $displayScore = (score) => {
    $('.score h2').eq(1).html(`${score}/10`);
    $scoreImg(score);
    // $('.score img').attr('src', '../images/10per.png');
}

// If game is over, remove all questions and show score
const $gameCheck = () => {
    console.log('Game over');
    $('.img').toggleClass('hidden');
    $('.questions').toggleClass('hidden');
    $('.score').toggleClass('hidden');
    $displayScore(userScore);
}


/* Button event listeners */

// Initialize game with displaying first question in array with click of button
$('.launch__button').click(function() {
    // $('.quiz-container').css('display', 'flex');
    $('.quiz-container').toggleClass('hidden');
    displayQuestions(questions[0]);
    $('.launch').toggleClass('hidden');
    questionTracker = 0;
    userScore = 0;
});

// When button is clicked, game is being played
$('.questions__button').click(function() {
    // const $answer = $('input[name=answers]:checked').siblings('label').html();
    checkValue(questions[questionTracker]);
    questionTracker++;
    if ( questionTracker == 10 ) {
        $gameCheck();
    } else {
        $removeSelection();
        displayQuestions(questions[questionTracker]);
    }
});

// Replay match
$('.score__replay').click(function() {
    $('.score').toggleClass('hidden');
    // $('.quiz-container').toggleClass('hidden');
    $('.img').toggleClass('hidden');
    $('.questions').toggleClass('hidden');
    questionTracker = 0;
    userScore = 0;
    displayQuestions(questions[0]);
    $removeSelection();
});

// Return to launch screen
$('.score__finish').click(function() {
    // $('.score').toggleClass('hidden');
    $('.quiz-container').toggleClass('hidden');
    $('.img').toggleClass('hidden');
    $('.questions').toggleClass('hidden');
    $('.score').toggleClass('hidden');
    $('.launch').toggleClass('hidden');
});