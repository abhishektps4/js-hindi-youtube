let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString)
// console.log(myDate.toUTCString)
// console.log(myDate.toLocaleTimeString)
// console.log(typeof myDate)

let myCreateDate = new Date(2005 , 8 , 29)
let my = new Date("2023-09-29")
let my1 = new Date("09-29-2022")
// console.log (myCreateDate.toDateString())
// console.log (my)
// console.log(my1) 

let mytime = Date.now()
// console.log(mytime) 
// console.log(myCreateDate.getTime()) 
// console.log(Date.now()) 
// console.log(Math.floor(Date.now()/1000)) ;

let newDate = new Date()
console.log(newDate) 
console.log(newDate.getMinutes())
console.log(newDate.getDay())
console.log(newDate.getMonth()+1)
newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "GMT"

})