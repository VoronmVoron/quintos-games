const target =
	" .d88b. \n" +
	".8P  Y8.\n" +
	"88    88\n" +
	"88    88\n" +
	"'8b  d8'\n" +
	" 'Y88P' ";

/* PART A: change the values of x and y to be random */
// screen size is 80w x 30h
// target is 8w x 6h
// drawing starts from top left corner
// we want to draw the target within the bounds of the frame
// 80 screen width - 8 target width - 1 frame line = 71
// 30 screen height - 6 target height - 1 frame line = 23

let btn;

function btnClick() {
	console.log(Date.now());

	if (btn) {
		btn.erase();
	}

	let x = Math.ceil(Math.random() * 71);
	let y = Math.ceil(Math.random() * 23);
	console.log(x, y);
	btn = pc.button(target, x, y, btnClick);
}

async function startGame() {
	await pc.alert('Hello! Are you an allien? Click the button as fast as you can!');
	btnClick();
}

startGame()

/* PART B: Use recursion to make a new button after clicking a button */

/* PART C: Limit clicks to 20, calculate stats */

/* PART D: Make a background pattern */
