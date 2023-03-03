// built in functions are alert prompt confirm


//function decleration
function showMessage() {
    console.log("hello")
}



//parameter of function
function name(par2, par1) {
    //body
}

//eg
function showMEssage() {
    console.log('hello!')
}
showMEssage()

//local variable
//declare inside function
function showMEssage1() {
    let message = 'hello there'
    console.log(message)
}
showMEssage1()


//outer variable
let userName = 'john'
function showMEssage2() {
    let message1 = 'hello' + userName
    console.log(message1)
}
showMEssage2()

//modify outer variable
let userName1 = 'hariprasad'
function showMEssage3() {
    userName1 = "laxmimata" //change outer variable
    let message2 = 'hello' + userName1
    console.log(message2)

}
console.log(userName1) //hariprasad before function
showMEssage3()
console.log(userName1) //laxmimata after function call

//function local variable used in above function


// parameters into function
function showMEssage4(from,Text){ //parameters from and text
    alert(from + ':' +Text)
}
showMEssage4('ann','Hello');
showMEssage4('Ann','Whats up')

//default values
function showMEssage5(from,text='hello and Nameste'){
    alert(from + ':' +text)
}
showMEssage5("ann")


// alternative way of using default to check the value
function showMessage6(text) {
    // if text is undefined or otherwise falsy, set it to 'empty'
    text = text || 'empty';
    
  }

// //   same as 
// /function showMessage(text) {
//     // ...
  
//     if (text === undefined) { // if the parameter is missing
//       text = 'empty message';
//     }
  
//     alert(text);
//   }
  
//   showMessage(); // empty message



// returning a value
//function can return a value 
function sum(a,b){
    return a+b;
}

let result=sum(1,2)
console.log(result)

// The directive return can be in any place of the function. 
// When the execution reaches it, the function stops, 
// and the value is returned to the calling code (assigned to result above).

//eg
function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('Do you have permission from your parents?');
    }
  }
  
  let age = prompt('How old are you?', 18);
  
  if ( checkAge(age) ) { // return single function
    alert( 'Access granted' );
  } else {
    alert( 'Access denied' );
  }

  //return without value
  function showMovie(age){
    if(!checkAge(age)){
        return;
    }alert('showing you to movie')
  }


// return a undefined 
function doNothing() { /* empty */ }
alert( doNothing() === undefined ); // true