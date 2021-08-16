// Write a JavaScript function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

let area = (a,b,c)=>{
    let s= (a+b+c)/2;
    return Math.sqrt(s*(s-a)*(s-b)*(s-c))
}
console.log(area(5,6,7))