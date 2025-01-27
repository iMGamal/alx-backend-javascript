const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  terminal: process.stdin.isTTY,
  output: process.stdout
});

r1.question('Welcome to Holberton School, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}\r`);
  if (!process.stdin.isTTY) {
    console.log("This important software is now closing\r");
  }
  r1.close();
});
