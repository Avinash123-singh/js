

const promiseOne = new  Promise(function(resolve,reject){
    //do an async task
    // DB calls ,cryptography,network

    setTimeout(function(){
        console.log('Async task is cmplete')
        resolve()
    },2000)
})
//(.then has direct connection to resolve )
promiseOne.then(function(){
console.log('promise consumed');
})


new Promise(function(resolve,reject){
    setTimeout(function(){
      console.log('Async the task two')
      resolve()
    },2000)
}).then(function(){
    console.log('async 2 resolved');
})


const PromiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
     resolve({username:"Avinash",email:"avinash@example.com"})
    },2000)
})


PromiseThree.then(function(user){
console.log(user)
})


const promiseFour = new Promise(function(resolve,reject){
setTimeout(function(){
    let error = true
    if(!error){
        resolve({username:"Avinash", password:"123"})
    }else{
        reject("ERROR:Something went wrong")
    }
},2000)
})


promiseFour.then((user)=>{
  console.log(user);
  return user.username
}).then((username)=>{
console.log(username);
}).catch((error)=>{
console.log(error);
}).finally(()=> console.log("The promise is either resolve or become error "))




const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Javascript", password:"12345"})
        }else{
            reject("ERROR: Js went wrong")
        }
    },2000)
    })


    async function consumepromiseFive(){
       try{
        const response = await promiseFive

       console.log(response);
       }catch(error){
        console.log(error);
       }
    }

    consumepromiseFive()

    // async function getAllUser(){
    //  try{
    //     const  response =  await fetch('https://jsonplaceholder.typicode.com/users')
    //  const data = await response.json()
    //  console.log(data);
    //  }catch(error){
    //     console.log("E:",error);
    //  }
    // }
    // getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
return response.json()
})

.then((data)=>{
console.log(data);
})
.catch((error)=>{
    console.log(error);
})