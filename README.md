[README.md](https://github.com/AbstracD/fasti/files/6581202/README.md)
### `fasti` (FAST Interface) is a `JavaScript library` for simple `JS-only` (with DOM) interface creation.

* [Examples](#examples)
  * [Element Creation](#element-creation)
  * [Delete Element](#delete-element)
* [API](#api)
  * [Creating Elements](#creating-elements)
  * [Misc](#misc)
  * [Deleting elements](#deleting-elements)

# Examples
## Element creation
To create element, use constructions like
```javascript
btn = addButton();
```
After cration you can handle it, change properties or delete.

## Delete Element
There is few functions to delete elements. The most basic one is `delElement(elem);`:
```javascript
btn = addButton(); //Create button
delElement(btn);   //Delete button
```

# API
## Creating Elements
### Add Button
```javascript
addButton(text, action = undefined);
```
Creates a simple button

`text`: type `string`, `onclick`: type `callback`

### Add Image
```javascript
addImage(src, action = undefined);
```
Creates an image

`src`: type `string`, `action`: type `callback`

### Add Header
```javascript
addHeader(text);
```
Creates a `<h2></h2>` header

`text`: type `string`

### Add Text
```javascript
addText(text);
```
Creates a `<p></p>` paragraph

`text`: type `string`

### Add Input
```javascript
addInput();
```
Creates text input, for another input types another functions

### Add Flag
```javascript
addFlag();
[README.md](https://github.com/AbstracD/fasti/files/6581206/README.md)
```
Creates radio input

### Add Checkbox
```javascript
addCheck();
```
Creates checkbox

### Add Field
```javascript
addField(rows, cols); 
```
Creates textarea element

`rows`, `cols`: type `integer`

### Add Reference
```javascript
addRef(text, href);
```
Creates reference, an element and it's href

`text`, `href`: type `string`

### Add list
```javascript
addList(text);
```
Creates `<ul>/<li>` element with text at every `<li>`

`text`: type `array` of `string`

### Add list of references
```javascript 
addRefList(text);
```
Creates `<ul>/<li>` element with references at every `<li>`

`text`: type `object`, where each key/value is text and href

### Add form
```javascript
addForm(action = undefined);
```
Creates form
`action`: type `callback`

Methods:
```javascript
addForm().add(elem);
```
Moves fasti element inside div

`elem`: type `fasti element`

### Add div
```javascript
addDiv();
```
Creates div

Methods:
```javascript
addDiv().add(elem);
```
Moves fasti element inside form

`elem`: type `fasti element`

## Misc
### Get client width
```javascript
var w = getX();
```

### Get client height
```javascript
var h = getY();
```

### Get elements default style
```javascript
getElement();
```
where element is any fasti element, except addRefList, which
uses reference and ul/li style at once.

### Set Background
```javascript
setBG(color);
```
Set `<body>...</body>` color to specified

`color`: type `string`

### Set Title
```javascript
setTitle(text);
```
Set the page name to specified

`text`: type `string`

## Placing Elements
### Set place
```javascript
setPlace(element, x, y)
```
Set `element` position to (`x`,`y`)

`element`: type `fasti object`; `x`, `y`: type `float`

### Restore place
```javascript
setPlaceNone(element) 
```
Returns element to it's default position

`element`: type `fasti object`

## Styling
### Page style update
```javascript
setStyleUpdated();
```
Updates style of every fasti element

### HTML Style
```javascript
setStyleNone();
```
Set HTML style to default

### Light Style
```javascript
setStyleDefault(); 
```
Set fasti light theme to default

### Dark theme
```javascript
setStyleDark();
```
Set fasti dark theme to default

### Button style change
```javascript
setButton(style);
```
Set button default CSS style to given
`style`: type `string`

### Image style change
```javascript
setImage(style);
```
Set image default style
`style`: type `string`

### Header style change
```javascript
setHeader(style);
```
Set header default style
`style`: type `string`

### Text style change
```javascript
setText(style);
```
Set text default style
`style`: type `string`

### Input style change
```javascript
setInput(style);
```
Set input default style
`style`: type `string`

### Text field style change
```javascript
setField(style);
```
Set field default style
`style`: type `string`

### Reference style change
```javascript
setRef(style);
```
Set reference default style
`style`: type `string`

### List style change
```javascript
setList(style);
```
Set list default style
`style`: type `string`

### Form style change
```javascript
setForm(style);
```
Set form default style
`style`: type `string`

### Div style change
```javascript
setDiv(style);
```
Set Div default style
`style`: type `string`

## Deleting elements
### Delete Single Element
```javascript
delElement(elem);
```
Deletes `elem`

`elem`: type `fasti object`

### Delete an Array of elements
```javascript
delSet(arr); 
```
Deletes an Array (`arr`) of `fasti object`

`arr`: type `array` of `fasti object`

### Delete All
```javascript
delAll();
```
Deletes **all** `fasti object`


