const useremail = "anshh@gmail.com" //-> got user email
//const useremail = "" -> do not have account 
//const useremail = []; -> got user email


if(useremail){
    console.log("Got user email")
}
else{
    console.log("Do not have account ")
}

//falsy value
// false, 0,-0, BigInt 0n , null ,"", undefined, NaN "except this all are truthy value"

//truthy value
//truth , "0" , 'false' , " ", {} , function(){} 

// Nullish Coalescing Operator (??) : null undefined

// let val1;
// val1 = 5 ?? 10 //-> 5
// val1 = null ?? 10 //-> 10

val1 = undefined ?? 15  //-> 15
val1 = null ?? 23 ?? 45 // -> 23
console.log(val1)

// Ternary Operator 
//condition ? true : false;

const iceTeaPrice = 90;
iceTeaPrice>=80 ? console.log("greater or equal to  than 80") : console.log("less than 80")


let nonEmptyObj = { name: "John", age: 30 };

if (Object.keys(nonEmptyObj).length === 0) {
    console.log("Object is empty");
} else {
    console.log("Object is not empty");  // Output: Object is not empty
}
