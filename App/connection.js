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

  static Sdraw(canvasWrpr,connection)
  {
    canvasWrpr.line(connection[connection.start].x,connection[connection.start].y,connection[connection.end].x,connection[connection.end].y,2,'#0000ee'); 
  }

  static createCopy(data)
  {
    // console.log('connection copy creator', data);
    var obj= new Connection();
    obj.setStart(data.start,data[data.start]);
    obj.setEnd(data.end,data[data.end]);
    return obj;

  }

 


}
