(async () => { // start of wrapper (I will explain how this works later)

	const hangman = [`






=========`, `


      |
      |
      |
      |
=========`, `



       
      |
      |
=========`, `
      +
      |
      |
      |
      |
      |
=========`, `
  +---+
      |
      |
      |
      |
      |
=========`, `
  +---+
  |   |
      |
      |
      |
      |
=========`, `
  +---+
  |   |
  O   |
      |
      |
      |
=========`, `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`, `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`, `
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========`, `
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========`, `
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========`];

	let words = `abruptly absurd abyss affix askew avenue awkward axiom azure bagpipes bandwagon banjo bayou beekeeper bikini blitz blizzard boggle bookworm boxcar buckaroo buffalo buffoon buxom buzzard buzzing buzzwords cobweb croquet crypt cycle disavow dizzying duplex dwarves embezzle equip espionage euouae exodus faking fishhook fixable fjord flapjack flopping fluffiness flyby foxglove frazzled frizzled fuchsia funny gabby galaxy galvanize gazebo gizmo glowworm glyph gnarly gnostic gossip grogginess haiku haphazard hyphen icebox injury ivory ivy jackpot jawbreaker jaywalk jazzy jelly jigsaw jinx jiujitsu jockey jogging joking jovial joyful juicy jukebox jumbo kayak kazoo keyhole kilobyte kiosk kitsch kiwifruit klutz knapsack larynx lengths lucky luxury lymph marquee matrix megahertz microwave mnemonic mystify nightclub nowadays oxidize oxygen pajama phlegm pixel pizazz polka psyche puppy puzzling quartz queue quips quiz quizzes quorum razzmatazz rhubarb rhythm scratch snazzy sphinx squawk staff strength stretch stronghold stymied subway swivel syndrome thrift thumb topaz transcript transgress transplant twelfth triphthong unknown unzip vaporize voodoo vortex walkway waltz wave wavy waxy well whomever witch wizard wristwatch xylophone yacht youthful yummy zigzag zilch zipper zodiac zombie`;

	/* PART A0: split the words string into an array, choose a random word */
	words = words.split(' ');
	console.log(words);

	let x = Math.random() * words.length;
	x = Math.floor(x);
	let word = words[x];
	console.log(word);


	/* PART A1: make an array with a line for each letter in the word */
	/* PART B: use a for loop instead of a while loop */
	// Example word: 'quiz'
	// lines -> ['_', '_', '_', '_']
	let lines = [];

	for (let i = 0; i < word.length; i++) {
		lines.push("_");
	}

	let wrong = 0;
	/* PART A3: make the game loop */
	while (lines.includes('_')) {

		/* PART A2: show the lines for the word below the hangman string */
		let guess = await prompt(hangman[wrong] + '\n' + lines.join(" "));

		let correct = false;

		if (guess.length == 1) {
			/* PART A4: implement guessing letters */
			for (let i = 0; i < word.length; i++) {
				let letter = word[i];
				if (guess == letter) {
					lines[i] = letter;
					correct = true;
				}
			}
		} else if (guess == word) {
			/* PART B1: implement guessing the whole word */
			break;
		}

		if (correct == false) {
			wrong++;
		}

		if (wrong >= hangman.length) {
			await alert('You are out of guesses! Try again. The word was ' + word);
			break;
		}

	}

	if (wrong < hangman.length) {
		await alert("You got it right. You're the GOD! The word is " + word);
	}

	exit(); // exits the game
})(); // end wrapper
