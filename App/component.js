class Component
{
  constructor(x,y,name,type)
  {
    this.x=x;
    this.y=y;
    this.name = name;
    this.type=type;
    this.color='#000000';
    this.connectors={};

  
    
    switch(type)
    {
      case 'And':
      this.draw=andDraw;
      this.cnctrOverlay=[[-40,-10,'A'],[-40,10,'B'],[40,0,'X']];
      break;

      case 'Nand':
      this.draw=nandDraw;
      this.cnctrOverlay=[[-40,-10,'A'],[-40,10,'B'],[40,0,'X']];
      break;

      case 'Or':
      this.draw=orDraw;
      this.cnctrOverlay=[[-40,-10,'A'],[-40,10,'B'],[40,0,'X']];
      break;

      case 'Nor':
      this.draw=norDraw;
      this.cnctrOverlay=[[-40,-10,'A'],[-40,10,'B'],[40,0,'X']];
      break;
      
      case 'Xor':
      this.draw=xorDraw;
      this.cnctrOverlay=[[-40,-10,'A'],[-40,10,'B'],[40,0,'X']];
      break;

      case 'Xnor':
      this.draw=xnorDraw;
      this.cnctrOverlay=[[-40,-10,'A'],[-40,10,'B'],[40,0,'X']];
      break;

      case 'Not':
      this.draw=notDraw;
      this.cnctrOverlay=[[-40,0,'A'],[40,0,'X']];
      break;
      
    }




  }

  // showConnections(canvasWrpr)
  // {
  //   for(var i=0;i<3;i++)
  //   {
  //    this.connectors[i].draw(canvasWrpr)
  //   }
  // }

  

 
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
}

function andDraw(canvasWrpr)
{
      var x=this.x;
      var y=this.y;

      canvasWrpr.line(x-18,y-15,x-18,y+15,2,this.color);

      canvasWrpr.line (x-40,y-10,x-18,y-10,2,this.color);
      canvasWrpr.line (x-40,y+10,x-18,y+10,2,this.color);

      canvasWrpr.line (x-18,y-15,x+7,y-15,2,this.color);
      canvasWrpr.line (x-18,y+15,x+7,y+15,2,this.color);

      canvasWrpr. arc(x+5,y,15,-90,90,2,this.color);
      canvasWrpr.line(x+19,y,x+40,y,2,this.color);

      for(var key in this.connectors)
      {
        this.connectors[key].draw(canvasWrpr)
      }


}

function nandDraw(canvasWrpr)
  {
    var x=this.x;
    var y=this.y;

    canvasWrpr.line(x-18,y-15,x-18,y+15,2,this.color);

    canvasWrpr.line (x-40,y-10,x-18,y-10,2,this.color);
    canvasWrpr.line (x-40,y+10,x-18,y+10,2,this.color);

    canvasWrpr.line (x-18,y-15,x+7,y-15,2,this.color);
    canvasWrpr.line (x-18,y+15,x+7,y+15,2,this.color);

    canvasWrpr.arc(x+5,y,15,-90,90,2,this.color);
    canvasWrpr.line(x+19,y,x+40,y,2,this.color);

  
    canvasWrpr.arc(x+23,y,2,0,360,3,this.color);
    
    for(var key in this.connectors)
      {
        this.connectors[key].draw(canvasWrpr)
      }

  }

  function orDraw(canvasWrpr)
  {
      var x=this.x;
      var y=this.y;


      canvasWrpr.line (x-40,y-10,x-18,y-10,2,this.color);
      canvasWrpr.line (x-40,y+10,x-18,y+10,2,this.color);


      canvasWrpr.line(x+20,y,x+40,y,2,this.color);
      canvasWrpr.qurve(x-20,y-15,x-15,y,x-20,y+15,this.width,this.color);

      var begin=[x-20,y-15];
      var c1=[x+32,y-18];
      var c2=[x+32,y+18];
      var end=[x-20,y+14];

      canvasWrpr.bezier(begin,c1,c2,end,this.color,this.width);
      // console.log('im draw method of Nand');

      for(var key in this.connectors)
      {
        this.connectors[key].draw(canvasWrpr)
      }

  }

  function norDraw(canvasWrpr)
  {
      var x=this.x;
      var y=this.y;


      canvasWrpr.line (x-40,y-10,x-18,y-10,2,this.color);
      canvasWrpr.line (x-40,y+10,x-18,y+10,2,this.color);


      canvasWrpr.line(x+20,y,x+40,y,2,this.color);
      canvasWrpr.qurve(x-20,y-15,x-15,y,x-20,y+15,this.width,this.color);

      var begin=[x-20,y-15];
      var c1=[x+32,y-18];
      var c2=[x+32,y+18];
      var end=[x-20,y+14];

      canvasWrpr.bezier(begin,c1,c2,end,this.color,this.width);
      canvasWrpr.arc(x+22,y,2,0,360,3,this.color);
      // console.log('im draw method of Nand');

      for(var key in this.connectors)
      {
        this.connectors[key].draw(canvasWrpr)
      }

  }

  function xorDraw(canvasWrpr)
  {
      var x=this.x;
      var y=this.y;


      canvasWrpr.line (x-40,y-10,x-18,y-10,2,this.color);
      canvasWrpr.line (x-40,y+10,x-18,y+10,2,this.color);


      canvasWrpr.line(x+20,y,x+40,y,2,this.color);
      canvasWrpr.qurve(x-20,y-15,x-15,y,x-20,y+15,this.width,this.color);

      canvasWrpr.qurve(x-24,y-13,x-19,y,x-24,y+13,this.width,this.color);

      var begin=[x-20,y-15];
      var c1=[x+32,y-18];
      var c2=[x+32,y+18];
      var end=[x-20,y+14];

      canvasWrpr.bezier(begin,c1,c2,end,this.color,this.width);
      // console.log('im draw method of Nand');

      for(var key in this.connectors)
      {
        this.connectors[key].draw(canvasWrpr)
      }

  }

  function xnorDraw(canvasWrpr)
  {
      var x=this.x;
      var y=this.y;


      canvasWrpr.line (x-40,y-10,x-18,y-10,2,this.color);
      canvasWrpr.line (x-40,y+10,x-18,y+10,2,this.color);


      canvasWrpr.line(x+20,y,x+40,y,2,this.color);
      canvasWrpr.qurve(x-20,y-15,x-15,y,x-20,y+15,this.width,this.color);

      canvasWrpr.qurve(x-24,y-13,x-19,y,x-24,y+13,this.width,this.color);

      var begin=[x-20,y-15];
      var c1=[x+32,y-18];
      var c2=[x+32,y+18];
      var end=[x-20,y+14];

       
      canvasWrpr.bezier(begin,c1,c2,end,this.color,this.width);
      canvasWrpr.arc(x+22,y,2,0,360,3,this.color);
      // console.log('im draw method of Nand');

      for(var key in this.connectors)
      {
        this.connectors[key].draw(canvasWrpr)
      }

  }

  function notDraw(canvasWrpr)
  {
      var x=this.x;
      var y=this.y;

      canvasWrpr.line(x-18,y-15,x-18,y+15,2,this.color);

      canvasWrpr.line (x-40,y,x-18,y,2,this.color);
     

     
      canvasWrpr.line(x+19,y,x+40,y,2,this.color);
      canvasWrpr.line(x-18,y-15,x+19,y,2,this.color);
      canvasWrpr.line(x-18,y+15,x+19,y,2,this.color);
      canvasWrpr.arc(x+20,y,2,0,360,3,this.color);

      for(var key in this.connectors)
      {
        this.connectors[key].draw(canvasWrpr)
      }

      // console.log('im draw method of and');

  }