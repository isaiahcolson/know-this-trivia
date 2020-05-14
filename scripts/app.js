/* Rick & Morty questions */
const ramQuestions = [
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

// LOTR Questions
const lotrQuestions = [
    {
        question: 'Which book does Boromir die in?',
        image: 'images/lotr1.jpg',
        optionA: 'A. The Fellowship of the Ring',
        optionB: 'B. The Two Towers',
        optionC: 'C. The Return of the King',
        optionD: 'D. The Hobbit',
        correct: 'B. The Two Towers'
    },
    {
        question: 'Which of these is another name for dwarves?',
        image: 'images/lotr2.jpg',
        optionA: 'A. Luthien\'s Folk',
        optionB: 'B. The Old Ones',
        optionC: 'C. The Deep Ones',
        optionD: 'D. Durin\'s Folk',
        correct: 'D. Durin\'s Folk'
    },
    {
        question: 'What is the name of Galadriel\'s husband?',
        image: 'images/lotr3.jpg',
        optionA: 'A. Celebrian',
        optionB: 'B. Celebrimbor',
        optionC: 'C. Celeborn',
        optionD: 'D. Celebrant',
        correct: 'C. Celeborn'
    },
    {
        question: 'After Sauron, who held the One Ring?',
        image: 'images/lotr4.jpg',
        optionA: 'A. Elrond',
        optionB: 'B. Isildur',
        optionC: 'C. Gollum',
        optionD: 'D. Frodo',
        correct: 'B. Isildur'
    },
    {
        question: 'Where is Legolas from?',
        image: 'images/lotr5.png',
        optionA: 'A. Fangorn Forest',
        optionB: 'B. Rivendell',
        optionC: 'C. Lothlorian',
        optionD: 'D. Mirkwood',
        correct: 'D. Mirkwood'
    },
    {
        question: 'What type of blade was Frodo stabbed with?',
        image: 'images/lotr6.jpg',
        optionA: 'A. Morgul',
        optionB: 'B. Mithril',
        optionC: 'C. Mithrandir',
        optionD: 'D. Mjolnir',
        correct: 'A. Morgul'
    },
    {
        question: 'How many Rings of Power were there?',
        image: 'images/lotr7.jpg',
        optionA: 'A. 5',
        optionB: 'B. 9',
        optionC: 'C. 13',
        optionD: 'D. 20',
        correct: 'D. 20'
    },
    {
        question: 'What actor was originally cast as Aragorn?',
        image: 'images/lotr8.jpg',
        optionA: 'A. Christian Bale',
        optionB: 'B. Stuart Townsend',
        optionC: 'C. Brad Pitt',
        optionD: 'D. Viggo Mortensen',
        correct: 'B. Stuart Townsend'
    },
    {
        question: 'Who became King of Rohan after Theoden died?',
        image: 'images/lotr9.jpg',
        optionA: 'A. Eowyn',
        optionB: 'B. Grima',
        optionC: 'C. Aragorn',
        optionD: 'D. Eomer',
        correct: 'D. Eomer'
    },
    {
        question: 'What causes Merry and Pippin to grow taller than other hobbits?',
        image: 'images/lotr10.jpg',
        optionA: 'A. White Wizard\s spell',
        optionB: 'B. Water in Fangorn',
        optionC: 'C. They\'re Born That Way',
        optionD: 'D. They\'re Not',
        correct: 'B. Water in Fangorn'
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

// Initialize Rick and Morty trivia game
$('.ram').click(function() {
    $('.quiz-container').toggleClass('hidden');
    displayQuestions(ramQuestions[0]);
    $('.launch').toggleClass('hidden');
    $('.ram__button').toggleClass('hidden');
    questionTracker = 0;
    userScore = 0;
});

// Initialize LOTR trivia game
$('.lotr').click(function() {
    $('.quiz-container').toggleClass('hidden');
    displayQuestions(lotrQuestions[0]);
    $('.launch').toggleClass('hidden');
    $('.lotr__button').toggleClass('hidden');
    questionTracker = 0;
    userScore = 0;
});

// Rick and Morty button to verify answers in game
$('.ram__button').click(function() {
    // const $answer = $('input[name=answers]:checked').siblings('label').html();
    checkValue(ramQuestions[questionTracker]);
    questionTracker++;
    if ( questionTracker == 10 ) {
        $gameCheck();
        $('.ram__button').toggleClass('hidden');
        $('.ram__replay').toggleClass('hidden');
        $('.ram__finish').toggleClass('hidden');
    } else {
        $removeSelection();
        displayQuestions(ramQuestions[questionTracker]);
    }
});

// LOTR button to verify answers in game
$('.lotr__button').click(function() {
    // const $answer = $('input[name=answers]:checked').siblings('label').html();
    checkValue(lotrQuestions[questionTracker]);
    questionTracker++;
    if ( questionTracker == 10 ) {
        $gameCheck();
        $('.lotr__button').toggleClass('hidden');
        $('.lotr__replay').toggleClass('hidden');
        $('.lotr__finish').toggleClass('hidden');
    } else {
        $removeSelection();
        displayQuestions(lotrQuestions[questionTracker]);
    }
});

// Replay Rick and Morty match
$('.ram__replay').click(function() {
    $('.score').toggleClass('hidden');
    $('.ram__button').toggleClass('hidden');
    // $('.quiz-container').toggleClass('hidden');
    $('.img').toggleClass('hidden');
    $('.questions').toggleClass('hidden');
    $('.ram__replay').toggleClass('hidden');
    $('.ram__finish').toggleClass('hidden');
    questionTracker = 0;
    userScore = 0;
    displayQuestions(ramQuestions[0]);
    $removeSelection();
});

// Replay LOTR match
$('.lotr__replay').click(function() {
    $('.score').toggleClass('hidden');
    $('.lotr__button').toggleClass('hidden');
    // $('.quiz-container').toggleClass('hidden');
    $('.img').toggleClass('hidden');
    $('.questions').toggleClass('hidden');
    $('.lotr__replay').toggleClass('hidden');
    $('.lotr__finish').toggleClass('hidden');
    questionTracker = 0;
    userScore = 0;
    displayQuestions(lotrQuestions[0]);
    $removeSelection();
});

// Return to launch screen from Rick and Morty game
$('.ram__finish').click(function() {
    // $('.score').toggleClass('hidden');
    $removeSelection();
    $('.quiz-container').toggleClass('hidden');
    $('.img').toggleClass('hidden');
    $('.questions').toggleClass('hidden');
    $('.ram__replay').toggleClass('hidden');
    $('.ram__finish').toggleClass('hidden');
    $('.score').toggleClass('hidden');
    $('.launch').toggleClass('hidden');
});

// Return to launch screen from LOTR game
$('.lotr__finish').click(function() {
    // $('.score').toggleClass('hidden');
    $removeSelection();
    $('.quiz-container').toggleClass('hidden');
    $('.img').toggleClass('hidden');
    $('.questions').toggleClass('hidden');
    $('.lotr__replay').toggleClass('hidden');
    $('.lotr__finish').toggleClass('hidden');
    $('.score').toggleClass('hidden');
    $('.launch').toggleClass('hidden');
});