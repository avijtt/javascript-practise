// greater than,less than,greater than and equls to,less tahn and equal to,Equals,not equals to
// >,<,>=,<=,==,!=


// boolean result provide 
    //either true or false


//eg
    console.log(2>1) ///true
    console.log(3<1) //false
    console.log(2==1) //false
    console.log(2!=1) //true


    //comparision result can be assigned to variable
    let result=5>4;
    console.log(result); //true

// string comparision
    //js use dictionary order // unicode  of js lowercase is greater thsn upppercasee
    console.log('a'<'t') //true
    console.log("avijeet"<"hari") //true


    //compare string and numbers
    console.log('10'>5) // true  //string '10' converted to number


    //for boolean True=1 and false=0
    console.log( true == 1 ); // true
    console.log( false == 0 ); // true

    //example
    let a=0;
    console.log(Boolean(a));

    let b="0";
    console.log(Boolean(b));

    console.log(a==b);//convert b value as 0 in js


    //comparision of null and undefines

    //strict equality always false
     console.log(null===undefined)  //false

     //normal comparision
    console.log(null==undefined)  //true



    // Strange result: null vs 0
    // compare null with a zero:

    //NULL TREATED AS 0 IN BELOW CASE
        alert( null > 0 );  // false
        alert( null == 0 ); // false
        alert( null >= 0 ); // true


        // An incomparable undefined
        // The value undefined shouldn’t be compared to other values:

        
        //UNDEFINED CONVERTED AS NaN
        alert( undefined > 0 ); // false 
        alert( undefined < 0 ); // false 
        alert( undefined == 0 ); // false 