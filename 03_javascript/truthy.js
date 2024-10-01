// const userEmail= "pritamsrauniyar@gmail.google"
const userEmail= ""
if (userEmail) {
    console.log("got useremail");    
} else {
    console.log("please put your email for further proccess");
    }
// falsy value
// false, 0, -0, bigint 0n, "", null, undefined, nan
//truthy value
// true, "0", 'false', " ", [], {}, function(){},
const username = []
if (username.length === 0) {
    console.log("Array is empty");
}
const emtobj = {}
if (Object.keys(emtobj).length === 0) {
    console.log("Object is empty");
}
// Nullish Coalescing Operator (???): null and undefined
let val1;
//  val1  = 5 ?? 10
//  val1  = null ?? 10
//  val1 = undefined ?? 30
// val1 = null ?? 50 ?? 23
console.log(val1);
// terniary Operator
// condition ? ture : false

// const JsBook = 300
// JsBook <= 250 ? console.log("more than 300") : console.log("less than 300");
// ;

