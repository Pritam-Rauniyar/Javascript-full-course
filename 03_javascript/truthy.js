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