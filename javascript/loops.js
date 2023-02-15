//lopps 

// use=> for...in loops over object objective
// use=> for...of and iterables for looping over arrays and iterables objects

// later study in objects part

//while loop
//      while(coondition){
//          //code
//          //loop bosy
//      } //on truthy code body runs


//eg
let i=0;
while(i<3){
    console.log(i);
    i++;
}

//single execution of loop is iteration
let i1=3;
while(i1){           //same as while(i1!=0)
    console.log(i1);
    i1--;
}

//do while loop

// do{
//     //loop body

// }while(condition );

let i3=0;
do{
    console.log(i3); //execute
    i3++;
}while(i3<3) 



//for loop
// for(begin;condition ; step){
//code body
// }
for (let i2 = 0; i2 < 10; i2++) { // shows 0, then 1, then 2
    console.log(i2);
  }


  //simple form
  let i4 = 0;
for (; i4 < 3;) {
  console.log( i4++ );
}


//breaking a loop
let sum = 0;
while (true) {
  let value = +prompt("Enter a number", '');
  if (!value) 
  break; // (*)
  sum += value;
}
alert( 'Sum: ' + sum );

//continue
for(i5=0;i5<10;i5++){
    if(i5%2==0)
    continue;
    alert(i5)
}

//break on specific point us elabel 
outer:for(let a=0;a<3;a++){
    for(b=0;b<3;b++){
        let input=prompt(`value at cordes ${a},${b}`,'');
        if(!input)
        break outer;
    }
}
alert('Done!')

//for innfinite loop use while(true)