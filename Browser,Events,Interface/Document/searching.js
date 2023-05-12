// getElement* and querySelector*

//  1. document.getElementById or just id
//if element has id attribute we can geet element esing method document.getElementById(id)
//eg
let elem=document.getElementById('elem')
elem.style.background='green' //make it green

//id must be unique



//querySelectorAll
// document.querySelectorAll returns the first element from the CSS selector
//In other words, the result is the same as elem.querySelectorAll(css)[0], but the latter is looking for all elements and picking one, while elem.querySelector just looks for one. So it’s faster and also shorter to write.


// getElementsBy* 

// elem.getElementsByTagName(tag) looks for elements with the given tag and returns the collection of them. The tag parameter can also be a star "*" for “any tags”.
// elem.getElementsByClassName(className) returns elements that have the given CSS class.
// document.getElementsByName(name) returns elements with the given name attribute, document-wide. Very rarely used.

let inputs = table.getElementsByTagName('input');

for (let input of inputs) {
  alert( input.value + ': ' + input.checked );
}
//returns collection
let form=document.getElementsByName(my-form)[0]

//search class inside form
let articles=form.getElementsByClassName('article')
alert(articles.length)

//live collection
//ll methods "getElementsBy*" return a live collection. Such collections always reflect the current state of the document and “auto-update” when it changes.


//In contrast, querySelectorAll returns a static collection. It’s like a fixed array of elements.



// querySelector returns first element only
// querySelector returns the first element that matches the selector.
// querySelector returns null if no element matches the selector.

