//javascript was initally created for web browser . niw can be used in web-apps,server,host. JavaScript specification calls that a host environment.

//host environment
    //privides own object and function to language core .web browser control web pages .Node.js provides server-side rendering
/*
         how javascript runs 

               ______ WINDOW_________
             /          |              \
            /           |               \
    (DOM)  /      (BOM) |                \(JAVASCRIPT)
     DOCUMENT       navigator          object
                    screen             array
                    location           function
                    frames
                    history
                    XMLHTTPREQUEST

//1  root is called "window"
    First, it is a global object for JavaScript code, as described in the chapter Global object.
    Second, it represents the “browser window” and provides methods to control it.
*/
function sayHi(){
    console.log("hello");
} 
console.log(window.sayHi()) //GLOBAL FUNCTION ARE METHOSD IN GLOBAL OBJECT


//we can use browser window to show heigh
console.log(window.innerHeight)//942



//DOM(document object model)
//DOM is a programming interface for HTML and XML documents.
//represent all  page content 
//DOM is a tree-like structure
//DOM is composed of Nodes,objects,properties,events

        // document is main entry point to ppage 

//shange backhround color to red
document.body.style.background='red'

//change after 1 s
setTimeout(() => document.body.background='',1000
);


//DOM is not only for browser
    //erver-side scripts that download HTML pages and process them can also use the DOM. They may support only a part of the specification though.


// CSSom for styling
    //css object model for styling
    // used together with the DOM when we modify style rules for the document.




//BOM
// browser object model
//represent object provides by broewser
        // The navigator object provides background information about the browser and the operating system. There are many properties, but the two most widely known are: navigator.userAgent – about the current browser, and navigator.platform – about the platform (can help to differentiate between Windows/Linux/Mac etc).

        // The location object allows us to read the current URL and can redirect the browser to a new one.


  //how location used
  alert(location.href) //show current url
  if(confirm("go to winkepedia?")){
    location.href="https://www.wikipedia.org"
  }      
//functions alert/confirm/prompt are also a part of the BOM


