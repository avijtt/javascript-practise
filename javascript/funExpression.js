//another type of function
function say(){
    alert('hi')
}

// another one 
let say=function(){  //sy is variable ang assigned a function
    alert('hi')
}



//function as value 
function sayHi() {
    alert( "Hello" );
  }

  alert( sayHi ); // shows the function code

  //We can copy a function to another variable:
function sayHi1(){ //   1.create 
    alert('hello')
}
let func=sayHi1; // 2.copy
func();  //3. run the copy
sayHi1(); //4. run 1.


//callback function
function ask(question,yes,no){
    if(confirm(question) ) 
    yes()
    else
      no() 
}
function showok(){
    alert('you agreed')
}
function showcancel(){
    alert( 'cancelled')
}

ask('do you agree:, showOk, showCancel')


//function to write shorteer code
function ask1(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  ask1(
    "Do you agree?",
    function() { 
        alert("You agreed."); 
    },
    function() {
         alert("You canceled the execution."); 
        }
  );


// //   sayHi("John"); // Hello, John

// function sayHi(name) {
//     alert( `Hello, ${name}` );
//   }

//can be written as
sayHi11('john');
function sayHi11(name){
    alert(`hello,${name}`);
}


let age = prompt("What is your age?", 18);
let welcome;
if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now