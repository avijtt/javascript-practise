//we use map methods like entries,keys and values
// For plain objects, the following methods are available:

//     Object.keys(obj) – returns an array of keys.
//     Object.values(obj) – returns an array of values.
//     Object.entries(obj) – returns an array of [key, value] pairs.

// // why Object.keys(obj)
// objects are a base of all complex structures in JavaScript. So we may have an object of our own like data that implements its own data.values() method. And we still can call Object.values(data) on it.

// The second difference is that Object.* methods return “real” array objects, not just an iterable. That’s mainly for historical reasons.

let user={
    name:'avijeet',
    age:22
}
console.log(Object.keys(user)) //[ 'name', 'age' ]
console.log(Object.values(user))//[ 'avijeet', 22 ]
console.log(Object.entries(user)) //[ [ 'name', 'avijeet' ], [ 'age', 22 ] ]

//to loop over properties 
for(let value of Object.values(user)){
    console.log(value) //avijeet  22
}

//Transforming object
// map,filter not avaoiliable in object like Array
//1 Use Object.entries(obj) to get an array of key/value pairs from obj.
//2.Use array methods on that array, e.g. map, to transform these key/value pairs.
//3.Use Object.fromEntries(array) on the resulting array to turn it back into an object.

let price={
    banana:1,
    orange:2,
    meat:4
}
let doublePrice=Object.fromEntries(
    //convert price object to array , map key/value pair into another pair
    //and then fromEntries gives the object
    Object.entries(price).map(entry=>[entry[0],entry[1]*2])
)
console.log(doublePrice) //{ banana: 2, orange: 4, meat: 8 }

//eg
let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
      };

function sumSalaries(salaries){
    
    let sum=0
    for(let salary of Object.values(salaries)){
        sum+=salary
    } 
    return sum
    //using reduce
   // return Object.values(salaries).reduce((a,b)=>a+b,0)

}
console.log( sumSalaries(salaries) ); //650

