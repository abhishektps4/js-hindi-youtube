const myNums = [1,2,3]


// const myTotal  = myNums.reduce(function(acc , currValue) {
//     console.log(`acc : ${acc} and currValue : ${currValue}`);
//     return acc+currValue
// },0)

//const myTotal  = myNums.reduce((acc, curr) => acc+curr,0)

//console.log(myTotal)

const shoppingCart =[

 {
    itemName: "js course",
    price: 2999
},
 {
    itemName: "java",
    price: 1999
},
 {
    itemName: "cpp",
    price: 3999
},
 {
    itemName: "python",
    price: 999
}
];

const priceToPay = shoppingCart.reduce((acc , item) => acc +item.price ,0);

console.log(priceToPay)

