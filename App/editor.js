class And
{

  constructor(x,y,name)
  {
    this.x=x;
    this.y=y;
    this.name = name;
    this.conectors= [['A',-40,-10],['B',-40,10],['X',35,0]];
    this.color='#000000';
  }
    
  draw()
  {
      var x=this.x;
      var y=this.y;

      line(x-20,y-15,x-20,y+15,2,this.color);
      line (x-40,y-10,x-20,y-10,2,this.color);
      line (x-40,y+10,x-20,y+10,2,this.color);
      line (x-20,y-15,x+2,y-15,2,this.color);
      line (x-20,y+15,x+2,y+15,2,this.color);

      arc(x+1,y,15,-90,90,2,this.color);
      line(x+15,y,x+35,y,2,this.color);

      // for(var i=0;i<3;i++)
      // {
      //   arc(x+this.conectors[i][1],y+this.conectors[i][2],2,0,360,2,'#ff0000');
      // }

      console.log('im draw method of and');

  }
}
  
class Nand
{

  constructor(x,y,name)
  {
    this.x=x;
    this.y=y;
    this.name = name;
    this.conectors= [['A',-40,-10],['B',-40,10],['X',35,0]];
    this.color='#000000';
  }
    
  draw()
  {
      var x=this.x;
      var y=this.y;

      line(x-20,y-15,x-20,y+15,2,this.color);
      line (x-40,y-10,x-20,y-10,2,this.color);
      line (x-40,y+10,x-20,y+10,2,this.color);
      line (x-20,y-15,x+2,y-15,2,this.color);
      line (x-20,y+15,x+2,y+15,2,this.color);

      arc(x+1,y,15,-90,90,2,this.color);
      line(x+15,y,x+35,y,2,this.color);
      arc(x+19,y,2,0,360,3,this.color);
      // for(var i=0;i<3;i++)
      // {
      //   arc(x+this.conectors[i][1],y+this.conectors[i][2],2,0,360,2,'#ff0000');
      // }

      console.log('im draw method of Nand');

  }
}

class Or
{

  constructor(x,y,name)
  {
    this.x=x;
    this.y=y;
    this.name = name;
    this.conectors= [['A',-40,-10],['B',-40,10],['X',35,0]];
    this.color='#000000';
  }
    
  draw()
  {
      var x=this.x;
      var y=this.y;

      line(x-20,y-15,x-20,y+15,2,this.color);
      line (x-40,y-10,x-20,y-10,2,this.color);
      line (x-40,y+10,x-20,y+10,2,this.color);
      
      // line (x-20,y-15,x+2,y-15,2,this.color);
      // line (x-20,y+15,x+2,y+15,2,this.color);

      
      line(x+15,y,x+35,y,2,this.color);
      qurve(x-20,y-15,x+50,y,x-20,y+15,2,this.color);
      // arc(x+19,y,2,0,360,3,this.color);
      // for(var i=0;i<3;i++)
      // {
      //   arc(x+this.conectors[i][1],y+this.conectors[i][2],2,0,360,2,'#ff0000');
      // }

      console.log('im draw method of Nand');

  }
}




class Diagram
{
  constructor(name)
  {
    this.name = name;
  }

  sayHello()
  {
    console.log(`My name is ${ this.name }.`);
  }
}


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


var ele= new And(100,100,'James');
ele.draw();

var mary= new Or(200,150,'may');
mary.draw();
// arc(100,100,30,270,360,4,'#ff0000');
// line(20,20,20,50,8,'#ff0000');


function line(x1,y1,x2,y2, width,color)
{
    
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.lineWidth=width;
    context.strokeStyle=color;
    context.stroke();
    console.log('this is a line');
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
function qurve(x1,y1,x2,y2,cx,cy,width,color)
{
      context.beginPath();
      context.moveTo(x1, y1);
      context.quadraticCurveTo(x2,y2, cx, cy);
      context.lineWidth = width;
      context.strokeStyle = color;
      context.stroke();
}

// function writeMessage(canvas, message) {
//     var context = canvas.getContext('2d');
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     context.font = '18pt Calibri';
//     context.fillStyle = 'black';
//     context.fillText(message, 10, 25);
//   }
//   function getMousePos(canvas, evt) {
//     var rect = canvas.getBoundingClientRect();
//     return {
//       x: evt.clientX - rect.left,
//       y: evt.clientY - rect.top
//     };
//   }
  
//   var context = canvas.getContext('2d');

//   canvas.addEventListener('mousemove', function(evt) {
//     var mousePos = getMousePos(canvas, evt);
//     var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
//     writeMessage(canvas, message);
//   }, false);
