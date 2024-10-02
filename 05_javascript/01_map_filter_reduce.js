// filter
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNum.filter((val) => val > 6 )
// console.log(newNums);
 const newNums = []
 myNum.forEach((val) => {
    if (val > 5) {
        newNums.push(val)
    }
 })
//  console.log(newNums);
const books = [
    {title: "Book One", genre: "Fiction", publish: 1981},
    {title: "Book Two", genre: " Non-Fiction", publish: 1992},
    {title: "Book Three", genre: "History", publish: 1999},
    {title: "Book Four", genre: "Science", publish: 1989}, 
    {title: "Book Five", genre: "Non-Fiction", publish: 2009},
    {title: "Book Six", genre: "Fiction", publish: 1987},
    {title: "Book Seven", genre: "History", publish: 1986},
    {title: "Book Eight", genre: "Science", publish: 2011},
    {title: "Book Nine", genre: "Non-Fiction", publish: 1981},
]
const UserBooks = books.filter((bk)=> bk.genre === "History")
// console.log(UserBooks);
const UserBooks2 = books.filter((bk)=> bk.publish >= 2000 && bk.genre === "Science")
// console.log(UserBooks2);
