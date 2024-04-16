class User {
   constructor(username,email,password){

   this.username=username
    this.email=email
    this.password=password

   }
get password(){
 return `${this._password}Avinash`
}
set password(value){
    this._password=value.toUpperCase()
}

get email(){
    return this._email.toUpperCase()
}

set email(mail){


 this._email=mail
}

}

const Username= new User("Avinash","avi@google.com","abc")

console.log(Username.email);

