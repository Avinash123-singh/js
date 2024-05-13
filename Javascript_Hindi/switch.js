// switch (key){
//     case value:

//     break;
//      default:
//         break;
// }syntax for switch case 

const month = 3

switch (month) {
    case 1:
        console.log("jaunuary");
        
        break;//break is used to stop the execution at result point  otherwise the value after result point will also be accessed
    case 2:
        console.log("fabruary");
        
        break;
    case 3:
        console.log("march");
        
         break;
    case 4:
        console.log("april");
        
         break;
    default:

    console.log("any any value ");
        break;
}


//to check empty object

const emptyobj ={}
if(Object .keys(emptyobj).length===0)
{
    console.log("object is empty");
}


//nullish coalescing operator (??):for null undefined values

let val1
//val1=5 ?? 10
//val1 = null??4

val1 = undefined??5


console.log(val1);

//terniary operator

//conditiom ? true : false

const iceteaprice = 100

iceteaprice <= 80 ? console.log("less than 80") : console.log("more than 80");


