const name  = "avinash"
const repocount = 50 

//console.log(name + repocount + " value");

console.log(`hello my name is ${name.toUpperCase()})and my repo count is ${repocount}`);

// (.touppercase() make the string in   capital letter)
 
//how to declare the string 

//variable Must begin with a letter, or $, or _

//(An object is a collection of related data and/or functionality. These usually consist of several 
//variables and functions (which are called properties and methods when they are inside objects).)

const gamename = new String("avinash singh")

console.log(gamename[0]);
console.log(gamename.__proto__)

console.log(gamename.length);

console.log(gamename.toUpperCase())

console.log(gamename.charAt(5));

console.log(gamename.indexOf('h'));

const newstring =gamename.substring(0,6)
console.log(newstring);

const anotherstring = gamename.slice(-7,4)
console.log(anotherstring);

const newstringone ="    avinash    "
console.log(newstringone);

console.log(newstringone.trim());


console.log(newstringone.trimEnd());

console.log(newstringone.trimStart());

const url = "https://avinash.com/avinash%20singh"

console.log(url.replace('%20','-'))
console.log(gamename.split(' '));