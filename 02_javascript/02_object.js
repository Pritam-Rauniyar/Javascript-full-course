 // singleton 
// objecct.create
 //object literals
//  const mySym = Symbol("unlucky")

//  const MyUser = {
//     [mySym] : "key1",
//     name: "Pritam Rauniyar",
//     age: 24,
//     Location: "Birgunj",
//     gmailOfficalId: "Pritamsahrauniyar@gmail.com",
//     isLoggedIn: false,
//     lastLoggedIn: ["monday", "saturday", "tuesday"]

//  }
// console.log(MyUser.name);
// console.log(MyUser["name"]);
// console.log(MyUser[mySym]);
// MyUser.email = "hunterpritamrauniyar@gmail.com"
// Object.freeze(MyUser)
// MyUser.email = "Pritamsahrauniyar@facebook.com"
// console.log(MyUser);
// MyUser.Greeting = function(){
//     console.log("Hello Javascript Lover! How are you ?");
// }
// MyUser.GreetingTwo = function(){
//     console.log(`Hello Javascript Lover! How are you ?, ${this.name}`);
// }
// console.log(MyUser.Greeting);
// console.log(MyUser.Greeting());
// console.log(MyUser.GreetingTwo());

// const tinderUser = new Object() singleton object
// const tinderUser2 = {}
// console.log(tinderUser2); none singleton object
// const tinderUser2 = {}
// tinderUser2.id = "123user"
// tinderUser2.name = "Pritam"
// tinderUser2.isLoggedIn = false
// console.log(tinderUser2);
// const regularUser = {
//    email: "Pritamsahrauniyar@gmail.com",
//    fullName: {
//       userfullName:{
//          firstName: "Pritam",
//          lastName: "Rauniyar"
//       }
//    }
// }
// console.log(regularUser.fullName.userfullName.firstName);
// const obj1 = {1: "a", 2:"b"}
// const obj2 = {3: "c", 4:"d"}
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);
// const obj4 = Object.assign( {},obj1, obj2)
// console.log(obj4);
// console.log(obj3);
// const user = [
//    {
//       id: 1,
//       email:"PritamSahrauniyar@gmail.com"
//    },
//    {
//       id: 1,
//       email:"PritamSahrauniyar@gmail.com"
//    },
//    {
//       id: 1,
//       email:"PritamSahrauniyar@gmail.com"
//    },   
// ]
// user[1].email
// console.log(MyUser);
// console.log(Object.keys(MyUser));
// console.log(Object.values(MyUser));
// console.log(MyUser.hasOwnProperty('isLoggedIn'));

// const Course = {
//    coursename: "Javascript in deapth",
//    price: "1199",
//    instructor: "Pritam Rauniyar"
// }

// // Course.instructor
// const {instructor: author} = Course
// console.log(author);

 //api destructuring
//  {
//    "name": "Pritam Rauniyar",
//    "course": "Javascript deapth",
//    "price": "Free"

//  }
