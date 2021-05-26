fasti (FAST Interface) is a JavaScript library for simple JS-only (with DOM) interface creation.

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
addButton(text, onclick = undefined);
```
Creates a simple button

`text`: type `string`, `onclick`: type `callback`

### Add Image
```javascript
addImage(src, style = '');
```
Creates an image

TODO: Explain

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
Creates reference, a element and it's href

`text`, `href`: type `string`

### Add list
```javascript
addList(text);
```
Creates HTML list

`text`: type `array` of `string`

## Misc
### Get client width
```javascript
var w = getX();
```

### Get client height
```javascript
var h = getY();
```

### Set Background
```javascript
setBG(color);
```
Set `<body>...</body>` color to specified

`color`: type `idk`

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

`element`: type `fasti object`;7

## Styling
## HTML Style
```javascript
setStyleNone();
```
Set HTML style to default

## Light Style
```javascript
setStyleDefault(); 
```
Set fasti light theme to default

### Dark theme
```javascript
setStyleDark();
```
Set fasti dark theme to default

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


