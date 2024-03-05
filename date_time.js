//dates

let mydate = new Date()

// console.log(mydate.toString());
// console.log(mydate.toDateString());

// console.log(typeof mydate);

let createDate =new Date(2024 , 2 , 20) 
let createdate = new Date("2024-03-05")
console.log(createDate.toDateString());
//console.log(createdate.toLocaleDateString());

let timestamp = Date.now()
console.log(timestamp);
console.log(createdate.getFullYear())
console.log(Math.floor(Date.now()/1000));


let newdate = new Date()
console.log(newdate.getMonth() + 1);


//`${newdate.getDay()} and the time`

newdate.toLocaleString('default' , {
    weekday : "long"
})