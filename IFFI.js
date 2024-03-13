//Immidiatly Invoke Function Expressions (IIFE)

//The function which emmidiatly execute called iife
// global scope sometimes causes pollutio by their variables and declaration, so to resolve that pollution we use iife

(function iife(){
    console.log(`DB connected`);
}
)();//if you want to add iife at the same time use the semi collon between them(;)

((name) => {

    console.log(`DB connected ${name}`);

})("avinash")

let val1 = 10
let val2 = 20

function addnum(num1 ,num2){

    const total = num1 + num2
    return total
}

const result1 =addnum(val1,val2)
const result2 =addnum(5,6)

console.log(result1,result2)