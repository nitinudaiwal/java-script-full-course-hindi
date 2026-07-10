const accountId = 1445533
let accountEmail = "nitin@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2 // not allowed 

accountEmail = "nu@nu.com"
accountPassword = "21212121"
accountCity = "Bangaluru"

console.log(accountId);
// console.log(accountEmail);
// console.log(accountCity);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var 
because of issue in block scope and funtional scope
*/



