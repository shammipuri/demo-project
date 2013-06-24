//@import "dynamic_content.js";
function show(element)
{
	if(element==1)
	{	
		/*if(document.getElementById("submenu1").style.visibility=="hidden")
		{	
			document.getElementById("submenu1").style.visibility="visible";
			document.getElementById("submenu1").style.height="100%";
		}
		else
		{
			document.getElementById("submenu1").style.visibility="hidden";
			document.getElementById("submenu1").style.height="0px";
		}*/
		show_frame();
	}	
	else if(element==2)
	{	
		/*if(document.getElementById("submenu2").style.visibility=="hidden")
		{	
			document.getElementById("submenu2").style.visibility="visible";
			document.getElementById("submenu2").style.height="100%";
		}
		else
		{
			document.getElementById("submenu2").style.visibility="hidden";
			document.getElementById("submenu2").style.height="0px";
		}*/	
		show_frame();
	}
	else if(element==3)
	{	/*
		if(document.getElementById("submenu3").style.visibility=="hidden")
		{	
			document.getElementById("submenu3").style.visibility="visible";
			document.getElementById("submenu3").style.height="100%";
		}
		else
		{
			document.getElementById("submenu3").style.visibility="hidden";
			document.getElementById("submenu3").style.height="0px";
		}*/	
		show_frame();
	}
}
function show_frame()
{
		document.getElementById('description').style.display="none";
		document.getElementById('data').style.display="inline-block";
		document.getElementById('data').style.width="650px";
		document.getElementById('data').style.height="400px";
}