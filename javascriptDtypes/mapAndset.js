//objects are used for key value store
//arrays are used to store ordered collection


// Map
// a collection of keyed data items like object
//LLOW KEYS of any data type
// methods
    // new Map()  - make new Map
    //Map.set(key,value)   - store value by key
    //Map.get(key)  - return value by key; undefined if key not exist
    //Map.has(key)  ` returns true if key present
    //Map.delete(key)   -remove the element
    //Map.clear()   -remove everything from Map
    //Map.size  -return elemant count


let map=new Map()
map.set('1','str1') //string
map.set(1,'num1') //number
map.set(true,'bool1') //boolean

//// remember the regular Object? it would convert keys to string
console.log(map.get(1)) //num1
console.log(map.get('1')) //str1
console.log(map.size) //3

//Using objects as keys is one of the most notable and important Map features. The same does not count for Object. String as a key in Object is fine, but we can’t use another Object as a key in Object.




// How Map compares keys

// To test keys for equivalence, Map uses the algorithm SameValueZero. It is roughly the same as strict equality ===, but the difference is that NaN is considered equal to NaN. So NaN can be used as the key as well.

// This algorithm can’t be changed or customized.

// chaining
map.set('1','str2')
.set('2','str3')
.set('4','str4')


// loop in Map
// // methods
//     map.keys()
//     map.values()
//     map.entries()

//eg
//Object.entries: Map from Object
let recipeMap=new Map([ //array pass on crEATIOn as key value like object
    ['cucumber',500],
    ['tomaaaots',300],
    ['onion',400]
])

//iterate oner keys
for(let vegetable of recipeMap.keys()){
    console.log(vegetable) // cucumber, tomatoes, onion
}

//iterate over values
for(let amount of recipeMap.values()){
    console.log(amount)/// 500, 350, 50
}


//iterate over entries
for(let entry of recipeMap){
    console.log(entry) //cucumber,500 (and so on)
}

// for plane Object we use "object.entries(object_name)" built-in method
let obj={
    name:'john',
    age:30
}
let mapp=new Map(Object.entries(obj))
console.log(mapp.get('name')) //john
// console.log(mapp.get('age')) //30
//  Object.entries returns the array of key/value pairs: [ ["name","John"], ["age", 30] ]. That’s what Map needs.



// //Object.fromEntries: Object from Map
// There’s Object.fromEntries method that does the reverse: given an array of [key, value] pairs, it creates an object from them:

let prices=Object.fromEntries([
    ['banana',1],
    ['orange',2],
    ['meat',4]
])
// // prices = { banana: 1, orange: 2, meat: 4 }
let Obf=Object.fromEntries(map.entries())
console.log(prices.orange) //2
console.log(Obf.banana)//1 



// // set
// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.
//methods
    //new set([iterables]) -create a set,iterables object is provides
    //set.add(value) -add a value
    //set.has() -emoves the value, returns true if value
    //set.clear() -clear the set
    //set.size -element count

let set=new Set()
let val1={name:'mary'}
let val2={name:'jane'}
let val3={name:'sung-oh'}

//visit some users
set.add(val1);
set.add(val2);
set.add(val1);
set.add(val3);
set.add(val3);

console.log(set.size) //3
for(let item of set){
console.log(item.name)} 
// mary
// jane
// sung-oh


//iteration of set
// let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set)
 console.log(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
  console.log(value);
});


// The same methods Map has for iterators are also supported:

//     set.keys() – returns an iterable object for values,
//     set.values() – same as set.keys(), for compatibility with Map,
//     set.entries() – return the total entries 