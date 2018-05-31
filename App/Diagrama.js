class Diagram
{
  constructor(name,user)
  {
    this.name = name;
    this.elements=[];
    this.connections=[]
  }

  static faa()
  {
    console.log('Faa');
  }

  draw(canvasWrpr)
  {
    
    for (var i =0;i<this.connections.length;i++)
      this.connections[i].draw(canvasWrpr);
    

    for (var i =0;i<this.elements.length;i++)
      this.elements[i].draw(canvasWrpr); 

     // console.log('wewe');
  }

  static Sdraw(canvasWrpr, diagram)
  {
    
    for (var i =0;i<diagram.connections.length;i++)
        Connection.Sdraw(canvasWrpr,diagram.connections[i]);

    for (var i =0;i<diagram.elements.length;i++)
         Component.Sdraw(canvasWrpr,diagram.elements[i]); 

      console.log('S-Diagram-draw');
  }

  static addElement(element,diagram)
  {
    diagram.elements.push(element); 
  }

  static addConnection(connection, diagram)
  {
    diagram.connections.push(connection);
  }

  static isMouseOverElement(x,y,diagram)
  {
    var result=-1;
    for(var i =0;i<diagram.elements.length;i++)
    {
      if(Math.abs(Math.sqrt(Math.pow(x-diagram.elements[i].x,2)+Math.pow(y-diagram.elements[i].y,2)))<20)
      {
        console.log('You are over Element:',diagram.elements[i]);
        result=diagram.elements[i];
      }
    }
    return result;
  }

  static isMouseOverConector(x,y,diagram)
  {

    var result=-1;
    for(var i =0;i<diagram.elements.length;i++)
    {
      
      if(Math.abs(Math.sqrt(Math.pow(x-diagram.elements[i].x,2)+Math.pow(y-diagram.elements[i].y,2)))<50)
      {
        
        var element=diagram.elements[i];
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

  static findElement(name, diagram)
  {
    for(var i=0;i<diagram.elements.length;i++)
    {
      if(diagram.elements[i].name==name )
        return diagram.elements[i]; 
    }
    return null
  }

  static findConnector(data, diagram)
  {
    var  element= Diagram.findElement(data[0],diagram);
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

  static findConnections(elementName,diagram)
  { 
    var result=[]
    for(var key in diagram.connections)
    {
        // if(this.connections[i].start[1]==elementName ||this.connections[i].start[1]==elementName)
        // result.push(this.connections[i]);

        if(diagram.connections[key][elementName]!=undefined)
        result.push(diagram.connections[key]);
    }
    return result;

  }

  static createCopy(data)
  {
    // console.log('Diagram copy creator',data);
    var obj= new Diagram(data.name,data.user);
    
    for(var element in data.elements)
    {
      obj.elements.push(Component.createCopy(data.elements[element]));
    }

    for(var connection in data.connections)
    {
      obj.connections.push(Connection.createCopy(data.connections[connection]));
    }

    return obj;
  }
 
}