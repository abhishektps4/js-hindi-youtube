// singleton 
//object leterals se declare singleton nhi bnta hai
//constructor se singleton bnta hai
//Object.create //constructor bnta  hai
const mySym = Symbol("key1")
const JsUser = {
  
    "full name" : "Asgit Bhakre",
    name: "Abhishek Raj",
    [mySym]: "mykey1",
    Age: 18,
    location: "Lucknow",
    email : "abhishek@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday"]
}
    console.log(JsUser.email)
    console.log(JsUser["email"])
    //console.log(JsUser."full name") -> wrong
    console.log(JsUser["full name"])
    console.log(JsUser.mySym)
    console.log(typeof mySym)
    console.log(JsUser[mySym])

    JsUser.email = "abhi@gmial.com"
    console.log(JsUser.email)
    //Object.freeze(JsUser)
    JsUser.email = "der@gmail.com"
    console.log(JsUser)

    JsUser.greeting = function(){
        console.log(`Heeloo Js user ${this.name}`)
    }



    console.log(JsUser.greeting())

