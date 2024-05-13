//for loop

for (let index = 0; index <= 10; index++) {
    const element = index;

    if(element==5){
        console.log("5 is a number");
    }
    //console.log(element);
    
}

for (let i = 1; i<=10; i++)

{
    //console.log(`${i}`);
    for (let index = 1; index <=20; index++) {
        
        //console.log(`${index} ${i}`);

        //console.log((i + '*' + index + '=' +  i*index));
    }
    
}
let myarray =[ "flash ","superman","batman","ironman"," thor"]
//console.log(myarray.length);

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    //console.log(element);
}

// break and continue

// for (let index = 1; index <=20; index++) {

//     if(index== 5){
//         console.log(`dectect 5`);
//         break
//     }
//     console.log(`value of index is ${index}`);

    
// }

for (let index = 1; index <=20; index++) {

    if(index== 5){
        console.log(`dectect 5`);
        continue
    }
    console.log(`value of index is ${index}`);

    
}