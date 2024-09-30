// const myUser = {
//     username: "Pritam Rauniyar",
//     price: 1999,


//     welcomeMessage: function () {
//         console.log(`${this.username} , welcome to Javascript Series`);
//         // console.log(this); // it's persent the present context
        
//     }
// }
// myUser.welcomeMessage()
// myUser.username = "prince"
// myUser.welcomeMessage()
// console.log(this); // it's persent the global context which is empty 


// function My(){
//     let MyName = "Pritam Rauniyar"
//     console.log(this.MyName);
// }
// My()
// const myName = function() {
//     let MyName = "Pritam Rauniyar"
//         console.log(this.MyName);
// }
// myName()

// const myName = () => {
//     let MyName = "Pritam Rauniyar"
//         // console.log(this.MyName);
//         console.log(this);
// }
// myName()


// () => {} // arrow function sample
// const add = (val1, val2) =>{
//     return val1 + val2
// }
// console.log(add(5,10));
// another way to define 
// const add = (val1 , val2) => val1 + val2
// console.log(add(20, 30));
// const add = (val1 , val2) => ( val1 + val2 )
// console.log(add(40, 60));
// const add = (val1 , val2) => ( {MyName: "Pritam Rauniyar"} ) // for the object access
// console.log(add());