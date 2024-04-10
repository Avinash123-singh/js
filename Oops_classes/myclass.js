//ES6

// class User{
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password

//     }
//         encryptPassword(){
//             return `${this.password}abc`
//         }

//         ChangeUserName(){
//             return `${this.username.toUpperCase()}`
//         }
 
// }

// const Avinash = new User("Aviansh","avi@google.com","123")

// console.log(Avinash.encryptPassword());
// console.log(Avinash.ChangeUserName());


// //behind the scene

function User(username,email,password){
    this.username=username
    this.email=email
    this.password=password

}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.ChangeUserName= function(){
    return `${this.username.toUpperCase()}`
}

const vickey = new User("vickey","vik@google.com","123")

console.log(vickey.encryptPassword());
console.log(vickey.ChangeUserName());
