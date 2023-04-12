// simple function approach

// let func=(arg1,arg2......,argN)=>expression;
        // does create func as function with areuments and evwluate expression


    

// // i.e let func = function(arg1, arg2, ..., argN) {
//   return expression;
// };


let func=(a,b)=>a+b;


/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/
console.log(func(1,2))
//  (a,b)=>a+b means function accept two arguments and return a+b as expression


// if only one parameter 
let double=n=>n*2;
    // roughly as let double =function(n){
    //              return n*2
    // }

    console.log(double(3));


// if there is no argument parameter is empty

let sayhi=()=>console.log("sayHi")
sayhi()




// dynamically  use of arrow function
// let age=prompt("tell me Ur age",18)
// let welcome=(age<18)? 
// ()=>console.log("hello"): //onel line action
// ()=>console.log("greeting")

//welcome()


//multiline arrow function

//argumwnt take from left of => and expression shown in right

let sum=(a,b)=>{ //opens multiline function
    let result=a+b
    return result; //need explicit return
}

console.log(sum(4,5))



/*
Arrow functions are handy for simple actions, especially for one-liners. They come in two flavors:

    Without curly braces: (...args) => expression – the right side is an expression: the function evaluates it and returns the result. Parentheses can be omitted, if there’s only a single argument, e.g. n => n*2.
    With curly braces: (...args) => { body } – brackets allow us to write multiple statements inside the function, but we need an explicit return to return something.

*/

//task
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }

  ask(
"do you agree?",()=>console.log("agreed"),()=>console.log("cancel execution")

  )


