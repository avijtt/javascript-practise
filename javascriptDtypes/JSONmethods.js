// JSON methods, toJSON
// object handling is earier when on JSON format 

// JSON.stringify
//JSON (JavaScript Object Notation) is a general format to represent values and objects.
//asy to use JSON for data exchange when the client uses JavaScript and the server is written on Ruby/PHP/Java/Whatever.




/*
JSON.stringify ()   to convert objects into JSON.
JSON.parse()        to convert JSON back into an object.
*/

let student={
    name:'harka',
    age:52,
    isAdmin:true,
    course:['HTML','CSS','Java'],
    spouse:null
}
let json=JSON.stringify(student)
console.log(typeof(json)) //string
console.log(json)
/*/* JSON-encoded object:
{
    "name":"harka",
    "age":52,
    "isAdmin":true,
    "course":["HTML","CSS","Java"],
    "spouse":null

}
*/
//The method JSON.stringify(student) takes the object and converts it into a string.

// Strings use double quotes. No single quotes or backticks in JSON. So 'John' becomes "John".
// Object property names are double-quoted also. That’s obligatory. So age:30 becomes "age":30.

//JSON supports folloeing data types
    //obhect{...}
    //array[....]
    //primitives
        //stringd
        //numbers
        //boolean value
        ///null

// a number in JSON is just a number
console.log( JSON.stringify(1) ) // 1

// a string in JSON is still a string, but double-quoted
console.log( JSON.stringify('test') ) // "test"

console.log( JSON.stringify(true) ); // true

console.log( JSON.stringify([1, 2, 3]) ); // [1,2,3]

/*
JSON is data-only language-independent specification, so some JavaScript-specific object properties are skipped by JSON.stringify.

Namely:

    Function properties (methods).
    Symbolic keys and values.
    Properties that store undefined.
*/
let user={
    sayHi(){
        console.log('hello') //ignored
    },
    [Symbol("id")]:123, //ignores
    something:undefined //ignored
}
console.log(JSON.stringify(user)); // // {} (empty object)

//nested object
let meetUp={
    title:"conference",
    room:{
        number:23,
        parrticipants:['john','anna']
    }
}
console.log(JSON.stringify(meetUp));
/* The whole structure is stringified:
{
  "title":"Conference",
  "room":{
    "number":23,
    "participants":["john","anna"]},
}
*/

//no cyclic referencee
// let room = {
//     number: 23
//   };
  
//   let meetup = {
//     title: "Conference",
//     participants: ["john", "ann"]
//   };
  
// meetUp.place=room
// room.occupy=meetUp
// JSON.stringify(meetUp) // Error: Converting circular structure to JSON

//formatting space
console.log(JSON.stringify(user, null, 2));



// Custom “toJSON”
//Like toString for string conversion, an object may provide method toJSON for to-JSON conversion. JSON.stringify automatically calls it if available.
let room = {
    number: 23,
    toJson(){
        return this.number
    }
  };
  
  let meetup = {
    title: "Conference",
    date: new Date(Date.UTC(2023, 0, 1)),
    room //reference 
  };
  
  console.log( JSON.stringify(meetup) );
  /*
    {
      "title":"Conference",
      "date":"2017-01-01T00:00:00.000Z",  // (1)
      "room": {"number":23}               // (2)
    }
  */

    console.log( JSON.stringify(meetup) );
    /*
      {
        "title":"Conference",
        "room": 23
      }
    */




// JSON.parse() 
// To decode a JSON-string, we need another method named JSON.parse.
// Syntax:    let value = JSON.parse(str, [reviver]);
                            // str=JSON-string parse and reviver=opt function for [key,value]

  // stringified array
let numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);
console.log( numbers[1] ); // 


 let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
//  parse the json format 
let User = JSON.parse(userData);

console.log( User.friends[1] ); // 1 
console.log(User.name)  //john


//using reviver
//we got meetup object from server
// title: (meetup title), date: (meetup date)
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}'

// parse the object 
let metup=JSON.parse(str)
//console.log(metup.date.getDate())c//error

 //because metup.date is string not a Date object.how parse that string into a Date?
 // use reviver function(key ,value )
 let metUp=JSON.parse(str,function (key,value) {
    if(key==='date')  return new Date(value)
    return value
 })  
 console.log(metUp.date.getDate()) //30 



 //nested objects
 let schedules = `{
    "meetups": [
      {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
      {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
    ]
  }`;
  schedule=JSON.parse(schedules,function (key,value) {
    if(key==='date') return new Date(value)
    return value
    
  })
  console.log(schedule.meetups[1].date.getDate()) //18
  console.log(schedule.meetups[1].date.getFullYear()) //2017

  





















































































































































































































































































































































































































































