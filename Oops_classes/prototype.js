

// let myName =  "Avinash       "
// let myChannel ="Booster      "
// console.log(myName.trueLength);


let myHeros = ["thor","ironman","hulk"]

let heroPower = {
    thor:"hammer",
    ironman: "rays",
    hulk : "punch",

    getThorPower:function(){
        // console.log(`thor's power is ${this.thor}`);
    }


}

Object.prototype.Avinash = function(){
    // console.log(`Avinash is present in all objects`);
}


Array.prototype.heyAvinash = function(){
    // console.log(`Avinash says hello`);
}
// heroPower.Avinash()

myHeros.Avinash()

myHeros.heyAvinash()
//heroPower.heyAvinash()  // if we give power to array it will not give it to object 

//inheritance

const user ={
    name : "aviansh",
    email: "avi@singh.com"

}


const teacher = {
    makevideo : true
}

const teachingsupport ={
    isAvailable: false
}

const TAsupport ={
    makeAssignment : "make JS  assignment ",
    fulltime : true,
    __proto__:teachingsupport
}

teacher.__proto__= user


//modern syntax

Object.setPrototypeOf(teachingsupport,teacher)



let anotherUsername ="Vickey"
String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);

    console.log(`true length is ${this.trim().length}`);
}

anotherUsername.trueLength()

"Avinash".trueLength()
"icetea".trueLength()
