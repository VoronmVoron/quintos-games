(async () => { // start wrapper (I will explain how this works later)

	/* Your code goes here! (inside the wrapper) :D */

	/* PART A: Make a random number between 1-100 */
	let lama = Math.random() * 100;
	lama = Math.ceil(lama);
	console.log(lama);

	let captainAmerica;
	let ironMan;


	let guess;
	/* PART A: Write code for one turn of the game */
	while (guess != lama) {
		// ask user to guess a number, assign their response to a variable
		guess = await prompt("Guess a Number 1-100");

		// tell the player if their guess was too low, too high, or correct
		if (guess == lama) {
			await alert("You got it!");
		} else if (guess < lama) {
			await alert("You guessed too low");
		} else if (guess > lama) {
			await alert("You guessed too high");
		}
	}


	/* PART B: Make the game loop */

	exit(); // exits the game
})(); // end wrapper
