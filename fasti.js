let fastiDefaults = {
all : {},
max_id : 0,

btn : '',
img : '',
header : '',
text : '',
input : '',
ref: '',
list: '',

add : function(elem){
	fastiDefaults.all[fastiDefaults.max_id] = elem; 
	elem.fd_id = fastiDefaults.max_id;
	document.body.appendChild(fastiDefaults.all[fastiDefaults.max_id]);
	fastiDefaults.max_id++;
	return elem;
},
}

const getX = () => {return window.innerWidth;}
const getY = () => {return window.innerHeight;}

const setPlace = (elem, x, y) => {source = fastiDefaults.all[elem];
	source.style.position = 'absolute';
	source.style.top = x;
	source.style.left = y;
}
const setPlaceNone = elem => {fastiDefaults.all[elem].style.position = 'static';}

const setBG = color => {document.body.style.background = color;}
const setTitle = title => {
	var title_src = document.createElement('title');
	title_src.innerHTML = title;
	document.head.appendChild(title_src);
}
const setStyleNone = () =>{ f = fastiDefaluts;
	setBG('#aaaaaa');
	f.btn = f.header = f.text = f.input = '';
}
const setStyleDefault = () =>{ f = fastiDefaults;
	setBG('#bbbb99');
	f.btn = 'padding: 1%; background-color: #ddddbb; border: 5%; border-left-color: #eeeecc; border-top-color: #ffffdd; border-right-color: #aaaa88; border-bottom-color: #999977; color: #000000; text-align: center; border-radius: 10%';
	f.header = 'color: #444444;';
	f.text = 'font-size: 120%; color: #444444;';
	f.input = '';
	f.list = 'color: #444444';
}
const setStyleDark = () =>{ f = fastiDefaults;
	setBG('#333333');
	f.btn = 'padding: 1%; background-color: #606060; border: 5% solid #606060; border-left-color: #787878; border-top-color: #888888; border-right-color: #404040; border-bottom-color: #353535; color: #eeeeee; text-align: center; border-radius: 10%';
	f.header = 'color: #aaaaaa;';
	f.text = 'font-size: 120%; color: #aaaaaa;';
	f.input = '';
	f.list = 'color: #aaaaaa';
}

	
	
function addButton(txt, action = undefined){
	var btn = document.createElement('button');
	btn.style = fastiDefaults.btn;
	btn.onclick = action;
	btn.innerHTML = txt;
	return fastiDefaults.add(btn);
}
function addImage(src, onclick = undefined){
	var img = document.createElement('img');
	img.src = src;
	img.onclick = onclick;
	return fastiDefaults.add(img);
}
function addHeader(txt){
	var h_src = document.createElement('h2');
	h_src.style = fastiDefaults.header;
	h_src.innerHTML = txt;
	return fastiDefaults.add(h_src);
}
function addText(txt){
	var t_src = document.createElement('p');
	t_src.style = fastiDefaults.text;
	t_src.innerHTML = txt;
	return fastiDefaults.add(t_src);
}
function addInput(){
	var input = document.createElement('input');
	input.type = 'text';
	input.style = fastiDefaults.input;
	return fastiDefaults.add(input);
}
function addFlag(){
	var input = document.createElement('input');
	input.type = 'radio';
	input.style = fastiDefaults.input;
	return fastiDefaults.add(input);
}
function addCheck(){
	var input = document.createElement('input');
	input.type = 'checkbox';
	input.style = fastiDefaults.input;
	return fastiDefaults.add(input);
}
function addField(rows, cols){
	var field = document.createElement('textarea');
	field.rows = rows;
	field.cols = cols;
	return fastiDefaults.add(field);
}
function addRef(txt, href){
	var ref = document.createElement('a');
	ref.innerHTML = txt;
	ref.style = fastiDefaults.ref;
	ref.href = href;
	document.body.appendChild(ref)
	return fastiDefaults.add(ref);
}
function addList(txt){
	ul = document.createElement('ul');
	ul.style = fastiDefaults.list;
	for(i = 0; i<txt.length; i++){
		li = document.createElement('li');
		li.innerHTML = txt[i];
		ul.appendChild(li);
	}
	document.body.appendChild(ul)
	return ul;
}


function delElement(elem){
	document.body.removeChild(elem);
	delete fastiDefaults.all[elem.fd_id];
}
function delSet(set){
	for(i = 0; i<set.length; i++){
		document.body.removeChild(set[i]);
		delete fastiDefaults.all[set[i].fd_id];
		}
	set = []
}
function delAll(){
	keys = Object.keys(fastiDefaults.all);
	for(i = 0; i<keys.length; i++){ document.body.removeChild(fastiDefaults.all[keys[i]]); }
	fastiDefaults.all = {}; 
	fastiDefaults.max_id = 0;
}

