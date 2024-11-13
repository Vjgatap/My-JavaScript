let firstNum = 0;
let secondNum = 1;

console.log(firstNum+" "+secondNum+" ");
for(let i = 1; i <= 5; i++){
    let sum = firstNum+secondNum;
    firstNum = secondNum;
    secondNum = sum;
    console.log(sum+" ");
}