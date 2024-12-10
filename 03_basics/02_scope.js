



let a = 300
//var c = 40;
if(true){
    let a =10
    const b = 20
    //console.log("INNER" , a)

}

//console.log(a)
//console.log(b)
//console.log(c)
//console.log(a)

function one(){
    const username = "Abhishek"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website);
   // two()
}

//one() -> nothing 

// if(true) {
//     const username  = "abhi"
//     if(username==="abhi"){
//         const  websites = "youtube"
//         console.log(username  + websites);
//     }
//     //console.log(websites);

// }

//console.log(username)

//++++++++++++++++interesting++++++++++++++++
console.log(addone(5))
function addone(num){
    return num+1;
}




addTwo(7)
const addTwo = function(num1) {
    return num1+2;
}
