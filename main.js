function Point(x,y){
	this.x=x;
	this.y=y;
}
var forme={};
var couleur="black";
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var points=[];
$(document).ready(function() {
	$("#btn1").on("click",function(){
		forme=new Rectangle(0,0);
	});
	$("#btn2").on("click",function(){
		forme=new Cercle(0,0);
	});
	$("#btn3").on("click",function(){
		forme=new Ligne();
	});
	$("#btnRouge").on("click",function(){
		couleur="red";
	});
	$("#btnVert").on("click",function(){
		couleur="green";
	});
	$("#btnBleu").on("click",function(){
		couleur="blue";
	});	
});
var nbrClick=0;
function dessiner(event) {
  var x = event.offsetX;
  var y=event.offsetY;
  nbrClick++;
  point=new Point(x,y);
  points.push(point);
  if(nbrClick==2){
  	ctx.fillStyle=couleur;
  	nbrClick=0;
  	x=points[points.length-2].x;
  	y=points[points.length-2].y;
  	var x2=points[points.length-1].x;
  	var y2=points[points.length-1].y;
  	if(forme.forme=="rectangle")
  	{
  		forme.largeur=x2-x;
  		forme.hauteur=y2-y;
  		ctx.fillRect(x,y,forme.largeur,forme.hauteur);
  		ctx = c.getContext("2d");
  	}
  	if(forme.forme=="cercle")
  	{
  		ctx.beginPath();
  		forme.rayon=x2-x;
		ctx.arc(x, y, forme.rayon, 0, 2 * Math.PI);
		ctx.fill();
		ctx = c.getContext("2d");
  	}
  	if(forme.forme=="ligne")
  	{
  		ctx.moveTo(x, y);
		ctx.lineTo(x2, y2);
		ctx.stroke();
		ctx = c.getContext("2d");
  	}
  }
}