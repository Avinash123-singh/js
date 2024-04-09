function multiplyBY5(num){

    return num*5
}

multiplyBY5.power = 2

console.log(multiplyBY5(5));
console.log(multiplyBY5.power);
console.log(multiplyBY5.prototype);


function createUser(username,score){
    this.username = username
    this.score= score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const user= new createUser("Avinash",200)
const  usertwo =new createUser("Vickey",300)

user.printMe()