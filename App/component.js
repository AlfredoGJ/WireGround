class Component
{
  constructor(x,y,name,type)
  {
    this.x=x;
    this.y=y;
    this.name = name;
    this.type = type;
    this.color='#000000';
    this.connectors=[];

    switch(type)
    {
      case 'And':
      this.cnctrOverlay=[[-40,-10,'A'],[-40,10,'B'],[40,0,'X']];
      break;

      case 'Nand':
      this.cnctrOverlay=[[-40,-10,'A'],[-40,10,'B'],[40,0,'X']];
      break;

      case 'Or':
      this.cnctrOverlay=[[-40,-10,'A'],[-40,10,'B'],[40,0,'X']];
      break;

      case 'Nor':
      this.cnctrOverlay=[[-40,-10,'A'],[-40,10,'B'],[40,0,'X']];
      break;
      
      case 'Xor':
      this.cnctrOverlay=[[-40,-10,'A'],[-40,10,'B'],[40,0,'X']];
      break;

      case 'Xnor':
      this.cnctrOverlay=[[-40,-10,'A'],[-40,10,'B'],[40,0,'X']];
      break;

      case 'Not':
      this.cnctrOverlay=[[-40,0,'A'],[40,0,'X']];
      break;
      
    }

  }

  static Sdraw(canvasWrpr,component)
  {
    switch(component.type)
    {
      case 'And':
      
      Component.S_andDraw(canvasWrpr,component);
      
      break;

      case 'Nand':
      
      Component.S_nandDraw(canvasWrpr,component);
      
      break;

      case 'Or':
      
      Component.S_orDraw(canvasWrpr,component);
      break;

      case 'Nor':
      
      Component.S_norDraw(canvasWrpr,component);
      break;
      
      case 'Xor':
      Component.S_xorDraw(canvasWrpr,component);
      
      break;

      case 'Xnor':
      Component.S_xnorDraw(canvasWrpr,component);
      break;

      case 'Not':
      Component.S_notDraw(canvasWrpr,component);
      break;

    }
  }

  static S_xnorDraw(canvasWrpr,component)
  {
      var x=component.x;
      var y=component.y;


      canvasWrpr.line (x-40,y-10,x-18,y-10,2,component.color);
      canvasWrpr.line (x-40,y+10,x-18,y+10,2,component.color);


      canvasWrpr.line(x+20,y,x+40,y,2,component.color);
      canvasWrpr.qurve(x-20,y-15,x-15,y,x-20,y+15,component.width,component.color);

      canvasWrpr.qurve(x-24,y-13,x-19,y,x-24,y+13,component.width,component.color);

      var begin=[x-20,y-15];
      var c1=[x+32,y-18];
      var c2=[x+32,y+18];
      var end=[x-20,y+14];

       
      canvasWrpr.bezier(begin,c1,c2,end,component.color,component.width);
      canvasWrpr.arc(x+22,y,2,0,360,3,component.color);
      // console.log('im draw method of Nand');

      for(var key in component.connectors)
      {
        component.connectors[key].draw(canvasWrpr)
      }

  }



  // static createCopy(data)
  // {
  //   // console.log('Component copy maker',data);
  //   var obj= new Component(data.x,data.y,data.name,data.type);
  //   // obj.cnctrOverlay=data.cnctrOverlay;
  //   return obj;
  // }

  static S_notDraw(canvasWrpr, component)
  {
      var x=component.x;
      var y=component.y;

      canvasWrpr.line(x-18,y-15,x-18,y+15,2,component.color);
      canvasWrpr.line (x-40,y,x-18,y,2,component.color);
      canvasWrpr.line(x+19,y,x+40,y,2,component.color);
      canvasWrpr.line(x-18,y-15,x+19,y,2,component.color);
      canvasWrpr.line(x-18,y+15,x+19,y,2,component.color);
      canvasWrpr.arc(x+20,y,2,0,360,3,component.color);

      // console.log('notDraw');
      for(var key in component.connectors)
      {
        component.connectors[key].draw(canvasWrpr)
      }

      // console.log('im draw method of and');

  }

  static S_andDraw(canvasWrpr,component)
  {   
      var x=component.x;
      var y=component.y;
      canvasWrpr.line(x-18,y-15,x-18,y+15,2,component.color);
      canvasWrpr.line (x-40,y-10,x-18,y-10,2,component.color);
      canvasWrpr.line (x-40,y+10,x-18,y+10,2,component.color);

      canvasWrpr.line (x-18,y-15,x+7,y-15,2,component.color);
      canvasWrpr.line (x-18,y+15,x+7,y+15,2,component.color);

      canvasWrpr. arc(x+5,y,15,-90,90,2,component.color);
      canvasWrpr.line(x+19,y,x+40,y,2,component.color);

      for(var key in component.connectors)
      {
        component.connectors[key].draw(canvasWrpr)
      }
}


  static S_nandDraw(canvasWrpr,component)
  {
    var x=component.x;
    var y=component.y;

    canvasWrpr.line(x-18,y-15,x-18,y+15,2,component.color);

    canvasWrpr.line (x-40,y-10,x-18,y-10,2,component.color);
    canvasWrpr.line (x-40,y+10,x-18,y+10,2,component.color);

    canvasWrpr.line (x-18,y-15,x+7,y-15,2,component.color);
    canvasWrpr.line (x-18,y+15,x+7,y+15,2,component.color);

    canvasWrpr.arc(x+5,y,15,-90,90,2,component.color);
    canvasWrpr.line(x+19,y,x+40,y,2,component.color);

  
    canvasWrpr.arc(x+23,y,2,0,360,3,component.color);
    
    for(var key in component.connectors)
      {
        component.connectors[key].draw(canvasWrpr)
      }

  }

  static S_orDraw(canvasWrpr,component)
  {
      var x=component.x;
      var y=component.y;


      canvasWrpr.line (x-40,y-10,x-18,y-10,2,component.color);
      canvasWrpr.line (x-40,y+10,x-18,y+10,2,component.color);


      canvasWrpr.line(x+20,y,x+40,y,2,component.color);
      canvasWrpr.qurve(x-20,y-15,x-15,y,x-20,y+15,component.width,component.color);

      var begin=[x-20,y-15];
      var c1=[x+32,y-18];
      var c2=[x+32,y+18];
      var end=[x-20,y+14];

      canvasWrpr.bezier(begin,c1,c2,end,component.color,component.width);
      // console.log('im draw method of Nand');

      for(var key in component.connectors)
      {
        component.connectors[key].draw(canvasWrpr)
      }

  }

  static S_xorDraw(canvasWrpr,component)
  {
      var x=component.x;
      var y=component.y;


      canvasWrpr.line (x-40,y-10,x-18,y-10,2,component.color);
      canvasWrpr.line (x-40,y+10,x-18,y+10,2,component.color);


      canvasWrpr.line(x+20,y,x+40,y,2,component.color);
      canvasWrpr.qurve(x-20,y-15,x-15,y,x-20,y+15,component.width,component.color);

      canvasWrpr.qurve(x-24,y-13,x-19,y,x-24,y+13,component.width,component.color);

      var begin=[x-20,y-15];
      var c1=[x+32,y-18];
      var c2=[x+32,y+18];
      var end=[x-20,y+14];

      canvasWrpr.bezier(begin,c1,c2,end,component.color,component.width);
      // console.log('im draw method of Nand');

      for(var key in component.connectors)
      {
        component.connectors[key].draw(canvasWrpr)
      }

  }

  static S_norDraw(canvasWrpr,component)
  {
      var x=component.x;
      var y=component.y;


      canvasWrpr.line (x-40,y-10,x-18,y-10,2,component.color);
      canvasWrpr.line (x-40,y+10,x-18,y+10,2,component.color);


      canvasWrpr.line(x+20,y,x+40,y,2,component.color);
      canvasWrpr.qurve(x-20,y-15,x-15,y,x-20,y+15,component.width,component.color);

      var begin=[x-20,y-15];
      var c1=[x+32,y-18];
      var c2=[x+32,y+18];
      var end=[x-20,y+14];

      canvasWrpr.bezier(begin,c1,c2,end,component.color,component.width);
      canvasWrpr.arc(x+22,y,2,0,360,3,component.color);
      // console.log('im draw method of Nand');

      for(var key in component.connectors)
      {
        component.connectors[key].draw(canvasWrpr)
      }

  }
 
}




class Connector
{
  constructor(x,y,name)
  {
    this.x=x;
    this.y=y;
    this.name=name;
    this.isMouseOver=false;
   

  }

  draw(canvasWrpr)
  {
    // if(this.isMouseOver==true)
    // {
      canvasWrpr.arc(this.x,this.y,2,0,360,1,'#ff0000');
      // console.log('heyyyvrou');

    // }
     
  }

  static Sdraw(canvasWrpr,connector)
  {
    canvasWrpr.arc(connector.x,connector.y,2,0,360,1,'#ff0000');
  }

  static createCopy(data)
  {
    var obj= new Connector(data.x,data.y,data.name);
    return obj;
  }
}




  

  

  

  
  