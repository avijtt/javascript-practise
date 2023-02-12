//typeofgives the nature of expression either boolean,number,string

    // howw to ScriptProcessorNode

    // let variable=expressio;
    //     variable2=conversion_state(variable)


//string conversion

let value=true;
alert(typeof value);  //boolean  automatically change by alert

value=String(value);
alert(typeof value) //change into string



// numeric conversion

alert("10"/"2")  //change string to number on division

let value1="123"  //string
alert(typeof value1) //string

let num=Number(value1);
alert(typeof num)

//if string has no numbe rit gives NaN

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

