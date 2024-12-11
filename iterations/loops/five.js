const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

// forEach loop

// coding.forEach( function name(item) {
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }

//coding.forEach(printMe()) -> wrong give error 
//coding.forEach(printMe)

coding.forEach( (item , index , arr) => {
    console.log(item ,index, arr)
})

const myCoding = [
    {
        languageName: "Javascript" ,
        languageFileName: "js"
    },
    {
        languageName: "c++" ,
        languageFileName: "cpp"
    },
    {
        languageName: "Java" ,
        languageFileName: "java"
    },
    {
        languageName: "Python" ,
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
     console.log(item.languageFileName);
})