function addBola(){
	var bola=document.createElement("div");
	bola.setAttribute("class","bola");
	var p1=Math.floor(Math.random() * 1000);
	var p2=Math.floor(Math.random() * 900);
	bola.setAttribute("style","left:"+p1+"px;top:"+p2+"px;background-color:#"+colorHex());	
	bola.setAttribute("onclick","estourar(this)");
	document.body.appendChild(bola);
}
function estourar(x){
	document.body.removeChild(x);
}
function iniciar() {
	setInterval(addBola, 1000);
}
function colorHex() {
	var c="";
	var x="";
	var hex="ABCDEF0123456789";
	for(var i=0;i<=5;i++)
	{
		x=Math.floor(Math.random()*16);
        c+=hex.charAt(x);        
	}
	return c;
}
