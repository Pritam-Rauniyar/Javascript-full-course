// const user = {
//     username: "Pritam Rauniyar",
//     loginCount: 9,
//     singedIn: true,
//     getUserDetails: function(){
//         // console.log("Got user details from database");
//         console.log(`username: ${this.username}`);
        
        
//     }

// }
// console.log(user.username);
// console.log(user.getUserDetails());
function YourStatus(username, money, phone, education) {
    this.education = education;
    this.username = username;
    this.money = money;
    this.phone = phone;
    return this
}
const userone = new YourStatus("Pritam Rauniyar", 10000000, 154878944, "BCA")
const usertwo = new YourStatus("Shyam", 10000000, 9767550458, "MCA")
console.log(userone);
console.log(usertwo);
