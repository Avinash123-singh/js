//datatypes are basically devided into two types 1- premitive and non premitive  
//diffrence is basically devided by "how the data stored in the memory " and "how to access the data "

//1-primitive ( they are call by value means only the copy of reference of data will be copied 
//not the original reference of data  and the changes are done in copies )

//7 types- string,number ,boolean,null(empty),undefined ,symbol(to make the value unique),bigInt 


//javascript is dynamically type language or statically type language 

//it is dynamically type language

const scorevalue =100.5
console.log(scorevalue)

//symbol
const id = Symbol("123")
const anotherid = Symbol("123")
console.log (id == anotherid)


const bigint = 766464165156416654n
console.log (bigint)

//use n at the end of the number to represent big int.
//Reference type or non primitive 
// direct reference of data will be given into the memory

//array,objects,functions

const heros = ["shaktiman" ,"thor" ,"ironman"];
   
console.log(typeof heros)
//ojects are placed in curly brases 

let myobj = {
    name :"avinash",
    age : 22,
}

const myfunction = function(){

    console.log("hello world");
}

console.log( typeof myfunction)


