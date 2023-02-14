// used as branching true or false
//eg    
    let year=prompt("In which ema script was publsihed?",'');
    if(year==2015) {
        alert('you are right')
            alert("you are smart")

        }
        else{
            alert("how can you be so wrong?")
        }


    // A number 0, an empty string "", null, undefined, and NaN all become false. 
    // Because of that they are called “falsy” values.

    //several condition
    let Year=prompt("which year EMA script published?",'');
    if(Year==2015){
        alert("Right answer");
    }
    else if(Year<2015){
        alert("too early");
    }
    else{
        alert("too late")
    }

    //asign in variable and check the codition


    //conditional operator
    let accessAllowed;
    let age=prompt("how old are you",'');
    if(age>18){
        accessAllowed=true;
    }
    else{
        accessAllowed=false;
    }
    alert(accessAllowed)
    // above can be simplified as   condition?val1:val2;

//eg
        let Age=prompt("tell me your age?",'');
        let accesAllowed=(Age>18)?true:false;
        console.log(accesAllowed)

        //multiple ? case
        let yAge=prompt('age?',5);
        let message=(yAge<3)?'hi baby!':(yAge<18)?'hello!':(yAge<100)?'Greetings':'what an unusual age!';
        alert(message);


        //another example
        let company = prompt('Which company created JavaScript?', '');
        (company == 'Netscape') ? alert('Right!') : alert('Wrong.');




        //tasks
        let mes;
        let login=prompt('who are you?','')
        if(login=="employe"){
            mes='hello';
        }
        else if(login=='director'){
            mes='Greetings';
        }
        else if(login==''){
            mes='No login';
        }
        else{
            mes='';
        }
        alert(mes)


        //using conditional way
        let Login=prompt('who are You?','');
        let meSSage = (Login == 'Employee') ? 'Hello' :
        (Login == 'Director') ? 'Greetings' :
         (Login == '') ? 'No login' :'';
        alert(meSSage);

        
