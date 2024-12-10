const user = {
    username: "abhishek",
    price: 999,
     
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to websites`)
       // console.log(this);
    }

}

//  user.welcomeMessage()
// user.username = "sam"
//  user.welcomeMessage()
//console.log(this)

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai() // undefined

// const chai = () => {
//     let username  = "hitesh"
//     console.log(this.username)
// }

// chai()

// const addTwo = (num1 , num2) => {
//     return num1+num2
// }
// console.log(addTwo(4,5))


//              implicit return 


const addTwo = (num1 , num2) =>   (num1+num2)
         
//console.log(addTwo(4,5))


// ++++++++++++Immerdiately invoked function expresion +++++ (IIFE)
// (function tut(){
//     console.log(`one connected`);
// })(); //  bcz global scope pollution  are there so we want to remove it 
// // syntax (function)() semicolon is imp here last wala parenthsese k baad 




(  function aurcode() {
    // named IIFE
     console.log(`connected to two`);
})();

( (name) => {
    // unnamed IIFE
    console.log(`connected to two ${name}`);
})('hitesh')

// (function tut(){
//     //     console.log(`one connected`);
// })();


// (function aurcode() {
//     // named IIFE
//     console.log(`connected to two`);
// })();


// ((name) => {
//     // unnamed IIFE
//     console.log(`connected to two ${name}`);
// })('hitesh');

