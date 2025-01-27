const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  terminal: process.stdin.TTY,
  output: process.stdout
});

rl.question('Welcome to ALX, what is your name?\n', (name) => {
  process.stdout.write(`Your name is: ${name}\n`);
  
  if (!process.stdin.isTTY) {
    process.stdout.write("This important software is now closing\n");
  }
  
  rl.close();
});
