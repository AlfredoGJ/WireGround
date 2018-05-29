class Connection
{
  constructor()
  {
  

  }

  setStart(startCompName,statrConnector)
  {
    this.start=startCompName;
    this[startCompName]=statrConnector;

  }
  setEnd(endCompName,endConnector)
  {
    this.end=endCompName;
    this[endCompName]=endConnector;
  }



  draw(canvasWrpr)
  {
   
    canvasWrpr.line(this[this.start].x,this[this.start].y,this[this.end].x,this[this.end].y,2,'#0000ee');
    // console.log(startConn[1],startConn[2],endConn[1],endConn[2]);
  }


}
