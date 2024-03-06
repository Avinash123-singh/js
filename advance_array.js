

const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","batman","aquaman"]

//marvel_heros.push(dc_heros) //push return the existing array (combines two or more array  at the the end of first array )

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allheros = marvel_heros.concat(dc_heros)//concatinate returns new array (combines two or more array  at the the end of first array )


//console.log(allheros);


const all_new_heros = [...marvel_heros,...dc_heros]//(...)three dots are spread which spread the value in one array 


console.log(all_new_heros);


const another_array = [1,2,3,[4,5],[7,6,8,9],[4,0,4]]

const single_array = another_array.flat(Infinity)

console.log(single_array);


console.log(Array.isArray("Avinash"));
console.log(Array.from("Avinash"));//from converts the values in array 

console.log(Array.from({name:"Avinash"}))//interesting


const score1 =1000
const score2 =200
const score3 =4000

console.log(Array.of(score1,score2,score3));