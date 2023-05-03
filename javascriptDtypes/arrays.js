//decleretion
// //two syntax
// let arr=new Array()
// let Arr=[] //mostly used syntax

let fruits=['apple','orange','mango','plum']
//accessing the array value
console.log( fruits[0] ); // apple
console.log( fruits[1] ); // orange
console.log( fruits[2] ); // mango
console.log( fruits[3] );//plum


//replacing the item value
fruits[2]='pear'

//or add new one
fruits[4]='banana'

//count array length
console.log(fruits.length) //5

//show whole array
console.log(fruits)

//get last element by 'at'
console.log(fruits.at(-1)) //banana



//store elements of any type
let arrays=['apple',
{name:'John'},
true,
function() {console.log('hello');}
]

// get the object at index 1 and then show its name
console.log( arrays[1].name ); // John

// get the function at index 3 and run it
arrays[3](); // hello

//push/pop
//pop
//extrract last elemant
console.log(fruits.pop()) //remove last element'
console.log(fruits) //only four element
// Both fruits.pop() and fruits.at(-1) return the last element of the array, but fruits.pop() also modifies the array by removing it.


//push
fruits.push("avacardo")
console.log(fruits) //add avacardo to array


//shift
//extract first element
console.log(fruits.shift()) //remove first element apple
console.log(fruits)

//unshift
//add element to beginning
fruits.unshift("watermelon")
console.log(fruits)

// Methods push and unshift can add multiple elements at once:
fruits.push("strawberry","timur") //add last
fruits.unshift("guava","berry") //add at first
console.log(fruits)


//INTERNALS
// An array is a special kind of object. The square brackets used to access a property arr[0] actually come from the object syntax. That’s essentially the same as obj[key], where arr is the object, while numbers are used as keys.

let arr=fruits ///copy reference
console.log(arr===fruits) //true
arr.push('pappaya') //mosify array by reference
console.log(arr)
console.log(fruits)


//loops
//oldest way
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]) //show fruit 
}
//another way
//iterate over the array elemanet
for(let fruit of fruits){
    console.log(fruit) //show fruit
}
// The for..of doesn’t give access to the number of the current element, just its value, but in most cases that’s enough. And it’s shorter.



//Multidimensional arrays
let matrix=[
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
]
console.log(matrix[1][1]) //7
console.log(matrix[1][2]) //8


//toString
// Arrays have their own implementation of toString method that returns a comma-separated list of elements.
let mat=[1,2,3]
console.log(mat)
console.log(mat.toString()) //1,2,3

alert( [] + 1 ); // "1"
alert( [1] + 1 ); // "11"
alert( [1,2] + 1 ); // "1,21"

// When the binary plus "+" operator adds something to a string, it converts it to a string as well, so the next step looks like this:
alert( "" + 1 ); // "1"
alert( "1" + 1 ); // "11"
alert( "1,2" + 1 ); // "1,21

/*Don’t compare arrays with ==

Arrays in JavaScript, unlike some other programming languages, shouldn’t be compared with operator ==.

This operator has no special treatment for arrays, it works with them as with any objects.

Let’s recall the rules:

    Two objects are equal == only if they’re references to the same object.
    If one of the arguments of == is an object, and the other one is a primitive, then the object gets converted to primitive, as explained in the chapter Object to primitive conversion.
    …With an exception of null and undefined that equal == each other and nothing else.

The strict comparison === is even simpler, as it doesn’t convert types.

So, if we compare arrays with ==, they are never the same, unless we compare two variables that reference exactly the same array.*/

alert( [] == [] ); // false
alert( [0] == [0] ); // false

alert( 0 == [] ); // true
alert('0' == [] ); // false


//find aum
function findSum(){
let number=[]
while(true){
    let n=prompt("Enter a number: ")
    if(n==null || n=="" ||isFinite(n)){
        break;
}
number.push(n)

let sum=0
for(num of number){
    sum +=number
}
return sum
}
console.log(findSum())