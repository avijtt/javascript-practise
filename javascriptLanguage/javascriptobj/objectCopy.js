//object references and copying

/*objects copied as references
but primitive valuse lke string,nnumbers copied as whole*/

let message='hello!'
let phrase=message
console.log(message,phrase)

//a variable assigned to object store not only object in=tself but address in memory also
let nameIs={
    name:"john"
}
/*The object is stored somewhere in memory (at the right of the picture), while the nameIS variable (at the left) has a “reference” to it.

We may think of an object variable, such as nameIS, like a sheet of paper with the address of the object on it.

When we perform actions with the object, e.g. take a property nameIS.name, the JavaScript engine looks at what’s at that address and performs the operation on the actual object.*/
//When an object variable is copied, the reference is copied, but the object itself is not duplicated.
let user={
    name:"john"
}
let admin=user //copy the reference 
admin.name="pete" //change by admin referance
console.log(user.name) //pete , changes seen from user object



//comparision by objects
let a={}
let b=a //copy reference
console.log(a==b) /// true ,both variable reference same objr=ect
console.log(a===b) //true, 

//for two indeperndent objects con comparing gives false
/*
let a = {};
let b = {}; // two independent objects
console.log( a == b ); // false
*/

//const object can be modified
/*
const user = {
  name: "John"
};

user.name = "Pete"; 
console.log(user.name); // Pete
*/

//cloning the objects
let usEr={
    name:"anber",
    age:15,
};
let clone={} //em[ty object]

 //copy all properties and keys of usEr
for(let key in usEr){
    clone[key]=usEr[key]
}
clone.name="heard" //clone object name change 
console.log(clone.name)
console.log(usEr.name) //remain name amber ssme

///we can also use Objectassign method
let User={
    name:"kakashi",
    type:"ninja"
};
let Clone=Object.assign({},User) //copy from User nto Clone  

console.log(Clone.name)
console.log(Clone.type)


//nested cloning

let USer = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

console.log( USer.sizes.height ); // 182

//Now it’s not enough to copy clone.sizes = user.sizes, because user.sizes is an object, and will be copied by reference, so clone and user will share the same sizes:

let USEr = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let CLone = Object.assign({}, USEr);

console.log( USEr.sizes === CLone.sizes ); // true, same object

// user and clone share sizes
USEr.sizes.width = 60;    // change a property from one place
console.log(CLone.sizes.width); // 60, get the result from the other one



//for cloning indeprendently we use StructuredClone(object)
let USER={
    name:"RDj",
    sizes:{
        height:182,
        width:50
    }
};
let CLOne=structuredClone(USER)
console.log(USER.sizes===CLOne.sizes) //false different object

USER.sizes.width=60 //only cjhange in USER
console.log(CLOne.sizes.width) //50
