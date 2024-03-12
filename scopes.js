let a = 200

if (true){
    let  a = 10
const b =20
var c = 30
//console.log(a);
}

//console.log(a);
//console.log(b);
//console.log(c);


// {} called scope
//console.log(` ${a}, ${b} , ${c}`);

//nested scope

function one(){

    const username = "avinash"

    function two(){
        const website = "youtube"
        console.log(username + website);
    }
    //console.log(website);
    two()
}
//one()

if(true){
    const username = "Vickey"

    if(username == "Vickey"){
        const website = " google"
        console.log(username + website);

    }
    //console.log(website);
    
}
//console.log(username);

console.log(addone(5))// you can declare the before function

function addone(num){
    return num + 1
}



const addtwo = function(num)
{
    return num + 1
}
addtwo(5)//you cannot declare the before function