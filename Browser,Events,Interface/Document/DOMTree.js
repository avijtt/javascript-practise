//dom tree
//backbone of HTML document is tage
//tage is dom elemnt and is object .
// "nested tags" are called children
//text inside tage is also object

//eg  'document.body' is object represssent the <body> tag
document.body.style.background = 'red'; // make the background red

setTimeout(() => document.body.style.background = '', 3000); // return back
 //maks body running for three seconds


//other bosy manipulation
// innerHTML
// offsetWidth

/* eg of DOM
<!DOCTYPE HTML>
<html>
<head>
  <title>About elk</title>
</head>
<body>
  The truth about elk.
</body>
</html>
*/

//<html> is at the root, then <head> and <body> are its children, etc.
//<head> tage inclides <title> and text#
//For instance, the <title> tag has the text "About elk".
// Please note the special characters in text nodes:

//     a newline: ↵ (in JavaScript known as \n)
//     a space: ␣


// There are only two top-level exclusions:

//     Spaces and newlines before <head> are ignored for historical reasons.
//     If we put something after </body>, then that is automatically moved inside the body, at the end, as the HTML spec requires that all content must be inside <body>. So there can’t be any spaces after </body>.


//DOM table 
// <table id="table"><tr><td>1</td></tr></table>



//other node types
/*
There are 12 node types. In practice we usually work with 4 of them:
    document – the “entry point” into DOM.
    element nodes – HTML-tags, the tree building blocks.
    text nodes – contain text.
    comments – sometimes we can put information there, it won’t be shown, but JS can read it from the DOM.
*/