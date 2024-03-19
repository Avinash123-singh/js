
let index =0
while (index<=10) {
  //  console.log(`value  of index is ${index}`);

    index  =  index + 2
}

let myarray = ["flash", "superman", "spiderman","ironman"]

let array = 0
while (array < myarray.length) {  
    
    //console.log(`value of array ${myarray[array]}`);

    array = array + 1
    
}


let score =0
do {
    //console.log(`score is ${score }`);

    score++
} while (score <=10);


//some more types of loops

// for of loops 

const arr = [1,2,3,4,5]

for (const num of arr) {
 //console.log(num);   
}


const greeting="my name is avinash singh"

for (const value  of greeting) {

    
    //console.log(` ${value}`);
    
    
}

//maps

const map = new Map()

map.set('usa',"united states of america")
map.set('IN', "India")
map.set('SA',"south africa")

//console.log(map);

//map are known for  their unique values andthe order given it follows it and also it doesn't dublicate the value if same value witten more than once it only print it once 

for (const [key, value] of map)//if you don't want to return whole array use this syntax 
 {
    //console.log(key,':-',value);
}



const myobj = {
    game1 : 'gta',
    game2 : 'spiderman'
}
// //for (const [game,value] of myobj) {

// //console.log(game,'-',value);    
// }

//for of loop doesn't workon objects 

const myobject = {
    game1 : 'gta',
    game2 : 'spiderman'
}

for (const key in myobject) {
    //console.log(`${key} values of games  ${myobject[key]}`);
}


//for in loop for arrays 

const programming = ["js","c++","java","python","htlm"]

for (const key in programming) {
    //console.log(`${key} print the programming language ${programming[key]}`);
}

//in maps iteration process doesn't follows 







//for each loop the most important in loops to be used 



const coding =["js","ruby","php","java","bootstrap","python"]

// coding.forEach( function (item){
//     console.log(`${item}`);
// } )  //call back functon doesn't have name -only fuction(){}


//using arrow function

coding.forEach( (item,index,arr)=>{
    //console.log(item,index,arr);
} ) 



const mycoding =[

    {
        languagename : "javascript",
        filename : "js"

    },
    {
        languagename : "python",
        filename : "py"
    },
    {
        languagename : "c plus plus",
        filename : "cpp"
    }


]

mycoding.forEach(  (item) =>{

    console.log(item.languagename);
})