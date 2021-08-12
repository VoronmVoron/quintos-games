(async () => { // start of wrapper (I will explain how this works later)

	let choice = -1; // initialize choice to -1, user has not made any choice yet

	while (choice != null) { // while choice is not null (nothing)
		let msg = ''; // initialize message to empty string
		let opt = [];
		if (choice == -1) {
			/* PART A: Start your story! */
			msg = "Frog is trying to sneak into the llama castle.\n\n\t" +
				"1: Try to jump across the moat\n\t" +
				"2: Try to kill the guards\n\t" +
				"3: Distract the guards";
			opt = [1, 2, 3];
		} else if (choice == 1) {
			/* PART A: continue the story */
			msg = "You missed the castle wall and drowned in the water!";
		} else if (choice == 2) {
			msg = "The guards have knife, they killed you!";
		} else if (choice == 3) {
			msg = "You start a fire in the woods, the guard llamas leave to try to put it out!\n\n\t" +
				"4: Sneak across the drawbridge\n\t" +
				"2: Try to attack the guards";
			opt = [4, 2];
		} else if (choice == 4) {
			msg = "The drawbridge helped you get into the castle.\n\n\t" +
				"5: close the drawbridge\n\t" +
				"6: Go to a coronation's room";
			opt = [5, 6];
		} else if (choice == 5) {
			msg = "The guards met the frog and presented him to a King.";
		} else if (choice == 6) {
			msg = "Took the corona and left the castle now.";
		}

		if (opt.length == 0) {
			await alert(msg);
			choice = null;
		} else {
			let input = await prompt(msg);
			input = Number(input);
			if (opt.includes(input)) {
				choice = input;
			} else {
				await alert("invailed! Try again.");
			}
		}


		/* PART B: end the game if there are no more choices to make */

		/* PART B: check if the player made a valid choice */

	}

	exit(); // exits the game
})(); // end wrapper
