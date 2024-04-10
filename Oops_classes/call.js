 

function SetUsername(username){

    //cpmplex calculation DB calls 

    this.username=username

    console.log("called");
} 

function createUser(username,password,email){

    SetUsername.call(this,username)

this.password= password
this.email = email

}

const chai = new createUser("chai","123","avi@si.com")

console.log(chai);