//primitive is value of primitive types and 7 primitives types
//objects has function to use that is called method
/*let john = {
    name: "John",
    sayHi: function() {
      console.log("Hi buddy!");
    }
  };
  
  john.sayHi(); // Hi buddy!
  
  So here we’ve made an object john with the method sayHi.
  */



  //Primitive as objext
  /*
  Here’s the paradox faced by the creator of JavaScript:

    There are many things one would want to do with a primitive, like a string or a number. It would be great to access them using methods.
    Primitives must be as fast and lightweight as possible.

The solution looks a little bit awkward, but here it is:

    Primitives are still primitive. A single value, as desired.
    The language allows access to methods and properties of strings, numbers, booleans and symbols.
    In order for that to work, a special “object wrapper” that provides the extra functionality is created, and then is destroyed.

The “object wrappers” are different for each primitive type and are called: String, Number, Boolean, Symbol and BigInt. Thus, they provide different sets of methods.

// For instance, there exists a string method str.toUpperCase() that returns a capitalized str.

Here’s how it works:
*/
let str = "Hello";

console.log( str.toUpperCase() ); // HELLO
/*
Simple, right? Here’s what actually happens in str.toUpperCase():

    The string str is a primitive. So in the moment of accessing its property, a special object is created that knows the value of the string, and has useful methods, like toUpperCase().
    That method runs and returns a new string (shown by console.log).
    The special object is destroyed, leaving the primitive str alone.

So primitives can provide methods, but they still remain lightweight.

The JavaScript engine highly optimizes this process. It may even skip the creation of the extra object at all. But it must still adhere to the specification and behave as if it creates one.
*/



