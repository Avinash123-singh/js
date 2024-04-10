class User {
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}


class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`New course added by${this.username}`);
    }
}

const UserOne = new Teacher("user@google.com","123")

UserOne.addCourse()


const sweet = new User("gulabjamun")

sweet.logMe()


console.log(UserOne instanceof User);