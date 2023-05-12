//DOM allows to do anything with elements and contents , need corresponding DOM object
// all  op in DOM start with document object
/*

               document

               document.documentElement      <HTML>

               document.body                 <BODY>
-----------------------------------------------------------
                  ^
                  |
                parentNode
                  |  
prevSibling<-----<DIV>---->nextSibling
                childNode
                /        \
        firstChild       lastChild          


*/

//On top: documentElement and body

//top tree nodes are as socument property:
    //The topmost document node is document.documentElement. That’s the DOM node of the <html> tag.
    //<body> = document.body
    //Another widely used DOM node is the <body> element – document.body.

    // <head> = document.head
    // The <head> tag is available as document.head.



//eg
/*
<html>

<head>
  <script>
    alert( "From HEAD: " + document.body ); // null, there's no <body> yet
  </script>
</head>

<body>

  <script>
    alert( "From BODY: " + document.body ); // HTMLBodyElement, now it exists
  </script>

</body>
</html>
*/


//Children: childNodes, firstChild, lastChild

//two words used :
// child nodes  and descendence

// elements that are direct children. In other words, they are nested exactly in the given one. For instance, <head> and <body> are children of <html> element.

//in below here <body> has children <div> and <ul> 
/*
<html>
<body>
  <div>Begin</div>

  <ul>
    <li>
      <b>Information</b>
    </li>
  </ul>
</body>
</html>
*/

//…And descendants of <body> are not only direct children <div>, <ul> but also more deeply nested elements, such as <li> (a child of <ul>) and <b> (a child of <li>) – the entire subtree.
for(let i=0;i<document.body.childNodes.length;i++){
    alert(document.body.childNodes[1])

}


// /Properties firstChild and lastChild give fast access to the first and last children.
/*
elem.childNodes[0] === elem.firstChild
elem.childNodes[elem.childNodes.length - 1] === elem.lastChild
*/

//There’s also a special function elem.hasChildNodes() to check whether there are any child nodes.


//DOM collection
//child nodeis collection of special arrary like iterable objects
// There are two important consequences:

//    1. We can use for..of to iterate over it:

for (let node of document.body.childNodes) {
  alert(node); // shows all nodes from the collection
}
    // That’s because it’s iterable (provides the Symbol.iterator property, as required).


// 2.array method not work
alert(document.body.childNodes.filter); //undefined (there's no filter method!)

    // rather use Array.from to create a real array collection
    alert(Array.from(document.body.childNodes).filter) /// function


//DOM colection are read only
//Dom xolection are live
//Don't use for...in loop over collection

//sibling and parent
// sibling ara nodes that are children of same parent
        //<head> and <body> are siblings:

// body> is said to be the “next” or “right” sibling of <head>,
// <head> is said to be the “previous” or “left” sibling of <body>.
 



// The next sibling is in nextSibling property, and the previous one – in previousSibling.
// The parent is available as parentNode.

//parent of body id html
alert(document.body.parentNode===document.documentElement) //true

// after <head> goes <body>
alert( document.head.nextSibling ); // HTMLBodyElement

// before <body> goes <head>
alert( document.body.previousSibling ); // HTMLHeadElement



// Element only -Navigation 

    // children – only those children that are element nodes.
    // firstElementChild, lastElementChild – first and last element children.
    // previousElementSibling, nextElementSibling – neighbor elements.
    // parentElement – parent element.




// tables
/*
The <table> element supports (in addition to the given above) these properties:

    table.rows – the collection of <tr> elements of the table.
    table.caption/tHead/tFoot – references to elements <caption>, <thead>, <tfoot>.
    table.tBodies – the collection of <tbody> elements (can be many according to the standard, but there will always be at least one – even if it is not in the source HTML, the browser will put it in the DOM).

<thead>, <tfoot>, <tbody> elements provide the rows property:

    tbody.rows – the collection of <tr> inside.

<tr>:

    tr.cells – the collection of <td> and <th> cells inside the given <tr>.
    tr.sectionRowIndex – the position (index) of the given <tr> inside the enclosing <thead>/<tbody>/<tfoot>.
    tr.rowIndex – the number of the <tr> in the table as a whole (including all table rows).

<td> and <th>:

    td.cellIndex – the number of the cell inside the enclosing <tr>.

An example of usage:
*/
 // get td with "two" (first row, second column)
 let td = table.rows[0].cells[1];
 td.style.backgroundColor = "red"; // highlight it


//There are two main sets of them:

// For all nodes: parentNode, childNodes, firstChild, lastChild, previousSibling, nextSibling.
// For element nodes only: parentElement, children, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling.



