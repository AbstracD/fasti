fasti (FAST Interface) is a JavaScript library for simple JS-only (with DOM) interface creation.

Now it's not so much functions available: 
addButton(x, y, button text, also can have style and uses default library style as default)
addImage(same as addButton, but image source instead of text)
getX(returns client width)
getY(returns client height)
delElement(deletes any element)
delAll(deletes all fasti objects)

so if you want to test this, paste code into html/js, or use require in node, 
but I'm not sure it will work, and try code like

btn1 = addButton(200, 200, 'button');
delElement(btn1);

this will create and remove button.
addElement functions returns element local id in library, and 
elements deleting also with this id.

