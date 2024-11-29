console.log(`Welcome to Holberton School, what is your name?`);

process.stdin.on("input", (input) => {
                console.log(`${input.toString()}`);
                console.log(`Your name is: ${input.toString()}`);
});

if (process.stdin.isTTY) {
	process.exit();
}
else {
	console.log(`This important software is now closing`);
	process.exit();
}
