
btns=document.getElementsByClassName("btos");

menu_btn=document.getElementById("menu_b");

btn1=document.getElementById("bto1");

btn2=document.getElementById("bto2");

btn3=document.getElementById("bto3");

osc=document.getElementById("oscuro");

bar_busca=document.getElementById("searchBar");

btn1.onclick=function(){
if(osc.style.display=="" || osc.style.display=="none"){
	document.getElementById("searchBar").style.display="inline-block";	
	document.getElementById("oscuro").style.display="inline-block";
}else{
	document.getElementById("searchBar").style.display="none";	
	document.getElementById("oscuro").style.display="none";
}
}

osc.onclick=function(){
if(osc.style.display=="" || osc.style.display=="none"){
	document.getElementById("searchBar").style.display="inline-block";	
	document.getElementById("oscuro").style.display="inline-block";
}else{
	document.getElementById("searchBar").style.display="none";	
	document.getElementById("oscuro").style.display="none";
}
}

//btn1.addEventListener("click", Search_bt);
//osc.addEventListener("click", Search_bt);

function btnOnMouseOver(btns) {
	btns.style.color="purple";
}

function btnOnMouseDown(btns) {
	btns.style.color="blue";
}

function btnOnMouseUp(btns) {
	btns.style.color="purple";
}

function btnOnMouseOut(btns) {
	btns.style.color="white";
}

menu_btn.addEventListener("mouseover", function(){btnOnMouseOver(menu_btn);});
menu_btn.addEventListener("mousedown", function(){btnOnMouseDown(menu_btn);});
menu_btn.addEventListener("mouseup", function(){btnOnMouseUp(menu_btn);});
menu_btn.addEventListener("mouseout", function(){btnOnMouseOut(menu_btn);});

btn1.addEventListener("mouseover", function(){btnOnMouseOver(btn1);});
btn1.addEventListener("mousedown", function(){btnOnMouseDown(btn1);});
btn1.addEventListener("mouseup", function(){btnOnMouseUp(btn1);});
btn1.addEventListener("mouseout", function(){btnOnMouseOut(btn1);});

btn2.addEventListener("mouseover", function(){btnOnMouseOver(btn2);});
btn2.addEventListener("mousedown", function(){btnOnMouseDown(btn2);});
btn2.addEventListener("mouseup", function(){btnOnMouseUp(btn2);});
btn2.addEventListener("mouseout", function(){btnOnMouseOut(btn2);});

btn3.addEventListener("mouseover", function(){btnOnMouseOver(btn3);});
btn3.addEventListener("mousedown", function(){btnOnMouseDown(btn3);});
btn3.addEventListener("mouseup", function(){btnOnMouseUp(btn3);});
btn3.addEventListener("mouseout", function(){btnOnMouseOut(btn3);});