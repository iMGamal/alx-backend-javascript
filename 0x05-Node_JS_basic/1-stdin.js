console.log(`Welcome to Holberton School, what is your name?`);

if (process.stdin.isTTY) {
	process.stdin.on("input", (input) => {
		console.log(`${input.toString()}`);
		console.log(`Your name is: ${input.toString()}`);
		process.exit();
	});
}
else {
	process.stdin.on("input", (input) => {
                console.log(`${input.toString()}`);
                console.log(`Your name is: ${input.toString()}`);
                console.log(`This important software is now closing`);
		process.exit();
        });
}
