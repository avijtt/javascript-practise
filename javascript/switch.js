//switch case repalce many if statement

//syntax
//  switch(value){
//      case 'value1'
//  [break]
//  case 'value2'
//  [break]
//  default
//  [break]
//  }

let a=4;
switch(a){
    case 3:
        alert('too small!');
        break;
            case 4:
                alert('exactly!');
                break;
                    case 5:
                        alert('Too large');
                        break;
                                default:
                                    alert('not know values')
}


//both switch case are arbitary
let a1='1';
let b1=0;
switch(a1){
    case b1+1:
    alert('this runs, cause +a is 1 equal to b+1');
    break;
    default:
        alert('doesnot run')
}
// The value that you enter in the prompt will return as a string.
//  For example: when you enter 2 in the prompt, the return value would be string "2".
//   So if you apply + in front of prompt it will convert the string to number.
//    So string "2" would be converted to number 2.


//type matters
let arg = prompt("Enter a value?"); //gives string in returns
switch (arg) {
    case '0': //string 
    case '1': //string     For 0, 1, the first alert runs.
      alert( 'One or zero' );
      break;
  
    case '2': //string     
    //   For 2 the second alert runs.
      alert( 'Two' );
      break;
  
    case 3: //number
      alert( 'Never executes!' );   //   But for 3, the result of the prompt is a string "3", which is not strictly equal === to the number 3. So we’ve got a dead code in case 3! The default variant will execute.

      break;
    default:
      alert( 'An unknown value' );
  }



  let browser=prompt('type here','')
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}

//using if..else
let browsers;
if( browsers == 'Edge') {
  alert("You've got the Edge!");
} else if (browsers == 'Chrome'
 || browsers == 'Firefox'
 || browsers == 'Safari'
 || browsers == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}



let a2= 2;

switch (a2) {

case 1:
a2 = 'one';
break;
case 2:
a2 = 'two';
break;
default:
a2 = 'not found';
}
console.log(`The value is ${a2}`);