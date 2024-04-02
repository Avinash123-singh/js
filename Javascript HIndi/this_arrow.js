const user = {
    username : "avinash",
    price : 199,

    welcomemessage : function(){
        console.log(`${this.username}, welcome to website`);

        //console.log(this);//this is called window object
    }

}
user.welcomemessage()
user.username = "vickey"
user.welcomemessage()

//console.log(this);// it is global context so it has empty object{}



// function arrow(){

//     let username = "avinash"
//     console.log(this.username);
// }

// //arrow() //here the  output will be undefined 



// const arrow = function(){
//     let username = "avinash"
//  console.log(this.username);

// }
// arrow()//here the  output will be undefined 

const arrow = () =>{
    let username = "avinash"
 console.log(this);

}
arrow()


//const addnum = (num1,num2) => num1 + num2
//or
const addnum = (num1,num2) => (num1 + num2)//this type is called implicit return where we don't use return to take output

console.log(addnum(5,6));

