const num = Math.ceil(Math.random()*10);
console.log(num);
const gNumber = prompt('Guess the number between 1 and 10 inclusive');

if(gNumber === num){
    console.log("Matched")
}else{
    console.log('Not matched, the number was '+gNumber);
}