function factorial(n) {
    var answer = 1;
    for (var i = n; i >= 1; i--) {
        answer = answer * i;
    }
    return answer;
}
var x = parseInt(prompt("please enter the number which is need to be multiplayed "));
let n = x;
answer = factorial(n)
console.log("so the factorial of " + n + " is " + answer);


//   _________________addition____________________________________________________________________________________

function addition(e) {
    var answerr = 0;
    for (var i = e; i >= 1; i--) {
        answerr = answerr + i;
    }
    return answerr;
}
var x = parseInt(prompt("please enter the number which is need to be addition"));
let e = x;
answerr = addition(e)
console.log("so the addition of " + e + " is " + answerr);


//   _________________bank_________________________________________________________________________________________

function BANK() {

    
    var bank = 0;
    while (save!=0) {
        var save = parseInt(prompt("please enter your money", "2500"));
        bank = bank + save;
        console.log(bank);
    }

    return bank;
}
money = BANK();
console.log(`done by ${money}`);


function added(money, w, z) {

    for (var i = 1; i <= z; i++) {
        money = money + (money * w / 100);
    }

    return money;
}
var w = parseInt(prompt("please enter the precentage"));
let a = w;
var z = parseInt(prompt("please enter num of years"));
let b = z;
final = added(money, a, b)

console.log(`your account holds ${final} `);

// ________________second bonus___________________________________________________________________________________
var nu1 = 0,  nu2 = 1, num2, i;  
var num = parseInt (prompt (" Enter the limit for Fibonacci Series "));  
  for ( i = 1; i <= num; i++)  
{  console.log (nu1); 
    num2 = nu1 + nu2; 
      
    nu1 = nu2; 
    nu2 = num2; 
}





