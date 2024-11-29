console.log(`Welcome to Holberton School, what is your name?`);

process.stdin.on("input", (input) => {
                process.stdout.write(`Your name is: ${input.toString()}`);
});

if (process.stdin.isTTY) {
	process.exit();
}
else {
	console.log(`This important software is now closing`);
	process.exit();
}
