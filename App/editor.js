
// FUNCIONES PARA EL ARRASTRADO DE LOS ELEMENTOS

function allowDrop(ev)
{
  ev.preventDefault();
}

function dragComponent(ev)
{
  ev.dataTransfer.setData("text",ev.target.id);
}

function dropElement(ev)
{
  ev.preventDefault();
  var rect = myCanvas.canvas.getBoundingClientRect();
  x= ev.clientX - rect.left,
  y= ev.clientY - rect.top

  var id=ev.dataTransfer.getData("text");
  var element= new Component(x,y,id+'_'+itemCount.toString(),id);
  itemCount++;


  mesh.allocate(element);
  myDiagram.addElement(element);
  console.log(element);
  
}

// FUNCIONES PARA EL ARRASTRADO DE LOS ELEMENTOS




function canvasMouseDown(event)
{
  var rect = myCanvas.canvas.getBoundingClientRect();
  var x=event.clientX - rect.left;
  var y=event.clientY - rect.top;


  // USUARIO CLICKEA SOBRE UN CONECTOR
  var result=myDiagram.isMouseOverConector(x,y);
  if(result!=-1)
  {
    tmpConnection= new Connection();
    tmpConnection.setStart(result[0].name,result[1]);

    myCanvas.setEventListener('mousemove',connectionLineDraw);
    myCanvas.setEventListener('mouseup',makeConnection);
    console.log('begin conn');
    
  }
  // USUARIO CLICKEA SOBRE UN ELEMENTO
  var element= myDiagram.isMouseOverElement(x,y);
  if(element!=-1)
  {
    selectedElement=element;
    selectedElementConections= myDiagram.findConnections(element.name);
    console.log(selectedElementConections);
    myCanvas.setEventListener('mousemove',moveElement);
    myCanvas.setEventListener('mouseup',placeElement);

  }



}


function makeConnection(event)
{
  var rect = myCanvas.canvas.getBoundingClientRect();
  var x=event.clientX - rect.left;
  var y=event.clientY - rect.top;

  var result=myDiagram.isMouseOverConector(x,y);
  if(result!=-1)
  {
    tmpConnection.setEnd(result[0].name,result[1]);
    myDiagram.addConnection(tmpConnection);
   
    console.log('---conected...',tmpConnection);
    tmpConnection=null;
  }
  myCanvas.unsetEventListener('mousemove',connectionLineDraw);
  myCanvas.unsetEventListener('mouseup',makeConnection);
}

function canvasMouseUp(event)
{
 
  

}


function connectionLineDraw(event)
{
 console.log('connecting...'); 
 var startConn= myDiagram.findConnector(tmpConnection.start);
//  console.log(startConn);
//  console.log(event.x, event.y)
 tmpConnection.end=["Tmp",event.x,event.y]; 
 
}

function moveElement(event)
{
  var rect = myCanvas.canvas.getBoundingClientRect();
  var x=event.clientX - rect.left;
  var y=event.clientY - rect.top;

  selectedElement.x=x;
  selectedElement.y=y;

}

function placeElement()
{
  mesh.allocate(selectedElement);

  for(var i=0;i<selectedElementConections.length;i++)
  {
    if(selectedElementConections[i]!=undefined)
    {
      cnctr=selectedElementConections[i][selectedElement.name];
      cnctr.x=selectedElement.connectors[cnctr.name].x;
      cnctr.y=selectedElement.connectors[cnctr.name].y;
    }  
  }

  myCanvas.unsetEventListener('mousemove',moveElement);
  myCanvas.unsetEventListener('mouseup',placeElement);
}


function canvasMouseMove(event)
{
  // console.log('moving...');

  var rect = myCanvas.canvas.getBoundingClientRect();
  var x=event.clientX -rect.left;
  var y=event.clientY -rect.top;


  console.log(x,y);
  
  // if(connector!=-1)  

}




//--------------------------------------------------------



var itemCount=0;
var tmpConnection=null;
var selectedElement=null;
var selectedElementConections=null;
var myCanvas= new canvasWrapper('editor');
var mesh= new Mesh(myCanvas.width,myCanvas.height,10);
var myDiagram= new Diagram('Nuevo','user');


myCanvas.setEventListener('mousedown',canvasMouseDown);
myCanvas.setEventListener('mousemove',canvasMouseMove);

mesh.Draw(myCanvas); 



// CICLO DE DIBUJADO DEL CANVAS
function cycle()
{
  myCanvas.clear(); 
  // mesh.Draw(myCanvas); 
  myDiagram.draw(myCanvas);
 

  window.requestAnimationFrame(cycle);
}

cycle();



