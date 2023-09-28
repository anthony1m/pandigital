const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Input a random number to get its Fib : ", (n) => {

  const memorise={};
  const Fib = (n) => {
    if (n == 1 || n== 0) {
      return 1;
   
    } else if(memorise[n]){
        return memorise[n]


  }else {

    result=(Fib(n - 1) + Fib(n - 2));
      memorise[n]= result 
     
      return memorise[n];
    }
  };

  console.log(`the fib numb of ${n} is ${Fib(n)}`)

  rl.close();
});

