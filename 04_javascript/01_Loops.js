// Loops chapter
// for loops
 for (let i = 2; i <= 20; i++) {
    const element = i;
    if (element == 7) {
        //console.log("7 is lucky number");        
    }
    //console.log(element);   
 }
 for (let i = 1; i <= 20 ; i++) {
    //console.log(`Outer Loop Value is ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        //console.log(`inner loop value ${j} and inner loop ${i}`);
        // console.log(i + "*" + j + "=" + i * j);
    }    
 }

 let myArr = ["shahrukh" , "Ambitab Bachan" , "Sunny Deol"]
 for (let i = 0; i < myArr.length; i++) {
    const element = myArr [i];
    // console.log(element);     
 }
 //break and continue
 for (let i = 0; i <= 20; i++) {
    if (i == 7) {
         //console.log(`my lucky number is ${"7"}`);
        break;
    }
    //console.log(`Value of i is ${i}`);
 }
 for (let i = 0; i <= 20; i++) {
    if (i == 7) {
        //console.log(`my lucky number is ${"7"}`);
        continue;
    }
   // console.log(`Value of i is ${i}`);
 }

 // while loops

 let i = 0
 while ( i <= 100) {
   //console.log(`You are on the right way on your loops ${i}`);
   i = i + 3   
 }

 let myArr1 = ["Shahrukh khan", "Amitabh bachan", "Susant singh"]
 let Arr1 = 0
 while (Arr1 < myArr1.length) {
   // console.log(`Value of the array while loop is ${myArr1}`);
   Arr1 = Arr1 + 1
 }
  let score = 2

  do {
   //console.log(`Current score is ${score}`);
   score ++
  } while (score <= 15);


  // for of loops
  // ["", "", "", ""]
  // [{}, {}, {}, {}]
  
  let arr = [1, 2, 3, 4, 5, 6, 7]
  for (const val of arr) {
   //console.log(val);
  }

  const greeetings = " Hello world!"
  for (const greet of greeetings) {
   //console.log(`text of greetings ${greet}`);
  }
  // map
  const map = new Map()
  map.set("Np", "Nepal")
  map.set("In", "India")
  map.set("US", "United state")
  map.set("BP", "Bangladesh")
  //console.log(map);
  
for (const [key, value] of map) {
   //console.log(key, ":-", value);
}

const myGame = {
   "game" : "Football",
   "game1" : "Cricket",
   "game2" : "Volleyball"
}
// for (const [key, value] of myGame) {
//    console.log(key, ":-", vlaue);
   
// }
const MyObj = {
   Js : "Javascript",
   cpp : "C++",
   rb : "Ruby",
   py : "Python"
}
for (const key in MyObj) {
  //console.log(`${key} shortcut is for ${MyObj[key]}`);
}

const programming = ["js", "rb", "py", "java"]
for (const key in programming) {
  // console.log(key);  
}
// for each loops
const program = ["javascript", "Python", "Java", "C++", "Ruby"]
// program.forEach( function(items){
//    console.log(items);   
// })
program.forEach((items, index, arr) =>{
  // console.log(items, index, arr);
})

// function printme(items){
//    console.log(items);  
// }
// program.forEach(printme)

const mycoding =[
   {
      languageName : "javascript",
      filaName: "js",
   },
   {
      languageName : "python",
      filaName: "py",
   },
   {
      languageName : "Ruby",
      filaName: "Rb",
   },
]
mycoding.forEach((item) => {
   //console.log(item.languageName);
})
const program1 = ["javascript", "Python", "Java", "C++", "Ruby"]
const values = program1.forEach((items) =>{
   //console.log(items);  
})
