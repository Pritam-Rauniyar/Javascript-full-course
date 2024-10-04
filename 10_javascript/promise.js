const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls , cryptography, network call
    setTimeout(function(){
        console.log("Asynce task is completed");
        resolve()
    }, 1000)
})
promiseOne.then(function(){
    console.log("promise granted");
    
})
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("hello Pritam Rauniyar");
        resolve()
    }, 1000)
}).then(function(){
    console.log("now your problem is resolve");    
})

const MyPromise = new Promise(function(resolve, reject){
    setTimeout(() => {
     resolve({uername: "Pritam Rauniyar", gmail: "xyz@gmail.com"})
        
    }, 1000);
})
MyPromise.then(function(user){
console.log(user);
})
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({username: "Pritam Gupta", password: "123"})
        }else{
            reject('Something gone wrong')
        }
    }, 3000);
})
myPromise
.then((user) =>{
    console.log(user);
    return user.username
    
})
.then((username) =>{
    console.log(username);
    
})
.catch((err) => {
 console.log(err);
 
}).finally(() =>{
    console.log("the promise is either resolved or rejected");
    
})
const myPromise2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let err1 = false
        if (!err1) {
            resolve({username:"Pritam Kumar", password: "javascript"})
        } else {
            reject('Something is wrong please check')
        }
    }, 1000);
}).catch((err1) =>{
 console.log(err1);
 
})

async function Promise1(){
    try {
        const response = await myPromise2
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}
Promise1()