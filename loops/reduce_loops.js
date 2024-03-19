


//reduce loops 

const mynumber =[1,2,3,4,5]

// const mytotal = mynumber.reduce(function(accumulator,currentvalue) {
//     console.log(`acc ${accumulator} and currval ${currentvalue}`);

//     return accumulator + currentvalue
// })

const mytotal = mynumber.reduce( (accumulator,currentvalue)=> accumulator + currentvalue,0)

//console.log(mytotal);



const shoppingcart = [
    {
        itemname : "js course ",
        price : 199 
    },
    
    {
        
            itemname : "python ",
            price : 399
        
    },
    {
        itemname : "c++ course ",
        price : 499 
    },
    {
        itemname : "nodejs course ",
        price : 699 
    }


]

const additem = shoppingcart.reduce( (accumulator,item) => accumulator + item.price,0)

console.log(additem);