const score = 500

const balance = new Number(1000)
//console.log(balance);

const newstring =balance.toString()
console.log(newstring,balance.toString().length)
//console.log(typeof newstring);

//console.log(balance.toFixed(2));

//tofixed is  used to give how much value you want after after point 
//1000 is converted to 1000.00 if we use toFixed(2)


const newnumber = 100
//console.log(newnumber.toPrecision(10));
//toPrecision is used to print up to the value you want  to print 

const hundreds = 100000000
//console.log(hundreds.toLocaleString('en-IN'));


//++++++++++++++++++++++++++++++++++++++++Maths+++++++++++++

console.log(Math);
console.log(Math.abs(-4));    //abs is absolute value which convert minus value to plus 
console.log(Math.round(5.5)); // convert the point value to full value 


// there are two more type in this ceil and floor 
//ceil 4.2 converted to 5 
//floor 4.2 converted to 4

console.log(Math.random()) //math.random always give the value between (0 to 1)
console.log((Math.random()*10) + 1);
console.log((Math.random()*10) + 1);



const min = 20
const max = 40

console.log(Math.floor(Math.random() * (max - min + 1)) + max) //add min or max at the end to get value either more than min value or maximum value 

