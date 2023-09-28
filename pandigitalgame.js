const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Input a random number, but it should be pandigital: ", (input) => {
  const inputDigits = Array.from(input).map(Number);

  const isPandigital = (inputDigits) => {
    const uniqueDigits = new Set(inputDigits);

    return (
      uniqueDigits.size === inputDigits.length 
    );
  };

  isPandigital(inputDigits) ? 
    console.log("Your number is pandigital") : console.log("Your number is not pandigital");

  rl.close();
});
