fasti (FAST Interface) is a JavaScript library for simple JS-only (with DOM) interface creation.

Element creation

Functions for element init is:

addButton(text, onclick = undefined); //creates button
addImage(src, style = ''); //creates image
addHeader(text); //creates h2 element
addText(text); //creates p element
addInput(); //creates text input, for another input types another functions
addFlag(); //creates radio input
addCheck(); //creates checkbox
addField(rows, cols); //creates textarea element
addRef(txt, href); //creates reference, a element and it's href
addList(txt); //creates ul/li, text is an array with li values

To create element, use constructions like
btn = addButton();
This way you can simply handle it, change properties or delete.

There is few functions to delete elements:

delElement(elem); //deletes fasti element
delSet(elem); //deletes an array of fasti elements
delAll(); //deletes all fasti elements

And some miscellaneous functions:

getX(); //returns client width
getY(); //returns client height
setBG(color); //changing body color
setTitle(text); //changing title
setPlace(element, x, y) //changing element place
setPlaceNone(element) //returns element to it's default position
setStyleNone(); //set defaults HTML style
setStyleDefault(); //set default fasti light theme
setStyleDark(); //set fasti dark theme

