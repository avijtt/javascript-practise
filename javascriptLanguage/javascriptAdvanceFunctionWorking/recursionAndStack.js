//recurssion and stack
// basicallly used in function 
// recursion is usually used to solve a problem
//recursion calls itself 



// Two ways of thinking
//1 iteration process
function pow(x,n){
    let result=1
    for(let i=0;i<n;i++){
        result *=x
    }
    return result
}
console.log(pow(2,3)) //8


//2 recursion process
function pow(x,n){
    if(n==1){
        return x
    }
    else{
        return x*pow(x,n-1)
    }
}
console.log(pow(2,3)) //8

//function calls itself on providing condition
//recursion is usually shorter
function pow(x, n) {
    return (n == 1) ? x : (x * pow(x, n - 1));
  }
//limit of depth in javascript engine
// how recursion workd 
/*
When a function makes a nested call, the following happens:

    The current function is paused.
    The execution context associated with it is remembered in a special data structure called execution context stack.
    The nested call executes.
    After it ends, the old execution context is retrieved from the stack, and the outer function is resumed from where it stopped.

*/

//output single linked list
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  function printList(list){
    console.log(list.value);
    if(list.next){
        printList(list.next)
    }
  }
  printList(list)