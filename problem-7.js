// Write a JavaScript program to find which 1st January is being a Friday between 2014 and 2050.

for(let year = 2014; year<= 2050; year++ ){
    const date = new Date(year,0,1);
    if(date.getDay()== 5){
        console.log(` 1st january is being a Friday- ${year}`)
    }
}