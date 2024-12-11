const  myObject  = {
    js: 'jvascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// for in loop can be  used for objects

for(const key in myObject) {
    //console.log(`${key} shortcut for ${myObject[key]}`);
}

const arr = ["js" , "cpp" , "py" , "java" , "ruby"];

for(const key in arr) {
    //console.log(key)
    //console.log(arr[key]);
}

// const map = new Map();

// map.set('USA' , "United States Of America");
// map.set('IN' , "India");
// map.set('UK' , "United Kingdom");

// for (const key in map){
//     console.log(map[key]);
// }

// map is not iterable in "for in loop" halanki ye debug console me koi errror nhi deta hai or kuch bhi print nhi krta hai 

