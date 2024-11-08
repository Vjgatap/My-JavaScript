let score = 33
console.log("type of score variable is : "+typeof(score));

let score1 = "44"
console.log("type of score1 variable is : "+typeof (score1));

// let's start to conversion string - num / number - string
console.log();

let valStrNum = String(score);
console.log("type after conversion int is score : "+typeof(valStrNum));

let valIntNum = Number(score1);
console.log("type after conversion string score1 is : "+typeof (valIntNum));

console.log();

console.log("value of valIntNum is : "+valIntNum);
console.log("value of valStrNum is : "+valStrNum);


/*
"33" -> 33
"44abc" -> NaN (Not a Number)
true -> 1; false -> 0


*/


