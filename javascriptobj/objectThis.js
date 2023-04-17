//methods in object
//A function that is a property of an object is called its method.
let user={
    name:"hari",
    age:50
};
 
user.sayHi=function(){  //sayHi is function
    console.log("hello!")
}
user.sayHi() //function call hello

//sayHi is meethod of user object


//this method
//use to acecess object

let useR={
    name:"valkyri",
    age:1000,

    say(){ //say is method of object
        console.log(this.name) //this to object
        console.log(this.age)
        }
};
useR.say()


//arrow function
//Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.

let usEr = {
    firstName: "Ilya",
    sayHi() {
      let arrow = () => 
      console.log(this.firstName);
      arrow();
    }
  };
  
  usEr.sayHi(); // Ilya

  /*
  Summary

    Functions that are stored in object properties are called “methods”.
    Methods allow objects to “act” like object.doSomething().
    Methods can reference the object as this.

The value of this is defined at run-time.

    When a function is declared, it may use this, but that this has no value until the function is called.
    A function can be copied between objects.
    When a function is called in the “method” syntax: object.method(), the value of this during the call is object.

Please note that arrow functions are special: they have no this. When this is accessed inside an arrow function, it is taken from outside.
*/


let calc={
    sum(){  //methods
        return this.a+this.b
    },

    mul(){ //methods
        return this.a * this.b
    },
    read(){ //methods
        this.a=+prompt("a?")
        this.b=+prompt("b?")
    }
};

calc.read()
alert(calc.sum())
alert(calc.mul())


let ladder={
    step:0,
    up(){
        this.step++
        return this
    },
    down(){
        this.step--
        return this
    },
    showStep(){
        alert(this.step)
        return this
    }
};
ladder.up().up().down().showStep().down().showStep()