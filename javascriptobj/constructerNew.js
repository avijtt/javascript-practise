//constructor used to create new items using"new" operator
function User(name){
    this.name=name; //
    this.Is=true
}

//add propeties
let user=new User("jack")
console.log(user.name)
console.log(user.Is)

//this does:
    //new empty object created and assigned this
    //functio body executes and modifies this 
    // value this return 


/* above function is same as
let user = {
  name: "Jack",
  isAdmin: false
};
*/

//constructer new.target
//inside function we check if it is new or not
function USer(name) {
    if (!new.target) { // if you run me without new
      return new USer(name); // ...I will add new for you
    }
  
    this.name = name;
  }
  
  let john = USer("John"); // redirects call to new User
  console.log(john.name); // John

//return from construvtor 
/*
constructors do not have a return statement. Their task is to write all necessary stuff into this, and it automatically becomes the result.

But if there is a return statement, then the rule is simple:

    If return is called with an object, then the object is returned instead of this.
    If return is called with a primitive, it’s ignored.

In other words, return with an object returns that object, in all other cases this is returned.
*/
function BigUser(){
this.name='john '
return{
    name:"godzilla" //returen this instead of john

}
}
console.log(new BigUser().name) //godzilla

//empty return
function SmallUser() {

    this.name = "John";
  
    return; // <-- returns this
  }
  
  console.log( new SmallUser().name );  // John


//methods in constructor
function UsEr(name) {
    this.name = name;
  
    this.sayHi = function() {
      console.log( "My name is: " + this.name );
    };
  }
  
  let johnn = new UsEr("John");
  
  johnn.sayHi(); // My name is: John

  //calculator
  function Calculator() {

    this.read = function() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    };
  
    this.sum = function() {
      return this.a + this.b;
    };
  
    this.mul = function() {
      return this.a * this.b;
    };
  }
  
  let calculator = new Calculator();
  calculator.read();
  
  console.log( "Sum=" + calculator.sum() );
  console.log( "Mul=" + calculator.mul() );