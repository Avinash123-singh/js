function User(email,password){
    this.email=email
    this.password=password

    Object.defineProperty(this ,"email",{
        get:function(){

          return this._email.toUpperCase()
        },
        set : function(value){
            this._email=value

        }
    })

Object.defineProperty(this ,"password",{
    get:function(){

      return this._password.toUpperCase()
    },
    set : function(value){
        this._password=value

    }
})

}
const Userone = new User("user@google.com","Avinash")
console.log(Userone.password);