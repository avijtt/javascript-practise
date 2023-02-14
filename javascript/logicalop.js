//four logical operators

// OR(||), AND(&&), NOT(!), Nullish Coalesing(??)

//1. OR(||)
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

let hour=9;
if(hour<10 || hour >18){
    alert('office closed');
}
//more condition
let Hour=12;
let isWeekend=true;
if(Hour<10 || Hour>18 || isWeekend){
    alert('close office')

}

//or for choose one data
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder


//&& (AND)
result = a && b;
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false


let hoUr = 12;
let minute = 30;

if (hoUr == 12 && minute == 30) {
  console.log( 'The time is 12:30' );
}
