var canvas = document.querySelector("#myCanvas") 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d"); 
c.fillStyle = 'rgba(255,0,0,0.5)'
c.fillRect(100,100,100,100)
c.fillStyle = 'rgba(0,0,255,0.5)'
c.fillRect(400,100,100,100)
c.fillStyle = 'rgba(0,255,0,0.5)'
c.fillRect(300,400,100,100)
//Line
c.beginPath();
c.moveTo(50,300);
c.lineTo(300,100);
c.lineTo(400,300);

c.strokeStyle = "#fa34a3";
c.stroke();

// Arc / Circle
c.beginPath();
c.arc(300,300,30,0,Math.PI * 2, false);
c.strokeStyle = "blue";
c.stroke();

for(var i=0; i < 100; i++){
    c.beginPath();
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    var x = Math.random()* window.innerWidth;
    var y = Math.random()* window.innerHeight;
    c.arc(x,y,30,0,Math.PI * 2, false);
    c.strokeStyle = `#${randomColor}`;
    c.fillStyle=`#${randomColor}`;
    c.fill();
    c.stroke();
}
c.arc(200,200,30,0,Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();
