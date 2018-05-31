class Mesh
{
  constructor(x,y,bs)
  {
    this.width=x;
    this.height=y;
    this.blockSize=bs;
  }
  static foo()
  {console.log('Foo');}

  Draw(canvasWrpr)
  { 
    for (var i =0;i<this.width;i=i+this.blockSize)
    {
      for (var j =0;j<this.height;j=j+this.blockSize)
      {
        canvasWrpr.line(i,j,i,j+1,2,'#797979');
       
      }
    }
  }

  allocate(thing)
  {
    var xx=thing.x;
    var yy=thing.y;

    var dx=xx%this.blockSize;
    if(dx>=5)
      thing.x=xx+(this.blockSize-dx);
    else
      thing.x=xx-dx;

    var dy=yy%this.blockSize;
    if(dy>=5)
      thing.y=yy+(this.blockSize-dy);
    else
      thing.y=yy-dy;


    var connectors=[];

      for (var i=0;i<thing.cnctrOverlay.length;i++)
      {
        var x= thing.cnctrOverlay[i][0];
        var y=thing.cnctrOverlay[i][1];
        var name=thing.cnctrOverlay[i][2];

        // connectors.push(new Connector(+thing.x,+thing.y,thing.cnctrOverlay[i][2] ));
        connectors[name]= new Connector(x+thing.x,y+thing.y,name);

      }
      // console.log('PEPE LE PU');
      // console.log(connectors);
      thing.connectors=connectors;
  }

}