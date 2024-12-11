// for of  // array specofic loop 

 // [" " , " " , " "]

 // [{ } , { }  , { }]

 const arr = [1,2,3,4,5,6,7];

 for(const num of arr) {
        console.log(num);
 }

 const greetings = [ "hello abhishek how are oyu "]

 for(const greet of greetings) {
    console.log(greet);
 }

 //Maps map is object 

 const map1 =  new Map();
 

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

//console.log(map1.get('a'));
// Expected output: 97

//console.log(map1.size);
// Expected output: 3

map1.delete('b');

//console.log(map1.size);
// Expected output: 2

const map = new Map();

map.set('USA' , "United States Of America");
map.set('IN' , "India");
map.set('UK' , "United Kingdom");

console.log(map);

for (const [key , value ] of map) {
    console.log(key , "=>" , value);
}

const muObject = {
     'game1' : "NFS",
     'game2' : "Spiderman"
}

// for (const [key,vlaue] of myObject) {
//     console.log(key  ,':-'   , value)
// }

// object is not iterable this type

