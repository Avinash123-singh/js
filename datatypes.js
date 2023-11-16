"use strict";//treat all JS code as new version

// alert(3 + 3) //we are using node js , Here it will not work directly

console.log(3 + 3); 

console.log("avinash"+ "singh"*12)// if string is added or multiplied with 

//code readabilty is important so write in proper manner 

let name ="avinash"
let age = 23*2
let isLoggedIn = false*12//true value is 1 ,false value is 0
const person = "vickey" + " singh";

let x = 16 + 6 +"Volvo"// when we pput no. in double cotted it will be treated as string 
let y = "car" + 10 + 5
// code alwayes runs from left to right , so whatever values be  written first (number or string ) if we add them it will take the value from left to right 



let x1 = 34.00
let z = 123e2
let a = 123e-2
let b = 1234578976534556676467677
const bikes =["honda","bajaj","bmw"]

// types of datatypes - 
// number= 2 to power 53 approx
// bigint
// string =>""
// boolean=> yes or no
// null => stand alone value-represemtation of empty =>when we run null output will be (object)
// undefined => value is not defined yet 
// symbol => to define uniqueness 


console.log(typeof true);//when we run null output will be (object)
console.log(typeof b);
console.log(isLoggedIn)
console.log(age)
console.log(person,age)
console.log(bikes)
console.table([isLoggedIn,age ,person,x,y,x1,z,a,b,bikes])

