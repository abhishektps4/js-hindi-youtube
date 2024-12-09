const marvel_heroes = ["thor" , "Ironman"  , "Spiderman"]
const dc_heroes = ["Superman1" , "flash" , "Batman"]

//marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])
//marvel_heroes.concat(dc_heroes)
//console.log(marvel_heroes)
// push(4 ele)  concat are differeent  bcz concate return new array with 6 ele

// const  allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes)

// const all_newheroes = [...marvel_heroes , ...dc_heroes] // spread operator
// console.log(all_newheroes);

const anotherArray   =  [1,2,3,[4,5,6] ,7 , [8,8,9,[56 ,67]]];
const  real_another_Array = anotherArray.flat(Infinity) //(2)
console.log(real_another_Array)
console.log(Array.isArray("Abhishek Raj"))
console.log(Array.from("Abhishek Raj"))

console.log(Array.from({name : "Abhishek"})) // interesting 

let  score1 =100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))