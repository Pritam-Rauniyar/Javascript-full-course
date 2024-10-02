// Reduce mathod
const MyNumbers = [1, 2, 3, 4, 5, 6, 7, 8]
const addNum = 0;
// const addAllNum = MyNumbers.reduce(
//     function (acc, currVal1) {
//         console.log(`acc ${acc} and ${currVal1}`);
        
//         return acc + currVal1        
//     }, 0)
const addAllNum = MyNumbers.reduce( (acc, curr)  => acc + curr, 0)
// console.log(addAllNum);



const shoppingCart = [
    {
        itemName: "Apple",
        price: 189,
    },
    {
        itemName: "Mango",
        price: 251,
    },
    {
        itemName: "Banana",
        price: 150,
    },
    {
        itemName: "Orange",
        price: 180,
    },
]
const MyBill = shoppingCart.reduce( (acc, price) => (acc + price.price), 0)
console.log(MyBill);
