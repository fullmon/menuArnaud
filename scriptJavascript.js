function sousMenu(nom){
	var nomMenu = nom.getAttribute("id");
	var Menu = document.getElementById(nomMenu);
	var sousMenu = document.getElementById("sousMenu"+nomMenu);
	
	setTimeout(function(){sousMenu.style.display = "block";},1000);
	Menu.style.backgroundColor = "white";
	Menu.style.color = "blue";
	setTimeout(function(){document.getElementById("voile").style.display = "block";},1000);
	
	Menu.onmouseout = function(){
		sousMenu.style.display = "none";
		Menu.style.backgroundColor = "black";
		Menu.style.color = "white";
		document.getElementById("voile").style.display = "none";
	}
}
function sousMenu2(sousMenu){
	var nomSousMenu = sousMenu.getAttribute("title");
	var SousMenu = document.getElementById("sousMenu"+nomSousMenu);
	var Menu = document.getElementById(nomSousMenu);
	
	SousMenu.style.display = "block";
	Menu.style.backgroundColor = "white";
	Menu.style.color = "blue";
	document.getElementById("voile").style.display = "block";
	
	SousMenu.onmouseout = function(){
		SousMenu.style.display = "none";
		Menu.style.backgroundColor = "black";
		Menu.style.color = "white";
		document.getElementById("voile").style.display = "none";
	}
}