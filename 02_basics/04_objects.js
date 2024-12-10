const tinderUser = new Object()
console.log(tinderUser)
tinderUser.id= "123anm" 
tinderUser.name = "Aderty"
 tinderUser.isLoggedIn = false;

 //console.log(tinderUser)

 const regularUser = {
    email: "sdf@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Abhishek",
            lastname: " Raj"
        }
         


    }
 }

 //console.log(regularUser.fullname.userfullname)

 const obj1 = {1:"a" , 2:"b"}
 const obj2  = {3:"c" , 4:"d"}
 //const obj3 = {obj1 , obj2} //wrong
 //const obj3 = Object.assign({} , obj1 , obj2) // less better way
 const obj3 =  {...obj1, ...obj2} // better way
 console.log(obj3)

 const users  =[
    {
         id1 : "123",
         email: "fgs@gmail.com"

    },
    
    {
        id1 : "123",
        email: "fgs@gmail.com"

   },
   {
    id1 : "123",
    email: "fgs@gmail.com"

}
   
]

users[1].email 
console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))

