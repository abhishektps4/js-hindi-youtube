function sayName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("E");
    console.log("K");
    console.log(" ");
    console.log("R");
    console.log("A");
    console.log("J");
}

//sayName();
// function addTwoNumbers(number1 , number2){
//     console.log(number1+number2);
// }

function addTwoNumbers(number1 , number2){
    let result  = number1 + number2;
    //console.log("shity")
    return result;
    //console.log("abhi") ->never execute
}

const result = addTwoNumbers(4, 6);
//console.log("Result:" , result);

function loginUserMessage(username="sam"){
    if(!username){
        console.log("please Enter A Username")
        return
    }
    return '${username} just logged in'
}


//console.log(loginUserMessage("fg")) // fg logged in...

function calculateCartPrice(...num1){ // res operator
    return num1
}

console.log(calculateCartPrice(200, 300, 400, 500))

function calculateCartPrice1(val1, val2,...num1){ // res operator
    return num1
}

console.log(calculateCartPrice1(200, 300, 400, 500))

const user = {
    username: "Abhishek",
    price: 199
}

// function handleObject(anyobject){
//     console.log(`username is ${anyobject.username} ad price is ${anyobject.price}`);
// }

handleObject(user)

//  handleObject1({
//     username: "sam",
//     price: 400
// })

const myNewArray = [200 , 400 , 100 , 600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200 , 400 , 500 , 1000]))