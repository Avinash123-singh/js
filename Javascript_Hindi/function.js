
function myname(){
    console.log("A");
    console.log("v");
    console.log("i");
    console.log("n");
    console.log("a");
    console.log("s");
    console.log("h");
    return "avinash"
    

}
//myname()
//or
//let a = myname()//here my name is the reference of function and {()} perenthesis is added after that called  exicution
//console.log(a);
//console.log(typeof a)

function add(a,b){
    console.log(a + b);
    

}
//const b = add(4,3)
 //console.log(b);

 function add(a,b){
   // let result =  a + b
   
    //return result
    //console.log("avinash");//it will not execute because result already returns a value 

    //or 
    return a + b  // no need to make variable just return the value 
}

const result = add(5,6)
console.log("result:",result);
console.log(typeof add);
//here a,b are parameters and 5,6 are argument
//(!)convert true value to false and false value into true 

function loginusermassage(username){
//if (!userame)//we can also use this statement also 
    if(username==undefined){
        console.log("please enter the username");
        return 

    }

return `${username}ljust logged in`
}

//console.log(loginusermassage())