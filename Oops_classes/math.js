const Descriptor=Object.getOwnPropertyDescriptor(Math,"PI")

console.log(Descriptor);

// console.log(Math.PI);

// Math.PI= 5
// console.log(Math.PI);//when you want to overwrite the value of PI in will not happen

const coffee ={
    name:"mocha coffee",
    price : 250,
    isAvailable:true,

    orderChai: function(){
        console.log("coffee nahi bani hai");
    }
}

console.log(Object.getOwnPropertyDescriptor(coffee,"name"));

Object.defineProperty(coffee,"name",{
    // writable:false,
    enumerable: false,
    // configurable: false,
    // iteratable: false

})
console.log(Object.getOwnPropertyDescriptor(coffee,"name"));


for(let[key,value]of Object.entries(coffee)){

    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);
    }
   
}