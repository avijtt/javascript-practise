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

// AND returns the first falsy value or the last value if none were found.

// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0


// The precedence of AND && operator is higher than OR ||.

// NOT(!)
Result= !okay


    //does:
// Converts the operand to boolean type: true/false.
// Returns the inverse value.
alert( !true ); // false
alert( !0 ); // true



//tasks
alert(null || 2 || undefined) //2
alert( alert(1) || 2 || alert(3) ); //2 alert(1) and alert(3 ) return undefined
alert(1 && null && 2); //null  null is falsy on check from left to right

alert( null || 2 && 3 || 4 ); 
//The precedence of AND && is higher than ||, so it executes first.
//The result of 2 && 3 = 3, so the expression becomes:
//null || 3 || 4
//Now the result is the first truthy value: 3.


let userName=prompt('who is there?','');
if(userName=='Admin') {
    let pass=prompt('password?','')
    if(pass=='TheMaster'){
        alert('Welcome Home!');
    }
    else if(pass==null || pass==''){
        alert('cancelled');
    }
    else{
        alert('Wrong password');
    }

}
else if(userName==null || userName==''){
    alert('cancelled');
}
else{
    alert("I don't know you");
}
//nullish coalescing ??
// ?? returns the first argument if it’s not null/undefined. Otherwise, the second one. newly use