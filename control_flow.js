const temperatue = 45

// if (temperatue <= 55 )
// {

//     console.log("less than 50");
// }
// else{
//     console.log("temperatue more than 50");

// }


const score= 200

if (score>100)
{
    const power = "fly"
    console.log(`user power: ${power}`);
}

const balance =10000

// if(balance>500) console.log("test")//is calledimplicit code 

// if(balance<5000){
//     console.log("print value less than 5000");
// }
// else if(balance<7500){
//     console.log("print value less than 7500");
// }
// else if(balance<9000){
//     console.log("print value less than9000 ");
// }

// else(balance>12000)
// {
//     console.log("value less than 12000");
// }


const userloggedin=true
const debitcard=true
const loggedinfromgoogle = true
const loggedinfromemail = true

//&& it is used to check the condition //if any of the condition false execution will not be processed 
if(userloggedin && debitcard){
    console.log("allowed to buy course");

}
if(loggedinfromgoogle || loggedinfromemail)
{
    console.log("allowed to logged in");
}