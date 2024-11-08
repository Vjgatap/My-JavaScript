let score = 33
console.log(typeof score);
console.log(typeof(score));

let score1 = "44"
console.log(typeof score1);
console.log(typeof (score1));

// let's start to conversion string - num / number - string
console.log();


let valIntNum = Number(score1);
console.log("Value after conversion string is : "+typeof (valIntNum));

let valStrNum = String(score);
console.log("Value after conversion int is : "+typeof(valStrNum));

console.log();

console.log("value of valIntNum is : "+valIntNum);
console.log("value of valStrNum is : "+valStrNum);


/*
"33" -> 33
"44abc" -> NaN (Not a Number)
true -> 1; false -> 0


*/


