// The two most used data structures in JavaScript are Object and Array.

//     Objects allow us to create a single entity that stores data items by key.
//     Arrays allow us to gather data items into an ordered list.

// Although, when we pass those to a function, it may need not be an object/array as a whole. It may need individual pieces.

 //Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.

 //1.array destructuring

 let arr=['john','smith']
// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let[firstName,surname]=arr
console.log(firstName) // John
console.log(surname) //smith

//work with split method split()
//also can use as
// let firstName=arr[0]
// let surname=arr[1]
// console.log(firstName,surname)

// unwanted element thrown away
let [fname, ,title]=["jilius","caeser","consul","of the ","romain"]
console.log(title) //consul

//assignin gto left-side
let user = {};
[user.name, user.surname] = "John Smith".split(' ');

console.log(user.name); // John
console.log(user.surname); // Smith

// looping with entries 
//key value pa6ir
let student={
    name:"rem",
    age:1
}
for(let[key,value] of Object.entries(student)){
    console.log(`${key}:${value}`)
    // name:rem
    // age:1
}


//map
let studentOf=new Map()
studentOf.set("name","ram")
studentOf.set("age",25)
// Map iterates as [key, value] pairs, very convenient for destructuring
for (let [key, value] of studentOf) {
    console.log(`${key}:${value}`); // name:John, then age:30
  }


  
  //swap variable
  let guest = "Jane";
let admin = "Pete";

// Let's swap the values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];

console.log(`${guest} ${admin}`); // Pete Jane (successfully swapped!)

//rest... is used to take aall value after that bvariable
let [name1,name2,...titles]=["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(titles) //[ 'Consul', 'of the Roman Republic' ]

//default valuse
let[a,b]=[]
console.log(a)//undefined
console.log(b) //undefined


// If we want a “default” value to replace the missing one, we can provide it using =:
// default values
let [name = "Guest", surName = "Anonymous"] = ["Julius"];

console.log(name);    // Julius (from array)
console.log(surName); // Anonymous (default used)


//2object deconstructing
//  basic syntax 
// let {var1, var2} = {var1:, var2:}

let options = {
    titleOf: "Menu",
    width: 100,
    height: 200
  };
  //let {title, width, height} = options;
  //or
  let {height, width, titleOf} = { titleOf: "Menu", height: 200, width: 100 }
  console.log(titleOf) //Menu
  console.log(height)//200
  console.log(width)//100
  
//{sourceProperty: targetValue}
//   or 
let {width: w, height: h, titleof} = options;
// width -> w
// height -> h
// title -> title
console.log(w) //100



// declare variable and assign them likewise
// let title, width, height;

// {title, width, height} = {title: "Menu", width: 200, height: 100}; //error occur

//correct one 
// ({title, width, height} = {title: "Menu", width: 200, height: 100});


//3.Nested destructuring
// let Option={ //first object
//     size:{ // second object
//         width:150,
//         height:250
//     },

//     item:['cake','doughnut'], //array

//     extra:true
// }
// ///destructuring the varianle object
// let {
//     size1: { // put size here
//       width1,
//       height1
//     },
//     items1: [item11, item21], // assign items here
//     title1 = "Menu" // not present in the object (default value is used)
//   } =Option
//   console.log(title1)
//   console.log(width1)
//   console.log(height1)
//   console.log(item21)
//   console.log(item11)


  //smart function parameter
  // we pass object to function
let option = {
    title: "My menu",
    items: ["Item1", "Item2"]
  };
  function showMenu({title = "Untitled", width = 200, height = 100, items = []}){
      // title, items – taken from options,
    // width, height – defaults used
    console.log(`${title} ${width} ${height} ${items}`) //Untitled 100 200

  }
  showMenu(options)

  
  //another approach
//   function({
//     incomingProperty: varName = defaultValue
//     .....
//   })
