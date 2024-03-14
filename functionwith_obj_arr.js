function calculatecartprice(val1,val2,...num1){
return num1
}

//(...)called rest operator or spread operator 
//it is usded in function to pass multipl values
//(val)it is used in function 

console.log(calculatecartprice(200,500,700))
const user ={
    username : "avinash",
    price : 199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} price is ${anyobject.price}`);
    

}
//handleobject(user)

handleobject({

    username : "avinash",
    price : 299
    
})

const myarray =[200, 4000, 300, 6000]

function returnarray(getarray){
    return getarray;
}
console.log(returnarray(myarray));