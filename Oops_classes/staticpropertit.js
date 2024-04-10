class User {
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`username:${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const Avinash = new User("avinash")
//console.log(Avinash.createId());

class teacher extends User {
    constructor(username,email){

        super(username)
        this.email=email
    }
}

const iphone = new teacher("iphone","i@iphone.com")


console.log(iphone.createId())