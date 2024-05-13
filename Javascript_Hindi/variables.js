const accountId = 12345
let accountEmail ="avinash@google.com"
var accountPassword = "1223"
accountCity = "ghazipur"
let accountState;

// accountId = 3 //  two constant not allowed 

accountEmail = "avi@avi.com"

accountPassword = "12345678"
accountCity = "Mua"

console.log(accountId);

/*
Prefer not to use var
because of issue  in block scope and funtional scope 

{}-curly brases are called scope
*/

console.table([ accountId,accountEmail,accountPassword,accountCity,accountState])