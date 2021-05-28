let fastiDefaults = {
all : {},
max_id : 0,

style : {'btn' : '',
		 'img' : '',
		 'header' : '',
		 'text' : '',
		 'input' : '',
		 'ref': '',
		 'div' : '',
		 'form' : '',
		 'ul' : '',
		 'textarea' : ''
		},

add : function(elem){
					 fastiDefaults.all[fastiDefaults.max_id] = elem; 
					 elem.fd_id = fastiDefaults.max_id;
					 document.body.appendChild(fastiDefaults.all[fastiDefaults.max_id]);
					 fastiDefaults.max_id++;
					 return elem;
					},
updateStyle : function(){
						 fd = fastiDefaults;
						 keys = Object.keys(fd.all);
						 for(i = 0; i<keys.length; i++){
							 fd.all[keys[i]].style = fd.style[fd.all[keys[i]].fd_type];
						 }
						}
}

function getX(){return window.innerWidth;}
function getY(){return window.innerHeight;}


function setPlace(elem, x, y){
	source = fastiDefaults.all[elem];
	source.style.position = 'absolute';
	source.style.top = x;
	source.style.left = y;
}
function setPlaceNone(elem){fastiDefaults.all[elem].style.position = 'static';}

function setBG(color){document.body.style.background = color;}

function setButton(style){fastiDefaults.style['btn'] = style;}
function setImage(style){fastiDefaults.style['img'] = style;}
function setHeader(style){fastiDefaults.style['header'] = style;}
function setText(style){fastiDefaults.style['text'] = style;}
function setInput(style){fastiDefaults.style['input'] = style;}
function setField(style){fastiDefaults.style['textarea'] = style;}
function setRef(style){fastiDefaults.style['ref'] = style;}
function setList(style){fastiDefaults.style['ul'] = style;}
function setForm(style){fastiDefaults.style['form'] = style;}
function setDiv(style){fastiDefaults.style['div'] = style;}

function setTitle(title){
	var title_src = document.createElement('title');
	title_src.innerHTML = title;
	document.head.appendChild(title_src);
}
function setStyleNone(){ 
	fd = fastiDefaluts;
	setBG('#aaaaaa');
	fd['btn'] = fd['img'] = fd['header'] = fd['text'] = fd['input'] = fd['textarea'] = fd['ref'] = fd['ul'] = fd['form'] = fd['div'] = '';
	fastiDefaults.updateStyle();
}
function setStyleDefault(){ 
	fd = fastiDefaults.style;
	setBG('#bbbb99');
	fd['btn'] = 'padding: 1%; background-color: #ddddbb; border: 5%; border-left-color: #eeeecc; border-top-color: #ffffdd; border-right-color: #aaaa88; border-bottom-color: #999977; color: #000000; text-align: center; border-radius: 10%';
	fd['header'] = 'color: #444444;';
	fd['text'] = 'font-size: 120%; color: #444444;';
	fd['input'] = '';
	fd['list'] = 'color: #444444';
	fastiDefaults.updateStyle();
}
function setStyleDark(){ 
	fd = fastiDefaults.style;
	setBG('#333333');
	fd['btn'] = 'padding: 1%; background-color: #606060; border: 5% solid #606060; border-left-color: #787878; border-top-color: #888888; border-right-color: #404040; border-bottom-color: #353535; color: #eeeeee; text-align: center; border-radius: 10%';
	fd['header'] = 'color: #aaaaaa;';
	fd['text'] = 'font-size: 120%; color: #aaaaaa;';
	fd['input'] = '';
	fd['list'] = 'color: #aaaaaa';
	fastiDefaults.updateStyle();
}
function setStyleUpdated(){
	fastiDefaults.updateStyle();
}
	
	
function addButton(txt, action = undefined){
	fd = fastiDefaults;
	var elem = document.createElement('button');
	elem.fd_type = 'btn';
	elem.style = fd.style[elem.fd_type];
	elem.onclick = action;
	elem.innerHTML = txt;
	return fd.add(elem);
}
function addImage(src, action = undefined){
	fd = fastiDefaults;
	var elem = document.createElement('img');
	elem.fd_type = 'img';
	elem.src = src;
	elem.onclick = action;
	elem.style = fd.style[elem.fd_type];
	return fd.add(elem);
}
function addHeader(txt){
	fd = fastiDefaults;
	var elem = document.createElement('h2');
	elem.fd_type = 'header';
	elem.innerHTML = txt;
	elem.style = fd.style[elem.fd_type];
	return fd.add(elem);
}
function addText(txt){
	fd = fastiDefaults;
	var elem = document.createElement('p');
	elem.fd_type = 'text';
	elem.style = fd.style[elem.fd_type];
	elem.innerHTML = txt;
	return fd.add(elem);
}
function addInput(){
	fd = fastiDefaults;
	var elem = document.createElement('input');
	elem.fd_type = 'input';
	elem.type = 'text';
	elem.style = fd.style[elem.fd_type];
	return fd.add(elem);
}
function addFlag(){
	fd = fastiDefaults;
	var elem = document.createElement('input');
	elem.fd_type = 'input';
	elem.type = 'radio';
	elem.style = fd.style[elem.fd_type];
	return fd.add(elem);
}
function addCheck(){
	fd = fastiDefaults;
	var elem = document.createElement('input');
	elem.fd_type = 'input';
	elem.type = 'checkbox';
	elem.style = fd.style[elem.fd_type];
	return fd.add(elem);
}
function addField(rows, cols){
	fd = fastiDefaults;
	var elem = document.createElement('textarea');
	elem.fd_type = 'textarea';
	elem.rows = rows;
	elem.cols = cols;
	elem.style = fd.style[elem.fd_type];
	return fd.add(elem);
}
function addRef(txt, href){
	fd = fastiDefaults;
	var elem = document.createElement('a');
	elem.fd_type = 'ref'
	elem.innerHTML = txt;
	elem.style = f.style[elem.fd_type];
	elem.href = href;
	return fd.add(elem);
}
function addList(txt){
	fd = fastiDefaults;
	elem = document.createElement('ul');
	elem.fd_type = 'ul';
	elem.style = fd.style[elem.fd_type];
	elem.innerHTML = '';
	for(i = 0; i<txt.length; i++){
		point = addText('<li>'+txt[i]);
		elem.appendChild(point);
	}
	return fd.add(elem);
}

function addDiv(){
	fd = fastiDefaults;
	elem = document.createElement('div');
	elem.fd_type = 'div';
	elem.style = fd.style[elem.fd_type];
	elem.add = function(_elem){
							  document.body.removeChild(_elem);
							  elem.appendChild(_elem);
	}
	return fd.add(elem);
}
function addForm(action = undefined){
	fd = fastiDefaults;
	elem = document.createElement('form');
	elem.fd_type = 'form';
	elem.style = fd.style[elem.fd_type];
	elem.action = action;
	elem.add = function(_elem){
							  document.body.removeChild(_elem);
							  elem.appendChild(_elem);
	}
	return fd.add(elem);
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

