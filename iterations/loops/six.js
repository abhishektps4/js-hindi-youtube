//const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

// const values = coding.forEach((item) => {
//     //console.log(item)
//     return item
// })

//console.log(values)

//NOTE : -  forEach Never return any value if you try to access it give undefined

//const myNums = [1,2,3,4,5,6,7,8,9]
// const newNums = myNums.filter((num) => num>4) // implicit return
// console.log(newNums);

// filter function return vlaues  if condition is true 

// const newNums = myNums.filter((num) => {
//     return num >4; // explicit return
// })

// console.log(newNums);


// const newNums  = []

// myNums.forEach( (num) => {
//     if(num>4) {
//         newNums.push(num)

        
//     }
// })

// console.log(newNums)

const books =[ 
    {title : "Book One" , genre: "Fiction" , publish: 1981 , edition: 2003},
    {title : "Book Two" , genre: "Horror" , publish: 1982 , edition: 2004},
    {title : "Book Three" , genre: "Comedy" , publish: 1998 , edition: 2004},
    {title : "Book Four" , genre: "History" , publish: 2003 , edition: 2003},
    {title : "Book Five" , genre: "Philosphy" , publish: 2007 , edition: 2008}
];

//const userBooks = books.filter( (bk) => bk.genre === 'History') 

let  userBooks = books.filter( (bk) => {
     return bk.edition>2000 && bk.genre ==="History"

})
console.log(userBooks);