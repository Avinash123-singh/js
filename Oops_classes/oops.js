const users = {
    username : "Avinash",
    loginCount:8,
    signedIN :true,
    email :"avi@google.com",
    password :12345,

getUserDetails:function(){
    //console.log("got user details from database");

    //console.log(`username ${this.username}`);//(if i want to print only username it will show that username undefined because this contexr doesn't defined inside the funcion so if i want to print the function we have to  use this keyword)
}

}



// console.log(user.username);
// console.log(user.getUserDetails());


// const promiseOne = new Promise()
// const date = new Date()//(new keyword is a constructor function)(it allows to create multiple instance using single objects  )

function user (username,logIncount,isLoggedIn){
    this.username=username
    this.logIncount=logIncount
    this.isLoggedIn=isLoggedIn

    return this
}

const userOne = new user("avinash",12,true)

const userTwo = new user("singh",13,false)

console.log(userOne);
console.log(userTwo);


//(1-when we use new keyword the empty object will be created )
//2- then the constructor function will be called 
//3- then in this keyword all the arguments will be injected 
//4-you will get the result in function