var canvas= document.getElementById('editor');
var container=document.getElementById('canvasContainer');

var width=container.clientWidth;
var height=container.clientHeight;

console.log(width);
console.log(height);
canvas.style="border:3px solid #AFAFAF;";
canvas.width=width;
canvas.height=height;
var context = canvas.getContext("2d");


arc(100,100,30,270,360,4,'#ff0000');

function sayHello()
{
    console.log('Que traza banda');
}

function prepareCanvas()
{

    
    
}

function line(x1,y1,x2,y2, width,color)
{
    context.moveTo(x1,y1);
    context.beginPath();
    context.lineTo(x2,y2);
    context.lineWidth=width;
    context.strokeStyle=color;
    context.stroke();
}

function arc(x,y,radius,start,end,width,color)
{
    
    context.moveTo(x,y);
    context.beginPath();
    context.arc(x,y,radius,-(start*Math.PI)/180,-(end*Math.PI)/180,true);
    context.lineWidth=width;
    context.strokeStyle=color;
    context.stroke();


}

function writeMessage(canvas, message) {
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = '18pt Calibri';
    context.fillStyle = 'black';
    context.fillText(message, 10, 25);
  }
  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }
  
  var context = canvas.getContext('2d');

  canvas.addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
    writeMessage(canvas, message);
  }, false);
