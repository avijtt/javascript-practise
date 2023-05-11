//js built in date feature
// Date and Time
    //stores date,time and provides methode for date.time management
    //store creation modification measure time and print current date


// creation
// to create new Date object call new Date() eith one argument

 //new Date()
//  without arg give current Date and Time
let now=new Date()
console.log(now) //2023-05-10T12:24:22.930Z


// //new Date(milliseconds)
 // Create a Date object with the time equal to number of milliseconds (1/1000 of a second) passed after the Jan 1st of 1970 UTC+0.   
let Jan01_1970=new Date(0)
console.log(Jan01_1970) //1970-01-01T00:00:00.000Z

//// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970=new Date(24*3600*1000)
console.log(Jan02_1970)//1970-01-02T00:00:00.000Z

// 31 Dec 1969
let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log( Dec31_1969 );

// new Date(datestring)
///If there is a single argument, and it’s a string, then it is parsed automatically. The algorithm is the same as Date.parse()

let date=new Date("2023-05-10")
console.log(date) //2023-05-10T00:00:00.000Z
//alert(date) //Wed May 10 2023 05:45:00 GMT+0545 (Nepal Time)


//new Date(year, month, date, hours, minutes, seconds, ms)
let dateAll = new Date(2011, 0, 1, 2, 3, 4, 567);
console.log(dateAll)

//Accessing all info
//methods
    //getFullyear(4 digit)
    //getMonth()    
    //getDay()
    //getDate()
    //getHour(),getMinute(),getSecond()

let nowDate=new Date();
console.log(nowDate.getHours()) //18
console.log(nowDate.getUTCHours()) //12 london time 
console.log(nowDate.getTimezoneOffset()) -345

//Setting date components
// setFullYear(year, [month], [date])
// setMonth(month, [date])
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms)
// setTime(milliseconds)


//methods with multiple components
let today=new Date()
today.setHours(0)
console.log(today) //today.setHours()
today.setHours(0, 0, 0, 0)
console.log(today) //2023-05-09T18:15:00.000Z


// Date.now()
let start = Date.now(); // milliseconds count from 1 Jan 1970

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // done

console.log( `The loop took ${end - start} ms` ); // subtract numbers, not dates

//BenchMarking
//If we want a reliable benchmark of CPU-hungry function, we should be careful.
function diffSubstract(date1,date2) {
    return date2-date1
}
//or
function diffGetTime(date1,date2) {
    return date2.getTime()-date1.getTime()
    
}
//These two do exactly the same thing, but one of them uses an explicit date.getTime() to get the date in ms, and the other one relies on a date-to-number transform. 

function diffSubtract(date1, date2) {
    return date2 - date1;
  }
  
  function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
  }
  
  function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();
  
    let fiest = Date.now();
    for (let i = 0; i < 100000; i++) 
    f(date1, date2);
    return Date.now() - fiest;
  }
  
  alert( 'Time of diffSubtract: ' + bench(diffSubtract) + 'ms' );
  alert( 'Time of diffGetTime: ' + bench(diffGetTime) + 'ms' );

//date parse from string
let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
alert(ms); // 1327611110417  (timestamp)
