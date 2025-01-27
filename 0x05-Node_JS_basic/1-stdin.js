const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: process.stdin.isTTY
});

r1.question('Welcome to ALX, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}\r`);
  if (!process.stdin.isTTY) {
    console.log("This important software is now closing\r");
  }
  r1.close();
});
