const Query = (e)=> document.querySelector(e);

function AddEvent(el,evt,funct,bool=false){
return Query(el).addEventListener(evt,funct,bool);
}

function AddInnerHtml(el,dom){
return Query(el).innerHTML = dom;
}

function AddClass(el,dom){
return document.getElementById(el).classList.add(dom);
}


function RemoveClass(el,dom){
return document.getElementById(el).classList.remove(dom);
}

function ToggleClass(el,dom){
return document.getElementById(el).classList.toggle(dom);
}

function ContainsClass(el,dom){
return document.getElementById(el).classList.contains(dom);
}



