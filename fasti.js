let fastiDefaults = {
all : {},
max_id : 0,
btn : 'position: absolute; background-color: #606060; border: 5% solid #606060; border-left-color: #787878; border-top-color: #888888; border-right-color: #404040; border-bottom-color: #353535; color: #eeeeee; text-align: center; border-radius: 10%',
img : 'position: absolute;',
add : function(elem){fastiDefaults.all[fastiDefaults.max_id] = elem;
					 document.body.appendChild(fastiDefaults.all[fastiDefaults.max_id]);
					 fastiDefaults.max_id++;
					 return fastiDefaults.max_id - 1;
					},
}

function getX(){
	return document.body.clientWidth;
}
function getY(){
	return document.body.clientHeight;
}
	
function addButton(x, y, txt, pad = 10, style = fastiDefaults.btn, onclick = undefined){
	var btn = document.createElement('button');
	btn.style = style;
	btn.onclick = onclick;
	btn.style.left = x;
	btn.style.top = y;
	btn.style.padding = pad;
	btn.innerHTML = txt;
	return fastiDefaults.add(btn);
}
function addImage(x, y, src, szX = 200, szY = 200, style = fastiDefaults.img, onclick = undefined){
	var img = document.createElement('img');
	img.width = szX; img.height = szY;
	img.src = src;
	img.style = style;
	img.style.left = x;
	img.style.top = y;
	img.onclick = onclick;
	return fastiDefaults.add(img);
}

function delElement(elem){
	document.body.removeChild(fastiDefaults.all[elem]);
	delete fastiDefaults.all[elem];
}
function delAll(){
	keys = Object.keys(fastiDefaults.all);
	for(i = 0; i<keys.length; i++){ document.body.removeChild(fastiDefaults.all[keys[i]]); }
	fastiDefaults.all = {}; 
	fastiDefaults.max_id = 0;
}

}