//basic operators in maths

//1. Unary operator
let x = 1;
x = -x;
alert(x);
console.log(x);  //unary operator applied

//2. Binary operator
let a = 1, y = 2;
alert(y - a); //binary operator applied


// other maths function like add,sub,rem,div,expo can be used

//for exponential
console.log(2 ** 4)



//string concatation or combine
// '+' is used as concatation of string
let str = "my" + "name"
alert(str); //myname

alert('1' + 2); // "12"
alert(2 + '1'); // "21"

alert(4 + 4 + '6') ///86
//others operators  are not used as concatation

// Converts non-numbers
alert(+true); // 1
alert(+"");   // 0


//works with variables
let apples = "2";
let banana = "4";
alert(apples + banana);


//Assignment
let val = 3;
console.log(val)

//modify assignment operator in place
let n = 2;
n = n + 5; //now n=7
n = n * 2 //now n=14
console.log(n);

n1 *= 3 + 5; // right part evaluated first, same as n *= 8
console.log(n1); // 16

//incrementer and decrementer applied only prefix v
let count = 2;
count++;
console.log(count); //applied for variable

        //Bitwise operator
            // The list of operators:
            // AND ( & )
            // OR ( | )
            // XOR ( ^ )
            // NOT ( ~ )
            // LEFT SHIFT ( << )
            // RIGHT SHIFT ( >> )
            // ZERO-FILL RIGHT SHIFT ( >>> )

            //comma
            let comma=(1+2 ,3+4)
            console.log(a) //print only 3+4 diacard 1+2
