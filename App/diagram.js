
class Diagram
{
  constructor(name,user)
  {
    this.name = name;
    this.elements=[];
    this.connections=[]
  }

  draw(canvasWrpr)
  {
    
    for (var i =0;i<this.connections.length;i++)
      this.connections[i].draw(canvasWrpr);

    for (var i =0;i<this.elements.length;i++)
      this.elements[i].draw(canvasWrpr); 

     // console.log('wewe');
  }

  addElement(element)
  {
    this.elements.push(element); 
  }

  addConnection(connection)
  {
    this.connections.push(connection);
  }

  isMouseOverElement(x,y)
  {
    var result=-1;
    for(var i =0;i<this.elements.length;i++)
    {
      if(Math.abs(Math.sqrt(Math.pow(x-this.elements[i].x,2)+Math.pow(y-this.elements[i].y,2)))<20)
      {
        console.log('You are over Element:',this.elements[i]);
        result=this.elements[i];
      }
    }
    return result;
  }

  isMouseOverConector(x,y)
  {

    var result=-1;
    for(var i =0;i<this.elements.length;i++)
    {
      
      if(Math.abs(Math.sqrt(Math.pow(x-this.elements[i].x,2)+Math.pow(y-this.elements[i].y,2)))<50)
      {
        
        var element=this.elements[i];
        console.log('close to:',element);
        for(var key in element.connectors)
        {
          var connector=element.connectors[key];
          var cx=connector.x;
          var cy=connector.y;
          if(Math.abs(Math.sqrt(Math.pow(x-cx,2)+Math.pow(y-cy,2)))<8)
          {
            // arc(element.x+connector[1],element.y+connector[2],2,0,360,2,'#ff5600');
            result=[element,connector];
            console.log('AAAAAgria');
            connector.isMouseOver=true;

          }
          connector.isMouseOver=false;
            
        }
      }
      


    }
    return result;
  }

  findElement(name)
  {
    for(var i=0;i<this.elements.length;i++)
    {
      if(this.elements[i].name==name )
        return this.elements[i]; 
    }
    return null
  }

  findConnector(data)
  {
    var  element= this.findElement(data[0]);
    if(element!=null )
    {
      for(var i=0;i< element.connectors.length;i++)
        if(element.connectors[i][0]==data[1])
        {
          var name=element.connectors[i][0];
          var x=(element.connectors[i][1])+element.x;
          var y=(element.connectors[i][2])+element.y;
          return [name,x,y];
        }
        
    }
    return null;
  }

  findConnections(elementName)
  { 
    var result=[]
    for(var key in this.connections)
    {
        // if(this.connections[i].start[1]==elementName ||this.connections[i].start[1]==elementName)
        // result.push(this.connections[i]);

        if(this.connections[key][elementName]!=undefined)
        result.push(this.connections[key]);
    }
    return result;

  }


}