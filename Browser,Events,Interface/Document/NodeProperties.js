//more properties of DOM

//DOM node classs
// Different DOM nodes may have different properties. For instance, an element node corresponding to tag <a> has link-related properties, and the one corresponding to <input> has input-related properties and so on. Text nodes are not the same as element nodes. But there are also common properties and methods between all of them, because all classes of DOM nodes form a single hierarchy.

//each DOM node belong to corresponding built in class


//classes are:
//EventTarget =root "abstract" class for everything

//Node = root class for all DOM nodes
            //provide functionality:parentNode, nextSibling, childNodes and so on 



//Document ==inherited by HTMLDocument as a whole
            // entry point fofr page 


//CharacterDate == an “abstract” class, inherited by:

    // Text – the class corresponding to a text inside elements, e.g. Hello in <p>Hello</p>.
    // Comment – the class for comments. They are not shown, but each comment becomes a member of DOM.

//Element – is the base class for DOM elements.
        //provides element-level navigation like nextElementSibling, children and searching methods like getElementsByTagName, querySelector.

// HTMLElement is the basic class for all HTML elements. We’ll work with it most of the time.

// It is inherited by concrete HTML elements:

//     HTMLInputElement – the class for <input> elements,
//     HTMLBodyElement – the class for <body> elements,
//     HTMLAnchorElement – the class for <a> elements,


//dom node class we use constructor
alert(document.body.constructor.name) //HTMLBodyElement

alert( document.body instanceof HTMLBodyElement ); // true
alert( document.body instanceof HTMLElement ); // true
alert( document.body instanceof Element ); // true
alert( document.body instanceof Node ); // true
alert( document.body instanceof EventTarget ); // true
 //DOM node are regular js object



 //Tag: nodeName and tagName
 //Given a DOM node, we can read its tag name from nodeName or tagName properties:
 alert( document.body.nodeName ); // BODY
alert( document.body.tagName ); // BODY

//diff in tagname and nodename
//tagName exist only for Elemeent node
//nodeName is defined for any node



//For instance, let’s compare tagName and nodeName for the document and a comment node:

    // for comment
    alert( document.body.firstChild.tagName ); // undefined (not an element)
    alert( document.body.firstChild.nodeName ); // #comment

    // for document
    alert( document.tagName ); // undefined (not an element)
    alert( document.nodeName ); // #document
 



//innerHTML:the contents
//alllow to get the HTML inside the element as a string
alert(document.body.innerHTML) //read currnt contents
document.body.innerHTML="The new body"//repalce it

// If innerHTML inserts a <script> tag into the document – it becomes a part of HTML, but doesn’t execute.


//Beware: “innerHTML+=” does a full overwrite
//We can append HTML to an element by using elem.innerHTML+="more html".



//outerHTML: full HTML of the element
    //contains the full HTML of the element. That’s like innerHTML plus the element itself.

    //Beware: unlike innerHTML, writing to outerHTML does not change the element. Instead, it replaces it in the DOM.


/*
<div>Hello, world!</div>

<script>
  let div = document.querySelector('div');

  // replace div.outerHTML with <p>...</p>
  div.outerHTML = '<p>A new element</p>'; // (*)

  // Wow! 'div' is still the same!
  alert(div.outerHTML); // <div>Hello, world!</div> (**)
</script>
*/

// So what happened in div.outerHTML=... is:

//     div was removed from the document.
//     Another piece of HTML <p>A new element</p> was inserted in its place.
//     div still has its old value. The new HTML wasn’t saved to any variable.


//nodeValue/data :text node content
//The innerHTML property is only valid for element nodes.
/*
<body>
  Hello
  <!-- Comment -->
  <script>
    let text = document.body.firstChild;
    alert(text.data); // Hello

    let comment = text.nextSibling;
    alert(comment.data); // Comment
  </script>
</body>
*/


//textContent: pure text
// provides access to the text inside the element: only text, minus all <tags>.

/*
<div id="news">
  <h1>Headline!</h1>
  <p>Martians attack people!</p>
</div>

<script>
  // Headline! Martians attack people!
  alert(news.textContent);
</script>
*/



// With innerHTML we’ll have it inserted “as HTML”, with all HTML tags.
// With textContent we’ll have it inserted “as text”, all symbols are treated literally.


// let name=prompt("name:","<b>Winnie-the-Pooh!</b>")
// elem1.innerHTML=name
// elem2=innercontent=name



// The first <div> gets the name “as HTML”: all tags become tags, so we see the bold name.
// The second <div> gets the name “as text”, so we literally see <b>Winnie-the-Pooh!</b>.



// //More properties
// DOM elements also have additional properties, in particular those that depend on the class:

//     value – the value for <input>, <select> and <textarea> (HTMLInputElement, HTMLSelectElement…).
//     href – the “href” for <a href="..."> (HTMLAnchorElement).
//     id – the value of “id” attribute, for all elements (HTMLElement).


