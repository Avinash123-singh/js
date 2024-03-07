///singleton or contructor

const gaminguser = new Object()//its a singleton object

//const gaminguser = {}//it is not singleton
//const gamerid ="123abc"
//const gamername ="sigmamale"


gaminguser.id ="123abc"
gaminguser.name ="sigmamale"
gaminguser.isLoogedin = false



//console.log(gaminguser);

const prouser = {
    email :"prouser@gmail.com",

    fullname : {
        userfullname:{
            firstname:"Avinash",
            lastname:"singh"
        }
    }

}

//console.log(prouser.fullname.userfullname);

const obj1 = {1:"avinash",2:"neeraj",3:"alok"}
const obj2 = {4:"aman",5:"dangi",6:"manish"}
// const obj2 = {1:"aman",2:"dangi",3:"manish"}

//const obj3={obj1,obj2}
//const obj3 =Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
//console.log(obj3);



//when the value came from database 
const user =[
    {
         id:"1",
         email:"a@gmail.com"
    },
    {
        id:"2",
        email:"b@gmail.com"
    },
    {
        id:"3",
        email:"c@gmail.com"
    }
]



user[1].email
console.log(gaminguser);

console.log(Object.keys(gaminguser));
console.log(Object.values(gaminguser));
console.log(Object.entries(gaminguser));//makes single single arrays for keys and their values 
console.log(gaminguser.hasOwnProperty("isLoogedinjs"));//.has =ownproperty explain whethere this value exist or not 
//console.log(user);