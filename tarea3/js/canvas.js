// configurar extencion de animacion
var frame=window.requestAnimationFrame||
		  window.mozRequedAnimationFrame||
		  window.webkitRequestAnimationFrame||
		  window.msRequesAnimationFrame;

var canvas=document.querySelector("#lienzo");
var ctx=canvas.getContext('2d');



//=======IMAGEN japanes======
var sprite=new Image();
sprite.src="img/img3.jpg";
var numerowidth=0;
var ubicacionx =0;
var ubicacionxx=0;
// Variables de rotacion imagen
var numero1=0;
var ubicacion1=0;

function tiempo(){
	if(numerowidth>=1024) {numerowidth=0}else{numerowidth+=10}
		for (var i = 0; i <= numerowidth; i+=345) {
			if(numerowidth>=i) {ubicacionx=i}
		}
	if(numero1>=1000) {numero1=0}else{numero1+=15}
		for (var a = 0; a <= numero1; a+=10) {
			if(numero1>=a) {ubicacion1=a}
		}
	
	//ctx.draw(imagen, x1,y1,recortex, recortey,x2,xy2);
ctx.clearRect(ubicacion1,100,100,100);



//=================
//		PAISAJE
//=================
//		cielo
var grd=ctx.createLinearGradient(0,0,0,500);
grd.addColorStop(0,"blue");
grd.addColorStop(1,"white");
ctx.fillStyle= grd;
ctx.fillRect(0,0,1000,500);

//		montaña 1
ctx.beginPath();
ctx.fillStyle= "orange";
ctx.moveTo(0,300);
ctx.lineTo(150,150);
ctx.lineTo(400,300);
ctx.fill();
ctx.stroke();

//		montaña 2
ctx.beginPath();
ctx.fillStyle= "orange";
ctx.moveTo(200,300);
ctx.lineTo(400,100);
ctx.lineTo(590,300);
ctx.fill();
ctx.stroke();

//		montaña 3
ctx.beginPath();
ctx.fillStyle= "orange";
ctx.moveTo(400,300);
ctx.lineTo(400,250);
ctx.lineTo(700,100);
ctx.lineTo(900,300);
ctx.fill();
ctx.stroke();

//		montaña 4
ctx.beginPath();
ctx.fillStyle= "orange";
ctx.moveTo(700,300);
ctx.lineTo(750,250);
ctx.lineTo(780,270);
ctx.lineTo(800,210);
ctx.lineTo(830,220);
ctx.lineTo(1000,50);
ctx.lineTo(1000,300);
ctx.fill();
ctx.lineWidth= 3;
ctx.strokeStyle= "black";
ctx.stroke();



//=======sol=======
ctx.beginPath();
//ctx.arc(x1,y1,radio,inicio del angulo,fin del angulo);
ctx.arc(25,25,50,0,2*Math.PI);
//Relleno
ctx.fillStyle="#B5CA0A";
ctx.fill();
//contorno del circulo
ctx.lineWidth=20;
ctx.strokeStyle="#E9FF33";
ctx.stroke();












/*//=================
//		curvas
//=================

ctx.rect(100,50,10,10);
ctx.rect(600,50,10,10);
ctx.stroke();
//color de la linea
ctx.fillStyle="blue";
ctx.fill();

ctx.rect(800,30,15,15);
ctx.rect(850,330,15,15);
ctx.stroke();
ctx.fillStyle= "black";
ctx.fill();

ctx.beginPath(); 
//ctx.moveTo(100,200);//donde inicia el objeto
//ctx.bezirCurveto(cpx1,cpy1,cpx2,cpy2,x2,y2);
ctx.arc(25,25,50,2*Math.PI);
ctx.fillStyle= "#E9FF33";
ctx.fill();

ctx.lineWidth= 20;
ctx.strokeStyle= "#E9FF33";
ctx.stroke();
*/







/*//=================
		linea
//=================

ctx.moveTo(0,0);
ctx.lineTo(100,100);
ctx.lineTo(200,20);
ctx.lineTo(400,30);
ctx.strokeStyle="black";
ctx.stroke();


//=======cuadrado=======
console.log("Mi mensaje",ctx);

//contorno
ctx.lineWitdth=8;
//color del entorno
ctx.strokeStyle="rbga(255,0,225,1)";
//color a la figura
ctx.fillStyle="cyan";
ctx.fillRect(0,200,250,150);

ctx.fillStyle="blue";
ctx.fillRect(0,0,100,100);
*/


ctx.drawImage(sprite,ubicacionx,0,345,273,ubicacion1,350,100,110);
frame(tiempo);
}
	// declaramos la funcion para que se ejecute
tiempo();