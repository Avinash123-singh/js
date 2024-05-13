
//objects are declared with to  types literals and constructor

//singleton(when the objects declared in constructor called singleton)

//object literals

//Object.create
const syb= Symbol("arrow")
const user1 ={

    name : "avinash",
    "full name": "avinash singh",

    [syb] : "arrow",//syntax to symbol is []//write the value in square bracket

    age : 24,

    location : "gorakhpur",

    email : "avisingh000@gmail.com",

    isloggedin : false ,

    lastloginday : ["monday","thursday","friday"]


}

console.log(user1.email);
console.log(user1["email"]);
console.log(user1["full name"]);
console.log(typeof user1[syb]);

//want to change the value


user1.email="avinash@google.com"//if u want to change the email
console.log(user1.email);

//Object.freeze(user1)



user1.email="avinash@singh.com"

//console.log(user1);

user1.greeting = function(){

    console.log("hello everyone");
}

user1.greetingtwo = function(){
    console.log(`hello everyone, ${this.name}`);
}
console.log(user1.greeting);

console.log(user1.greeting());


console.log(user1.greetingtwo());