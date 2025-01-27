// 1-stdin.js

// Display the initial message
process.stdout.write("Welcome to ALX, what is your name?\n");

// Read input from stdin
process.stdin.on("data", (data) => {
  const name = data.toString().trim(); // Trim any extra whitespace or newline
  console.log(`Your name is: ${name}`);
  console.log("This important software is now closing");
  process.exit(); // End the program
});

// Handle program exit
process.on("exit", () => {
  console.log(); // Ensure a new line is added at the end
});
