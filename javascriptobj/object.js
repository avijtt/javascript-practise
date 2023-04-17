// objects uses keyed collection of various data
// created under curly braces{...}  associated as key:value
// key is string and value be anything
// real life as object is like cabinet and key be file and value be content
// key and value seperated by : symbol

// literals and properties

let user = {  //onject
    name: 'john', //key and value given
    age: 30 //key and value given
};
//The resulting user object can be imagined as a cabinet with two signed files labeled “name” and “age”.


//properties can be access by . dot notation
console.log(user.name)
console.log(user.age)


//add new properties
user.isAdmin = true

//delete the properties
delete user.age

///can also use multiword key 
let uSer = {
    name: 'jhonny',
    age: 33,
    "likes bird": true //(likes bird) is multiword key and use under " " 
}

//for multiword key 
//user.likes bird=true is incorrect to access
//so USE SQUARE BRACKET to access

//set
user["likes bird"] = true

//get
console.log(user["likes bird"])


//[] provides a way to obtain the property of key as a result of wxpression 
let fly = "likes birds";

// same as user["likes birds"] = true;
user[fly] = true;
//fly  variable can be calculates at runtime depend upon user.use to access property of jey

//eg
let uSEr = {
    name: 'harke',
    age: 32,
};

let key = prompt('what do U want to know about uSEr ?', "name")
alert(uSEr[key]) // if use . gives undefined
let key1 = prompt('what age know about uSEr ?', "age")
alert(uSEr[key1])

//computed properties
//we can use [] in object literals when creating  an object

let fruit = prompt("which fruit to buy:", "apple")
let bag = {
    [fruit]: 5, //name is taken from  variable fruit
};

alert(bag.apple) //5 if fruit=apple
//meaning [fruit ] means that the property name should be taken from fruit
//if enterd apple ,bag will become apple:5


//[] takes property from variable 
//[] is powerful than . operator
//allows any property names and variables
let fRuit = 'apple'
let bAg = {
    [fRuit + "computer"]: 10, //bAg.applecomputers
}


//property value shorthand
//actual real life code
function makeUser(name, age) {
    return {
        name: name,
        age: age,
    };
}
let makeuser = makeUser('ram', 25)
alert(makeuser.name) //ram
alert(makeuser.age)// 25

function vehicle(model, number) {
    return {
        model: model,
        number: number
    };
}
let myVehicle = vehicle('ferari', "mnmn")
alert(myVehicle.model)
alert(myVehicle.number)

//above example properties have same names as variabled;
//tis makes code shorter
//can be write name:name as name

function useer(name, age) {
    return {
        name,
        age,
    };
}
let ma = useer('ma', 10)
alert(ma.name)
alert(ma.age)

//variable name must not be like keyword like for let return
//but for object it us allowed
let obj = {
    for: 1,
    let: 2,
    return: 3,
};
alert(obj.let + obj.for + obj.return) //6

//0 becomes string 0
/*
let obj = {
  0: "test" // same as "0": "test"
};

*/

//a special property named __proto__. We can’t set it to a non-object value:
let obj1 = {};
obj1.__proto__ = 5; // assign a number
alert(obj1.__proto__); // [object Object] - the value is an object, didn't work as intended

// As we see from the code, the assignment to a primitive 5 is ignored.


//properties existence test, 'in' operator
//reading un existed property return undefined
let user1 = {};

alert( user1.noSuchProperty === undefined ); // true means "no such property"

//in operator
// "key" in object 

let user2={
name:"ram",
age:38
};
alert("age" in user2)// same as alert(user2.age) that gives true
alert("name" in user2) //same as alert(user2.name) that gives true
alert("kaka" in user2)//false, taht user.kaka not exist

// Please note that on the left side of in there must be a property name.
 //That’s usually a quoted string.


//  in used when object properety exist
let obj2 = {
    test: undefined
  };
  
  alert( obj2.test ); // it's undefined, so - no such property?
  alert( "test" in obj2 ); // true, the property does exist!


//for..in loop
/*
sepcial loop of in opereator
  for(key in objects)
    //executr body of esch key among object properties

*/
let myname={
    name:'mark',
    age:48,
    isAdmin:true
};
for(let prop  in myname){
    alert(prop ) //keys

    alert(myname[prop ])//property of myname object keys
    
}



//ordered like an object
//integer sorted 
let codes={
    "49":"germany",
    "41":"switerzerland",
    "44":"england",
    //.....
    "1":"nepal"
};
for( let val in codes){
    alert(val) //1 41 44 49 
}

 //if keys are like "+49", "+44" they will not sorted
 
/*
Integer properties? What’s that?

The “integer property” term here means a string that can be converted to-and-from an integer without a change.
So, "49" is an integer property name, because when it’s transformed to an integer number and back, it’s still the same. But "+49" and "1.2" are not:
*/
// Number(...) explicitly converts to a number
// Math.trunc is a built-in function that removes the decimal part
alert( String(Math.trunc(Number("49"))) ); // "49", same, integer property
alert( String(Math.trunc(Number("+49"))) ); // "49", not same "+49" ⇒ not integer property
alert( String(Math.trunc(Number("1.2"))) ); // "1", not same "1.2" ⇒ not integer property

let salaries={
    john:100,
    ann:160,
    pete:130
};
let sum=0
for(let sal in salaries)
{

    sum +=salaries[sal]
}
alert(sum) 



let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
function isMultiply(menu){
    for(let keY in menu){
        if(typeof menu[keY]=='number')
        menu[keY] *=2
    }
}