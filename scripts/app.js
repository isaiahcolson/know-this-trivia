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
        optionA: 'A. 1',
        optionB: 'B. 15',
        optionC: 'C. 18',
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

// Marv Questions
const marvQuestions = [
    {
        question: 'Which is not a word to activate the winter soldier?',
        image: 'images/marv1.png',
        optionA: 'A. Furnace',
        optionB: 'B. Benign',
        optionC: 'C. Two',
        optionD: 'D. Rusted',
        correct: 'C. Two'
    },
    {
        question: 'How many possibilities did Doctor Strange see in \'Infinity War\'?',
        image: 'images/marv2.jpg',
        optionA: 'A. 14,000,605',
        optionB: 'B. 12',
        optionC: 'C. 15,340,207',
        optionD: 'D. 4,507,807',
        correct: 'A. 14,000,605'
    },
    {
        question: 'Who killed T\'Challa\'s father?',
        image: 'images/marv3.jpg',
        optionA: 'A. Winter Soldier',
        optionB: 'B. Zemo',
        optionC: 'C. Killmonger',
        optionD: 'D. T\'Challa',
        correct: 'B. Zemo'
    },
    {
        question: 'Who voices Groot?',
        image: 'images/marv4.jpg',
        optionA: 'A. Vin Diesel',
        optionB: 'B. Bradley Cooper',
        optionC: 'C. Sean Gunn',
        optionD: 'D. Chris Pratt',
        correct: 'A. Vin Diesel'
    },
    {
        question: 'What was Wanda Maximoff’s brother’s first name?',
        image: 'images/marv5.jpg',
        optionA: 'A. Flash',
        optionB: 'B. Quicksilver',
        optionC: 'C. Pietro',
        optionD: 'D. Paul',
        correct: 'C. Pietro'
    },
    {
        question: 'Who did the Sovereign create?',
        image: 'images/marv6.jpg',
        optionA: 'A. The Destroyer',
        optionB: 'B. Adam Warlock',
        optionC: 'C. Maximoff Twins',
        optionD: 'D. Howard the Duck',
        correct: 'B. Adam Warlock'
    },
    {
        question: 'What show has cameo appearances in Russo brother\'s movies?',
        image: 'images/marv7.jpg',
        optionA: 'A. Community',
        optionB: 'B. Daredevil',
        optionC: 'C. Arrested Development',
        optionD: 'D. Star Trek',
        correct: 'C. Arrested Development'
    },
    {
        question: 'What is Pepper Pott\'s first name?',
        image: 'images/marv8.jpg',
        optionA: 'A. Pepper',
        optionB: 'B. Martha',
        optionC: 'C. Valeria',
        optionD: 'D. Patricia',
        correct: 'D. Patricia'
    },
    {
        question: 'How much credit did Tony give Pepper for Stark Tower?',
        image: 'images/marv9.jpg',
        optionA: 'A. 1%',
        optionB: 'B. 5%',
        optionC: 'C. 10%',
        optionD: 'D. 12%',
        correct: 'D. 12%'
    },
    {
        question: 'Which Infinity Stone does Thanos get first?',
        image: 'images/marv10.jpg',
        optionA: 'A. Power',
        optionB: 'B. Space',
        optionC: 'C. Reality',
        optionD: 'D. Mind',
        correct: 'A. Power'
    }
];

// BTTF Questions
const bttfQuestions = [
    {
        question: 'What is the mall that Marty goes to when returning from 1955?',
        image: 'images/bttf1.jpg',
        optionA: 'A. Twin Pines Mall',
        optionB: 'B. Lone Pine Mall',
        optionC: 'C. Battlefield Mall',
        optionD: 'D. Mall of America',
        correct: 'B. Lone Pine Mall'
    },
    {
        question: 'Who was the president in 1955?',
        image: 'images/bttf2.jpg',
        optionA: 'A. John F. Kennedy',
        optionB: 'B. Jimmy Carter',
        optionC: 'C. Ronald Reagen',
        optionD: 'D. Dwight D. Eisenhower',
        correct: 'D. Dwight D. Eisenhower'
    },
    {
        question: 'What game did Biff hear on the radio when driving to the dance?',
        image: 'images/bttf3.jpg',
        optionA: 'A. Michigan-Iowa',
        optionB: 'B. Oklahoma-Nebraska',
        optionC: 'C. UCLA-Washington',
        optionD: 'D. Notre Dame-USC',
        correct: 'C. UCLA-Washington'
    },
    {
        question: 'Who was to visit Washington when Marty goes to 2015?',
        image: 'images/bttf4.jpg',
        optionA: 'A. George Lucas',
        optionB: 'B. Queen Diana',
        optionC: 'C. Ronald Reagen',
        optionD: 'D. Steven Spielberg',
        correct: 'B. Queen Diana'
    },
    {
        question: 'Who cameoed as the judge that called Marty\'s band \"too darn loud\"?',
        image: 'images/bttf5.png',
        optionA: 'A. Huey Lewis',
        optionB: 'B. Steven Spielberg',
        optionC: 'C. Eddie Van Halen',
        optionD: 'D. Bob Geldof',
        correct: 'A. Huey Lewis'
    },
    {
        question: 'What time does lightning hit the clock tower?',
        image: 'images/bttf6.jpg',
        optionA: 'A. 10:04 p.m.',
        optionB: 'B. 9:56 p.m.',
        optionC: 'C. 10:15 a.m.',
        optionD: 'D. 12:03 a.m.',
        correct: 'A. 10:04 p.m.'
    },
    {
        question: 'Who directed the Back to the Future trilogy?',
        image: 'images/bttf7.jpg',
        optionA: 'A. George Lucas',
        optionB: 'B. Steven Spielberg',
        optionC: 'C. Robert Zemeckis',
        optionD: 'D. Ron Howard',
        correct: 'C. Robert Zemeckis'
    },
    {
        question: 'What was one of the instructions on the Flux Capacitor?',
        image: 'images/bttf8.jpg',
        optionA: 'A. Caution!',
        optionB: 'B. Shield Eyes From Light',
        optionC: 'C. Danger - Fluxing!',
        optionD: 'D. Refuel When Empty',
        correct: 'B. Shield Eyes From Light'
    },
    {
        question: 'What is the name of Doc\'s dog in 1955?',
        image: 'images/bttf9.jpg',
        optionA: 'A. Einstein',
        optionB: 'B. Marty',
        optionC: 'C. Edison',
        optionD: 'D. Copernicus',
        correct: 'D. Copernicus'
    },
    {
        question: 'Which young actor made his film debut in Back to the Future II?',
        image: 'images/bttf10.png',
        optionA: 'A. Elijah Wood',
        optionB: 'B. Sean Astin',
        optionC: 'C. Corey Feldman',
        optionD: 'D. Fred Savage',
        correct: 'A. Elijah Wood'
    }
];

const officeQuestions = [
    {
        question: 'What does Michael ask Pam to spread on his grilled foot?',
        image: 'images/office1.png',
        optionA: 'A. Burn Cream',
        optionB: 'B. Butter',
        optionC: 'C. Peanut Butter',
        optionD: 'D. Mayo',
        correct: 'B. Butter'
    },
    {
        question: 'What did Michael say everyone called Phyllis back in high school?',
        image: 'images/office2.jpg',
        optionA: 'A. Less-Urban Aunt Jemima',
        optionB: 'B. Easy Rider',
        optionC: 'C. Phyll',
        optionD: 'D. Crappin\' Lapin',
        correct: 'B. Easy Rider'
    },
    {
        question: 'What\'s Stanley\'s morning 3 by 5?',
        image: 'images/office3.jpg',
        optionA: 'A. Coffe, 3 Cream, 5 Sugar',
        optionB: 'B. Iced Tea, 3 Sugar, 5 Cream',
        optionC: 'C. Coffee, 3 Sugar, 5 Cream',
        optionD: 'D. 3 Bagels, 5 Min. Nap',
        correct: 'B. Iced Tea, 3 Sugar, 5 Cream'
    },
    {
        question: 'What does Michael eat instead of ice cream when they don\'t have any?',
        image: 'images/office4.jpg',
        optionA: 'A. Sour Cream',
        optionB: 'B. Mayo and Chocolate Chips',
        optionC: 'C. Mayo and Black Olives',
        optionD: 'D. Cereal',
        correct: 'C. Mayo and Black Olives'
    },
    {
        question: 'What is the scaries animarl Dwight and Robert California\'s son agree on?',
        image: 'images/office5.jpg',
        optionA: 'A. Box Jellyfish',
        optionB: 'B. Bear',
        optionC: 'C. Black Bear',
        optionD: 'D. Shark',
        correct: 'A. Box Jellyfish'
    },
    {
        question: 'What radio station stickers are seen around the office?',
        image: 'images/office6.jpg',
        optionA: 'A. Ira & The Douche',
        optionB: 'B. Froggy 901',
        optionC: 'C. Froggy 101',
        optionD: 'D. Dr. Ira Glass',
        correct: 'C. Froggy 101'
    },
    {
        question: 'What is Michael and Jan\'s safe word if things go too far?',
        image: 'images/office7.jpg',
        optionA: 'A. Bonfire',
        optionB: 'B. Candle',
        optionC: 'C. Candles',
        optionD: 'D. Foliage',
        correct: 'D. Foliage'
    },
    {
        question: 'What is Erin\'s first name?',
        image: 'images/office8.jpeg',
        optionA: 'A. Kelly',
        optionB: 'B. Erin',
        optionC: 'C. Margaret',
        optionD: 'D. Kevin',
        correct: 'A. Kelly'
    },
    {
        question: 'How much money does Michael donate to Oscar\'s nephew\'s charity?',
        image: 'images/office9.png',
        optionA: 'A. $40',
        optionB: 'B. $10',
        optionC: 'C. $25',
        optionD: 'D. $100',
        correct: 'C. $25'
    },
    {
        question: 'What is the preferred Pizza place among The Office staff?',
        image: 'images/office10.jpg',
        optionA: 'A. Domino\'s',
        optionB: 'B. Pizza Hut',
        optionC: 'C. Pizza by Alfredo',
        optionD: 'D. Alfredo\'s Pizza',
        correct: 'D. Alfredo\'s Pizza'
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



/* Rick and Morty Buttons */
// Initialize Rick and Morty trivia game
$('.ram').click(function() {
    $('.quiz-container').toggleClass('hidden');
    displayQuestions(ramQuestions[0]);
    $('.launch').toggleClass('hidden');
    $('.ram__button').toggleClass('hidden');
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



/* LOTR Buttons */
// Initialize LOTR trivia game
$('.lotr').click(function() {
    $('.quiz-container').toggleClass('hidden');
    displayQuestions(lotrQuestions[0]);
    $('.launch').toggleClass('hidden');
    $('.lotr__button').toggleClass('hidden');
    questionTracker = 0;
    userScore = 0;
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



/* Marv Buttons */
// Initialize Marv trivia game
$('.marv').click(function() {
    $('.quiz-container').toggleClass('hidden');
    displayQuestions(marvQuestions[0]);
    $('.launch').toggleClass('hidden');
    $('.marv__button').toggleClass('hidden');
    questionTracker = 0;
    userScore = 0;
});

// Marv button to verify answers in game
$('.marv__button').click(function() {
    // const $answer = $('input[name=answers]:checked').siblings('label').html();
    checkValue(marvQuestions[questionTracker]);
    questionTracker++;
    if ( questionTracker == 10 ) {
        $gameCheck();
        $('.marv__button').toggleClass('hidden');
        $('.marv__replay').toggleClass('hidden');
        $('.marv__finish').toggleClass('hidden');
    } else {
        $removeSelection();
        displayQuestions(marvQuestions[questionTracker]);
    }
});

// Replay Marv match
$('.marv__replay').click(function() {
    $('.score').toggleClass('hidden');
    $('.marv__button').toggleClass('hidden');
    // $('.quiz-container').toggleClass('hidden');
    $('.img').toggleClass('hidden');
    $('.questions').toggleClass('hidden');
    $('.marv__replay').toggleClass('hidden');
    $('.marv__finish').toggleClass('hidden');
    questionTracker = 0;
    userScore = 0;
    displayQuestions(marvQuestions[0]);
    $removeSelection();
});

// Return to launch screen from Marv game
$('.marv__finish').click(function() {
    // $('.score').toggleClass('hidden');
    $removeSelection();
    $('.quiz-container').toggleClass('hidden');
    $('.img').toggleClass('hidden');
    $('.questions').toggleClass('hidden');
    $('.marv__replay').toggleClass('hidden');
    $('.marv__finish').toggleClass('hidden');
    $('.score').toggleClass('hidden');
    $('.launch').toggleClass('hidden');
});



/* BTTF Buttons */
// Initialize BTTF trivia game
$('.bttf').click(function() {
    $('.quiz-container').toggleClass('hidden');
    displayQuestions(bttfQuestions[0]);
    $('.launch').toggleClass('hidden');
    $('.bttf__button').toggleClass('hidden');
    questionTracker = 0;
    userScore = 0;
});

// BTTF button to verify answers in game
$('.bttf__button').click(function() {
    // const $answer = $('input[name=answers]:checked').siblings('label').html();
    checkValue(bttfQuestions[questionTracker]);
    questionTracker++;
    if ( questionTracker == 10 ) {
        $gameCheck();
        $('.bttf__button').toggleClass('hidden');
        $('.bttf__replay').toggleClass('hidden');
        $('.bttf__finish').toggleClass('hidden');
    } else {
        $removeSelection();
        displayQuestions(bttfQuestions[questionTracker]);
    }
});

// Replay BTTF match
$('.bttf__replay').click(function() {
    $('.score').toggleClass('hidden');
    $('.bttf__button').toggleClass('hidden');
    // $('.quiz-container').toggleClass('hidden');
    $('.img').toggleClass('hidden');
    $('.questions').toggleClass('hidden');
    $('.bttf__replay').toggleClass('hidden');
    $('.bttf__finish').toggleClass('hidden');
    questionTracker = 0;
    userScore = 0;
    displayQuestions(bttfQuestions[0]);
    $removeSelection();
});

// Return to launch screen from BTTF game
$('.bttf__finish').click(function() {
    // $('.score').toggleClass('hidden');
    $removeSelection();
    $('.quiz-container').toggleClass('hidden');
    $('.img').toggleClass('hidden');
    $('.questions').toggleClass('hidden');
    $('.bttf__replay').toggleClass('hidden');
    $('.bttf__finish').toggleClass('hidden');
    $('.score').toggleClass('hidden');
    $('.launch').toggleClass('hidden');
});



/* The Office Buttons */
// Initialize The Office trivia game
$('.office').click(function() {
    $('.quiz-container').toggleClass('hidden');
    displayQuestions(officeQuestions[0]);
    $('.launch').toggleClass('hidden');
    $('.office__button').toggleClass('hidden');
    questionTracker = 0;
    userScore = 0;
});

// The Office button to verify answers in game
$('.office__button').click(function() {
    // const $answer = $('input[name=answers]:checked').siblings('label').html();
    checkValue(officeQuestions[questionTracker]);
    questionTracker++;
    if ( questionTracker == 10 ) {
        $gameCheck();
        $('.office__button').toggleClass('hidden');
        $('.office__replay').toggleClass('hidden');
        $('.office__finish').toggleClass('hidden');
    } else {
        $removeSelection();
        displayQuestions(officeQuestions[questionTracker]);
    }
});

// Replay The Office match
$('.office__replay').click(function() {
    $('.score').toggleClass('hidden');
    $('.office__button').toggleClass('hidden');
    // $('.quiz-container').toggleClass('hidden');
    $('.img').toggleClass('hidden');
    $('.questions').toggleClass('hidden');
    $('.office__replay').toggleClass('hidden');
    $('.office__finish').toggleClass('hidden');
    questionTracker = 0;
    userScore = 0;
    displayQuestions(officeQuestions[0]);
    $removeSelection();
});

// Return to launch screen from The Office game
$('.office__finish').click(function() {
    // $('.score').toggleClass('hidden');
    $removeSelection();
    $('.quiz-container').toggleClass('hidden');
    $('.img').toggleClass('hidden');
    $('.questions').toggleClass('hidden');
    $('.office__replay').toggleClass('hidden');
    $('.office__finish').toggleClass('hidden');
    $('.score').toggleClass('hidden');
    $('.launch').toggleClass('hidden');
});