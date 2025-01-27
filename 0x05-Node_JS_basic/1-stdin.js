const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  terminal: process.stdin.TTY,
  output: process.stdout
});

rl.question('Welcome to ALX, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}`);
  
  if (!process.stdin.isTTY) {
    process.stdout.write("This important software is now closing\n");
  }
  
  rl.close();
});
