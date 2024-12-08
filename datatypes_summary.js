// primitive or non-reference in c++


//7 types :- string , number , boolean , null , undefined , Symbol, BigInt



//Reference type in c++ or  NON - PRIMITIVE
 // Array , Objects , functions // datatype of all is object

 const score =900;
 const scoreValue = 9; //number 

 const isLogged = false; // booleaan
 const outsideTemp = null; //null // object when typeof outoutsideTemp
 let userEmail; //undefined 

 const id = Symbol('1234') // symbol make unique
  const anotherId = Symbol('1234') //both are not same 

  //console.log(id===anotherId) //false
  const bigNumber = 1234343454678n // store large number
  console.log(bigNumber);

  const heros = ["shaktiman" , "naagraj"  , "doga"];

  let myObj = {
      name:"Abhishek",
      age: "21",
      college: "MANIT",
      city : "Bhoapl"
  }

  const myFunction = function(){
    console.log("Hi Abhishek Raj");
  }

  console.log(myFunction); //whole expression of function
  console.log(typeof myFunction); // object function
  console.log(typeof outsideTemp); //object 
 