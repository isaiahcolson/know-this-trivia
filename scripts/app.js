// Rick & Morty questions
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
        optionB: 'B. Max',
        optionC: 'C. Squanchy',
        optionD: 'D. Charlie',
        correct: 'A. Snowball'
    },
    {
        question: 'Who voices Fart?',
        image: 'images/1-3.png',
        optionA: 'A. John Oliver',
        optionB: 'B. Jemaine Clement',
        optionC: 'C. Stephen Colbert',
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
        optionC: 'C. Christina Hendricks',
        optionD: 'D. Jessica',
        correct: 'B. Unity'
    },
    {
        question: 'What is the name of Beth\'s imaginary world?',
        image: 'images/1-7.jpeg',
        optionA: 'A. Floopyland',
        optionB: 'B. Froopyland',
        optionC: 'C. Neverland',
        optionD: 'D. Atlantiland',
        correct: 'B. Froopyland'
    },
    {
        question: 'Who voices Birdperson?',
        image: 'images/1-8.jpeg',
        optionA: 'A. Justin Roiland',
        optionB: 'B. Thomas Middleditch',
        optionC: 'C. Dan Harmon',
        optionD: 'D. Alan Tudyk',
        correct: 'C. Dan Harmon'
    },
    {
        question: 'Who is the first to die in \'Total Rickall\'?',
        image: 'images/1-9.jpg',
        optionA: 'A. Uncle Steve',
        optionB: 'B. Pencilvester',
        optionC: 'C. Mr. Poopybutthole',
        optionD: 'D. The Butler',
        correct: 'A. Uncle Steve'
    },
    {
        question: 'What is the only thing Rick cares about in Vindicators 3?',
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
        question: 'Which is not a true statement about dwarves?',
        image: 'images/lotr2.jpg',
        optionA: 'A. Never Go Bald',
        optionB: 'B. Bury Dead in Stone',
        optionC: 'C. Fear the Ocean',
        optionD: 'D. Created by a Wizard',
        correct: 'D. Created by a Wizard'
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
        question: 'What show has cameo appearances in the Russo brother\'s movies?',
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
        optionC: 'C. Valerie',
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
        optionC: 'C. 10:32 p.m.',
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

// Office Questions
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
        optionA: 'A. Aunt Jemima',
        optionB: 'B. Easy Rider',
        optionC: 'C. Phyll',
        optionD: 'D. Crappin\' Lapin',
        correct: 'B. Easy Rider'
    },
    {
        question: 'What\'s Stanley\'s morning 3 by 5?',
        image: 'images/office3.jpg',
        optionA: 'A. Coffee, 3 Cream, 5 Sugar',
        optionB: 'B. Iced Tea, 3 Sugar, 5 Cream',
        optionC: 'C. Coffee, 3 Sugar, 5 Cream',
        optionD: 'D. 3 Bagels, 5 Min. Nap',
        correct: 'B. Iced Tea, 3 Sugar, 5 Cream'
    },
    {
        question: 'What does Michael eat instead of ice cream when they run out?',
        image: 'images/office4.jpg',
        optionA: 'A. Sour Cream & Cheese',
        optionB: 'B. Mayo and Chocolate Chips',
        optionC: 'C. Mayo and Black Olives',
        optionD: 'D. Cottage Cheese & Fruit',
        correct: 'C. Mayo and Black Olives'
    },
    {
        question: 'What is the scariest animal Dwight and Robert California\'s son agree on?',
        image: 'images/office5.jpg',
        optionA: 'A. Box Jellyfish',
        optionB: 'B. Brown Bear',
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
        optionB: 'B. Furnace',
        optionC: 'C. Freight Car',
        optionD: 'D. Foliage',
        correct: 'D. Foliage'
    },
    {
        question: 'What is Erin\'s first name?',
        image: 'images/office8.jpeg',
        optionA: 'A. Kelly',
        optionB: 'B. Erin',
        optionC: 'C. Holly',
        optionD: 'D. Phyllis',
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
        question: 'What is the preferred pizza place among The Office staff?',
        image: 'images/office10.jpg',
        optionA: 'A. Domino\'s',
        optionB: 'B. Pizza Hut',
        optionC: 'C. Pizza by Alfredo',
        optionD: 'D. Alfredo\'s Pizza',
        correct: 'D. Alfredo\'s Pizza'
    }
];

// Disney questions
const disQuestions = [
    {
        question: 'What is the name of the fictional city where Big Hero 6 takes place?',
        image: 'images/dis1.jpg',
        optionA: 'A. San Fransokyo',
        optionB: 'B. San Fransisco',
        optionC: 'C. Tokyo',
        optionD: 'D. Silicondon',
        correct: 'A. San Fransokyo'
    },
    {
        question: 'What is the name of the little bear in \'Brother Bear\'?',
        image: 'images/dis2.jpg',
        optionA: 'A. Cub',
        optionB: 'B. Kodak',
        optionC: 'C. Koda',
        optionD: 'D. Kinau',
        correct: 'C. Koda'
    },
    {
        question: 'What sport was Chicken Little’s father famous for?',
        image: 'images/dis3.jpg',
        optionA: 'A. Dodgeball',
        optionB: 'B. Baseball',
        optionC: 'C. Basketball',
        optionD: 'D. Track',
        correct: 'B. Baseball'
    },
    {
        question: 'What is the name of Cinderella’s stepmother?',
        image: 'images/dis4.jpg',
        optionA: 'A. Drizella',
        optionB: 'B. Ana Beurdeu',
        optionC: 'C. Lady Tremaine',
        optionD: 'D. Miss Marney',
        correct: 'C. Lady Tremaine'
    },
    {
        question: 'How many brothers does Hans have in the movie Frozen?',
        image: 'images/dis5.jpg',
        optionA: 'A. 12',
        optionB: 'B. 5',
        optionC: 'C. 23',
        optionD: 'D. 7',
        correct: 'A. 12'
    },
    {
        question: 'In what year was the original Lady and the Tramp released?',
        image: 'images/dis6.jpg',
        optionA: 'A. 1958',
        optionB: 'B. 1961',
        optionC: 'C. 1987',
        optionD: 'D. 1955',
        correct: 'D. 1955'
    },
    {
        question: 'What does Lilo put in Stitch’s bottle in Lilo & Stitch?',
        image: 'images/dis7.jpg',
        optionA: 'A. Water',
        optionB: 'B. Coffee',
        optionC: 'C. Soda',
        optionD: 'D. Energy Drink',
        correct: 'B. Coffee'
    },
    {
        question: 'Who chooses Moana to return the heart to Te Fiti?',
        image: 'images/dis8.jpeg',
        optionA: 'A. Her Father',
        optionB: 'B. Her Grandmother',
        optionC: 'C. Maui',
        optionD: 'D. The Ocean',
        correct: 'D. The Ocean'
    },
    {
        question: 'Mulan takes place in China during which dynasty?',
        image: 'images/dis9.jpeg',
        optionA: 'A. Zhou Dynasty',
        optionB: 'B. Sui Dynasty',
        optionC: 'C. Han Dynasty',
        optionD: 'D. Shang Dynasty',
        correct: 'C. Han Dynasty'
    },
    {
        question: 'What kind of animal killed Tarzan’s real parents?',
        image: 'images/dis10.jpg',
        optionA: 'A. Tiger',
        optionB: 'B. Leopard',
        optionC: 'C. Gorilla',
        optionD: 'D. Snake',
        correct: 'B. Leopard'
    }
];

// SThings Questions
const sthingsQuestions = [
    {
        question: 'In what year does season one take place?',
        image: 'images/sthings1.jpg',
        optionA: 'A. 1985',
        optionB: 'B. 1981',
        optionC: 'C. 1983',
        optionD: 'D. 1984',
        correct: 'C. 1983'
    },
    {
        question: 'What was the show originally called?',
        image: 'images/sthings2.jpg',
        optionA: 'A. Strange Encounters',
        optionB: 'B. Montauk',
        optionC: 'C. Finding Will',
        optionD: 'D. Entering Hawkins',
        correct: 'B. Montauk'
    },
    {
        question: 'Where does Joyce Byers work?',
        image: 'images/sthings3.jpg',
        optionA: 'A. Melvald\'s General Store',
        optionB: 'B. RadioShack',
        optionC: 'C. Hawkins General Store',
        optionD: 'D. Hawkins Grocery',
        correct: 'A. Melvald\'s General Store'
    },
    {
        question: 'Which of these cast members hasn\'t appeared on Broadway?',
        image: 'images/sthings4.jpg',
        optionA: 'A. Gaten Matarazzo',
        optionB: 'B. Caleb McLaughlin',
        optionC: 'C. Sadie Sink',
        optionD: 'D. Finn Wolfhard',
        correct: 'D. Finn Wolfhard'
    },
    {
        question: 'Who was the character from Ghostbusters that Mike and Lucas both dressed as?',
        image: 'images/sthings5.jpg',
        optionA: 'A. Winston',
        optionB: 'B. Egon',
        optionC: 'C. Venkman',
        optionD: 'D. Stance',
        correct: 'C. Venkman'
    },
    {
        question: 'Which cast member received praise from Stephen King before being cast?',
        image: 'images/sthings6.png',
        optionA: 'A. Millie Bobby Brown',
        optionB: 'B. Natalie Dyer',
        optionC: 'C. Winona Ryder',
        optionD: 'D. David Harbour',
        correct: 'A. Millie Bobby Brown'
    },
    {
        question: 'Which famous actor is featured on a poster in Nancy\'s room?',
        image: 'images/sthings7.jpeg',
        optionA: 'A. Kevin Bacon',
        optionB: 'B. Rob Lowe',
        optionC: 'C. John Stamos',
        optionD: 'D. Tom Cruise',
        correct: 'D. Tom Cruise'
    },
    {
        question: 'What is the true name for the Upside Down?',
        image: 'images/sthings8.jpeg',
        optionA: 'A. The Neather',
        optionB: 'B. The Other Place',
        optionC: 'C. The Nether',
        optionD: 'D. The Inner Space',
        correct: 'C. The Nether'
    },
    {
        question: 'In which city does Eleven meet up with Kali?',
        image: 'images/sthings9.jpg',
        optionA: 'A. Chicago',
        optionB: 'B. Pittsburg',
        optionC: 'C. Indianapolis',
        optionD: 'D. New York',
        correct: 'A. Chicago'
    },
    {
        question: 'What film were the child actors required to watch to prepare for their parts?',
        image: 'images/sthings10.jpg',
        optionA: 'A. Alien',
        optionB: 'B. Star Wars',
        optionC: 'C. The Goonies',
        optionD: 'D. Stand by Me',
        correct: 'D. Stand by Me'
    }
];

// swars Questions
const swarsQuestions = [
    {
        question: 'The Jedi Council consists of how many members?',
        image: 'images/swars1.jpg',
        optionA: 'A. 7',
        optionB: 'B. 12',
        optionC: 'C. 9',
        optionD: 'D. 15',
        correct: 'B. 12'
    },
    {
        question: 'Who has not had an appearance in a Star Wars film or show?',
        image: 'images/swars2.jpg',
        optionA: 'A. Daniel Craig',
        optionB: 'B. Bill Hader',
        optionC: 'C. Stellan Skarsgard',
        optionD: 'D. Ed Sheeran',
        correct: 'C. Stellan Skarsgard'
    },
    {
        question: 'What kind of trooper is introduced at the beginning of Rogue One?',
        image: 'images/swars3.jpeg',
        optionA: 'A. Shadow Trooper',
        optionB: 'B. Dark Trooper',
        optionC: 'C. Storm Trooper',
        optionD: 'D. Death Trooper',
        correct: 'D. Death Trooper'
    },
    {
        question: 'Who was the last one to jump down the Death Star’s garbage chute?',
        image: 'images/swars4.jpg',
        optionA: 'A. Luke',
        optionB: 'B. Leia',
        optionC: 'C. Han',
        optionD: 'D. C-3PO',
        correct: 'C. Han'
    },
    {
        question: 'Which actress played Queen Amidala’s decoy and hand-maiden Sabè?',
        image: 'images/swars5.jpg',
        optionA: 'A. Kiera Knightley',
        optionB: 'B. Sofia Coppola',
        optionC: 'C. Rose Byrne',
        optionD: 'D. Jodie Comer',
        correct: 'A. Kiera Knightley'
    },
    {
        question: 'Where were Luke and Leia born?',
        image: 'images/swars6.jpg',
        optionA: 'A. Haruun Kal',
        optionB: 'B. Mon Calamari',
        optionC: 'C. Tatooine',
        optionD: 'D. Polis Massa',
        correct: 'D. Polis Massa'
    },
    {
        question: 'The planet Kashyyyk is home to who?',
        image: 'images/swars7.jpg',
        optionA: 'A. Clones',
        optionB: 'B. Wookies',
        optionC: 'C. Yoda',
        optionD: 'D. Jabba the Hutt',
        correct: 'B. Wookies'
    },
    {
        question: 'Who is the leader of the swoop-riding pirates known as the Cloud-Riders?',
        image: 'images/swars8.jpeg',
        optionA: 'A. Torra Doza',
        optionB: 'B. Baze Malbus',
        optionC: 'C. Enfys Nest',
        optionD: 'D. Jaro Tapal',
        correct: 'C. Enfys Nest'
    },
    {
        question: 'What is known as the hidden world of the Sith?',
        image: 'images/swars9.jpeg',
        optionA: 'A. Exegol',
        optionB: 'B. Ryloth',
        optionC: 'C. Moraband',
        optionD: 'D. Onderon',
        correct: 'A. Exegol'
    },
    {
        question: 'Who voices IG-11 in the Mandalorian?',
        image: 'images/swars10.jpg',
        optionA: 'A. Taika Waititi',
        optionB: 'B. Jon Favreau',
        optionC: 'C. Adam Driver',
        optionD: 'D. Ben Schwartz',
        correct: 'A. Taika Waititi'
    }
];

// potter Questions
const potterQuestions = [
    {
        question: 'How many times did Snape protect Harry?',
        image: 'images/swars1.jpg',
        optionA: 'A. 7',
        optionB: 'B. 12',
        optionC: 'C. 9',
        optionD: 'D. 14',
        correct: 'D. 14'
    },
    {
        question: 'How many Hogwarts students in total are accepted each year?',
        image: 'images/swars2.jpg',
        optionA: 'A. 800',
        optionB: 'B. 1,200',
        optionC: 'C. 1,000',
        optionD: 'D. 2,000',
        correct: 'C. 1,000'
    },
    {
        question: 'Who is the Hufflepuff house ghost?',
        image: 'images/swars3.jpeg',
        optionA: 'A. Grey Lady',
        optionB: 'B. Fat Friar',
        optionC: 'C. Bloody Baron',
        optionD: 'D. Professor Binns',
        correct: 'B. Fat Friar'
    },
    {
        question: 'Who was headmaster of Hogwarts when the Chamber of Secrets was opened the first time?',
        image: 'images/swars4.jpg',
        optionA: 'A. Phineas Nigellus',
        optionB: 'B. Eupraxia Mole',
        optionC: 'C. Armando Dippet',
        optionD: 'D. Dilys Derwent',
        correct: 'C. Armando Dippet'
    },
    {
        question: 'How many staircases does Hogwarts have?',
        image: 'images/swars5.jpg',
        optionA: 'A. 142',
        optionB: 'B. 300',
        optionC: 'C. 229',
        optionD: 'D. 198',
        correct: 'A. 142'
    },
    {
        question: 'According to the Sorting Hat what qualities does Ravenclaw possess?',
        image: 'images/swars6.jpg',
        optionA: 'A. Courage and Bravery',
        optionB: 'B. Intelligence and Learning',
        optionC: 'C. Hard Work and Patience',
        optionD: 'D. Ambition and Cunning',
        correct: 'B. Intelligence and Learning'
    },
    {
        question: 'Where is Azkaban fortress located?',
        image: 'images/swars7.jpg',
        optionA: 'A. The North Sea',
        optionB: 'B. Bodmin Moor',
        optionC: 'C. Dartmoor',
        optionD: 'D. Isle of Skye',
        correct: 'A. The North Sea'
    },
    {
        question: 'What are the first names of Voldemort’s parents?',
        image: 'images/swars8.jpeg',
        optionA: 'A. Percival & Kendra',
        optionB: 'B. Frank & Alice',
        optionC: 'C. Tom & Pandora',
        optionD: 'D. Tom & Merope',
        correct: 'D. Tom & Merope'
    },
    {
        question: 'What is Harry’s wand’s core?',
        image: 'images/swars9.jpeg',
        optionA: 'A. Unicorn Hair',
        optionB: 'B. Phoenix Feather',
        optionC: 'C. Dragon Heartstring',
        optionD: 'D. Basilisk Fang',
        correct: 'B. Phoenix Feather'
    },
    {
        question: 'A wizard who cannot do magic is known as what?',
        image: 'images/swars10.jpg',
        optionA: 'A. Muggle',
        optionB: 'B. Scrub',
        optionC: 'C. Squib',
        optionD: 'D. Crouch',
        correct: 'C. Squib'
    }
];

// simpsons Questions
const simpsonsQuestions = [
    {
        question: 'Who was Bart\'s best friend named after?',
        image: 'images/swars1.jpg',
        optionA: 'A. Richard Nixon',
        optionB: 'B. Charlie Chaplin',
        optionC: 'C. John Wayne',
        optionD: 'D. Janis Joplin',
        correct: 'A. Richard Nixon'
    },
    {
        question: 'What beverage did Homer create?',
        image: 'images/swars2.jpg',
        optionA: 'A. Voodoo Homer',
        optionB: 'B. Salty Homer',
        optionC: 'C. Flaming Homer',
        optionD: 'D. Sour Homer',
        correct: 'C. Flaming Homer'
    },
    {
        question: 'In "Simpsons Roasting on an Open Fire", what does Bart want for Christmas?',
        image: 'images/swars3.jpeg',
        optionA: 'A. Rifle',
        optionB: 'B. Tattoo',
        optionC: 'C. Samurai Sword',
        optionD: 'D. Skateboard',
        correct: 'B. Tattoo'
    },
    {
        question: 'What is the name of Mr. Burns’ teddy bear?',
        image: 'images/swars4.jpg',
        optionA: 'A. Bobo',
        optionB: 'B. Togo',
        optionC: 'C. Nono',
        optionD: 'D. Gogo',
        correct: 'A. Bobo'
    },
    {
        question: 'What is the name of Homer’s brother?',
        image: 'images/swars5.jpg',
        optionA: 'A. Hank Simpson',
        optionB: 'B. Herbert Powell',
        optionC: 'C. Hank Powell',
        optionD: 'D. Henry Powell',
        correct: 'B. Herbert Powell'
    },
    {
        question: 'What did Homer name his fourth child?',
        image: 'images/swars6.jpg',
        optionA: 'A. Snowball',
        optionB: 'B. Herb',
        optionC: 'C. Stitch Face',
        optionD: 'D. Duff',
        correct: 'C. Stitch Face'
    },
    {
        question: 'What is the name of the cocktail waitress Ned married?',
        image: 'images/swars7.jpg',
        optionA: 'A. Summer',
        optionB: 'B. Candy',
        optionC: 'C. Amber',
        optionD: 'D. Ginger',
        correct: 'D. Ginger'
    },
    {
        question: 'Which of these is not one of Cletus\' kid\'s names?',
        image: 'images/swars8.jpeg',
        optionA: 'A. Crystal Meth',
        optionB: 'B. Minimum Wade',
        optionC: 'C. Barbara',
        optionD: 'D. Mary',
        correct: 'C. Barbara'
    },
    {
        question: 'What is Homer\'s email address?',
        image: 'images/swars9.jpeg',
        optionA: 'A. groening67@yahoo.com',
        optionB: 'B. chunkylover53@aol.com',
        optionC: 'C. dohsimp76@aol.com',
        optionD: 'D. maggiedaddy45@aol.com',
        correct: 'B. chunkylover53@aol.com'
    },
    {
        question: 'Where did Lionel Hutz claim to get his law degree?',
        image: 'images/swars10.jpg',
        optionA: 'A. Princeton',
        optionB: 'B. Harvord',
        optionC: 'C. Penn',
        optionD: 'D. Quinnipiac',
        correct: 'A. Princeton'
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
        $('.score__text h2').eq(1).css('background-image', 'url(images/0per.png)');
    } else if ( score == 1 ) {
        $('.score__text h2').eq(1).css('background-image', 'url(images/10per.png)');
    } else if ( score == 2 ) {
        $('.score__text h2').eq(1).css('background-image', 'url(images/20per.png)');
    } else if ( score == 3 ) {
        $('.score__text h2').eq(1).css('background-image', 'url(images/30per.png)');
    } else if ( score == 4 ) {
        $('.score__text h2').eq(1).css('background-image', 'url(images/40per.png)');
    } else if ( score == 5 ) {
        $('.score__text h2').eq(1).css('background-image', 'url(images/50per.png)');
    } else if ( score == 6 ) {
        $('.score__text h2').eq(1).css('background-image', 'url(images/60per.png)');
    } else if ( score == 7 ) {
        $('.score__text h2').eq(1).css('background-image', 'url(images/70per.png)');
    } else if ( score == 8 ) {
        $('.score__text h2').eq(1).css('background-image', 'url(images/80per.png)');
    } else if ( score == 9 ) {
        $('.score__text h2').eq(1).css('background-image', 'url(images/90per.png)');
    } else {
        $('.score__text h2').eq(1).css('background-image', 'url(images/100per.png)');
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



/* Disney Buttons */
// Initialize Disney trivia game
$('.dis').click(function() {
    $('.quiz-container').toggleClass('hidden');
    displayQuestions(disQuestions[0]);
    $('.launch').toggleClass('hidden');
    $('.dis__button').toggleClass('hidden');
    questionTracker = 0;
    userScore = 0;
});

// Disney button to verify answers in game
$('.dis__button').click(function() {
    // const $answer = $('input[name=answers]:checked').siblings('label').html();
    checkValue(disQuestions[questionTracker]);
    questionTracker++;
    if ( questionTracker == 10 ) {
        $gameCheck();
        $('.dis__button').toggleClass('hidden');
        $('.dis__replay').toggleClass('hidden');
        $('.dis__finish').toggleClass('hidden');
    } else {
        $removeSelection();
        displayQuestions(disQuestions[questionTracker]);
    }
});

// Replay Disney match
$('.dis__replay').click(function() {
    $('.score').toggleClass('hidden');
    $('.dis__button').toggleClass('hidden');
    // $('.quiz-container').toggleClass('hidden');
    $('.img').toggleClass('hidden');
    $('.questions').toggleClass('hidden');
    $('.dis__replay').toggleClass('hidden');
    $('.dis__finish').toggleClass('hidden');
    questionTracker = 0;
    userScore = 0;
    displayQuestions(disQuestions[0]);
    $removeSelection();
});

// Return to launch screen from Disney game
$('.dis__finish').click(function() {
    // $('.score').toggleClass('hidden');
    $removeSelection();
    $('.quiz-container').toggleClass('hidden');
    $('.img').toggleClass('hidden');
    $('.questions').toggleClass('hidden');
    $('.dis__replay').toggleClass('hidden');
    $('.dis__finish').toggleClass('hidden');
    $('.score').toggleClass('hidden');
    $('.launch').toggleClass('hidden');
});



/* SThings Buttons */
// Initialize SThings trivia game
$('.sthings').click(function() {
    $('.quiz-container').toggleClass('hidden');
    displayQuestions(sthingsQuestions[0]);
    $('.launch').toggleClass('hidden');
    $('.sthings__button').toggleClass('hidden');
    questionTracker = 0;
    userScore = 0;
});

// sthings button to verify answers in game
$('.sthings__button').click(function() {
    // const $answer = $('input[name=answers]:checked').siblings('label').html();
    checkValue(sthingsQuestions[questionTracker]);
    questionTracker++;
    if ( questionTracker == 10 ) {
        $gameCheck();
        $('.sthings__button').toggleClass('hidden');
        $('.sthings__replay').toggleClass('hidden');
        $('.sthings__finish').toggleClass('hidden');
    } else {
        $removeSelection();
        displayQuestions(sthingsQuestions[questionTracker]);
    }
});

// Replay sthings match
$('.sthings__replay').click(function() {
    $('.score').toggleClass('hidden');
    $('.sthings__button').toggleClass('hidden');
    // $('.quiz-container').toggleClass('hidden');
    $('.img').toggleClass('hidden');
    $('.questions').toggleClass('hidden');
    $('.sthings__replay').toggleClass('hidden');
    $('.sthings__finish').toggleClass('hidden');
    questionTracker = 0;
    userScore = 0;
    displayQuestions(sthingsQuestions[0]);
    $removeSelection();
});

// Return to launch screen from sthings game
$('.sthings__finish').click(function() {
    // $('.score').toggleClass('hidden');
    $removeSelection();
    $('.quiz-container').toggleClass('hidden');
    $('.img').toggleClass('hidden');
    $('.questions').toggleClass('hidden');
    $('.sthings__replay').toggleClass('hidden');
    $('.sthings__finish').toggleClass('hidden');
    $('.score').toggleClass('hidden');
    $('.launch').toggleClass('hidden');
});



/* swars Buttons */
// Initialize swars trivia game
$('.swars').click(function() {
    $('.quiz-container').toggleClass('hidden');
    displayQuestions(swarsQuestions[0]);
    $('.launch').toggleClass('hidden');
    $('.swars__button').toggleClass('hidden');
    questionTracker = 0;
    userScore = 0;
});

// swars button to verify answers in game
$('.swars__button').click(function() {
    // const $answer = $('input[name=answers]:checked').siblings('label').html();
    checkValue(swarsQuestions[questionTracker]);
    questionTracker++;
    if ( questionTracker == 10 ) {
        $gameCheck();
        $('.swars__button').toggleClass('hidden');
        $('.swars__replay').toggleClass('hidden');
        $('.swars__finish').toggleClass('hidden');
    } else {
        $removeSelection();
        displayQuestions(swarsQuestions[questionTracker]);
    }
});

// Replay swars match
$('.swars__replay').click(function() {
    $('.score').toggleClass('hidden');
    $('.swars__button').toggleClass('hidden');
    // $('.quiz-container').toggleClass('hidden');
    $('.img').toggleClass('hidden');
    $('.questions').toggleClass('hidden');
    $('.swars__replay').toggleClass('hidden');
    $('.swars__finish').toggleClass('hidden');
    questionTracker = 0;
    userScore = 0;
    displayQuestions(swarsQuestions[0]);
    $removeSelection();
});

// Return to launch screen from swars game
$('.swars__finish').click(function() {
    // $('.score').toggleClass('hidden');
    $removeSelection();
    $('.quiz-container').toggleClass('hidden');
    $('.img').toggleClass('hidden');
    $('.questions').toggleClass('hidden');
    $('.swars__replay').toggleClass('hidden');
    $('.swars__finish').toggleClass('hidden');
    $('.score').toggleClass('hidden');
    $('.launch').toggleClass('hidden');
});