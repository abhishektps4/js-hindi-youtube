// for

for(let i =0; i<10; i++){
    const element = i;
    if(element==7){
        ///console.log("7 is best number")
    }
    //console.log(element)
}

for(let i=0; i<10; i++){
    //console.log(`outer loop value : ${i}`);
    for(let j=0; j<i ; j++){
        //console.log(`inner loop value : ${j}`);
    }
}

let arr   = ["flash" , "batman" , "superman"]


for(let index = 0; index<arr.length; index++){
    const ele = arr[index];
    //console.log(ele);
}


// break and continue

for(let index = 0; index<arr.length; index++){
    const ele = arr[index];
    if(ele=='batman'){
        //break; // ->flash
        //continue; // -> flash superman
    }
    console.log(ele);
}



