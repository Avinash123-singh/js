//arrays 

const myarray =[0,1,2,3,4,5,"avinash"]


const myheros = ["shaktiman" , "iron man " , "thor"]

const newarray = new Array(1,2,3,4,5)


console.log(myarray[6]); // arrays value are assigned by zero index values count from zero



//array methods 
 
myarray.push(6)//push is used to add new element in  array
myarray.push(7)
myarray.pop()//pop is used to remove the last element and return the value 


console.log(myarray.includes(9));//it shows that value is exist in this array or not in boolean(true or false form)
console.log(myarray.indexOf(9)); //if the value available shows it if not then the return value (-1)



console.log(myarray);

const createarr = newarray.join() // join convert value in string form

console.log(createarr);


//slice , splice 


console.log("A", myarray)

const newa1 = myarray.slice (1,4)

console.log(newa1);
console.log("B",myarray);

const newa2 = myarray.splice(1,4)

console.log(newa1);
console.log(newa2);
console.log("c",myarray);

//const newa3 = myarray.splice(1,4)

//console.log(newa3);

