// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

let leapYear = year => year % 100 === 0 ? year % 400 ===0 : year % 4 ===0 ;

console.log(leapYear(2016));
console.log(leapYear(2000));
console.log(leapYear(2020));
console.log(leapYear(2017));
console.log(leapYear(2015));