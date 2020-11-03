function sq(){
t.fd(50);t.rt(90);t.fd(50);t.rt(90);
t.fd(50);t.rt(90);t.fd(50);t.rt(90);
}

function move(){
	 ch=event.key;
	 if(ch=="ArrowRight"){xpos=xpos+xinc;par.style.left=xpos+"px";}
	 else{
	 if(ch=="ArrowLeft"){xpos=xpos+xinc;par.style.left=xpos+"px";}
    else{
	par.style.left=xpos+"px";
	par.style.top=ypos+"px";
	xpos=xpos+xinc;
	ypos=ypos+yinc;
	 }}
	if(xpos>700||xpos<50){xinc=-1*xinc;}
	if(ypos>400||ypos<50){yinc=-1*yinc;}
	par.style.backgroundColor="green";
	if(xpos<300){par.style.backgroundColor="red";}
	document.getElementById("par2").innerHTML="key pressed is "+ch;
    if(ch=='x'){document.getElementById("par2").innerHTML="u hit x";}
			
}