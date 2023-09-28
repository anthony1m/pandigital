const input = prompt("Input a random number, but it should be pandigital: ");
//thawwel l input yalli hiye for example "123" la ['1,2,3']la tsir array 
const inputDigits = Array.from(input).map(Number);

const isPandigital = (inputDigits) => {
    //new set kermel ykouno l numbers unique bt hawel l array la set
  const uniqueDigits = new Set(inputDigits);

  
  return (
      //.size la2ano l set btekhod unique digits w .length la2ano size taba3 l array that we inputted fa bt chouf eza fi duplicate numbers 
    uniqueDigits.size === inputDigits.length &&
    //.from kermel terja3 la array wl .every kermel kermel tchayek kell digit la wahdo eza akbar mn 0 w azghar mn 9 
    inputDigits.every((digit) => digit >= 0 && digit <= 9)
  );
};

if (isPandigital(inputDigits)) {
  console.log("Your number is pandigital");
} else {
  console.log("Your number is not pandigital");
}
