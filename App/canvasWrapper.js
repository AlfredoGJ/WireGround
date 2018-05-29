class canvasWrapper
{

    constructor(name)
    {
        this.canvas = document.getElementById(name);
        this.container = document.getElementById('canvasContainer');
        this.context = this.canvas.getContext("2d");

        var positionInfo = this.container.getBoundingClientRect();

        // console.log(positionInfo);
        this.canvas.style="border:4px solid #3e76d1;";
        this.canvas.width= positionInfo.width-20;
        this.canvas.height=positionInfo.height+positionInfo.bottom;
        this.canvas.style.background='#eaeaea';
        this.width=this.canvas.width;
        this.height=this.canvas.height;

        // canvas.addEventListener('mousedown',canvasMouseDown);
        // canvas.addEventListener('mousemove',canvasMouseMove);

    }

    clear()
    {
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    }

    setEventListener(event,func)
    {
        this.canvas.addEventListener(event,func);
    }

    unsetEventListener(event,func)
    {
        this.canvas.removeEventListener(event,func);
    }

    line(x1,y1,x2,y2, width,color)
    {
        this.context.beginPath();
        this.context.moveTo(x1,y1);
        this.context.lineTo(x2,y2);
        this.context.lineWidth=width;
        this.context.strokeStyle=color;
        this.context.stroke();
        // console.log('this is a line');
    }

    arc(x,y,radius,start,end,width,color)
    {

        this.context.moveTo(x,y);
        this.context.beginPath();
        this.context.arc(x,y,radius,-(start*Math.PI)/180,-(end*Math.PI)/180,true);
        this.context.lineWidth=width;
        this.context.strokeStyle=color;
        this.context.stroke();

    }
    qurve(x1,y1,x2,y2,cx,cy,width,color)
    {
        this.context.beginPath();
        this.context.moveTo(x1, y1);
        this.context.quadraticCurveTo(x2,y2, cx, cy);
        this.context.lineWidth = width;
        this.context.strokeStyle = color;
        this.context.stroke();
    }

    bezier(begin,ctrl1,ctrl2,end,width,color)
    {
        this.context.beginPath();
        this.context.moveTo(begin[0],begin[1]);
        this.context.bezierCurveTo(ctrl1[0], ctrl1[1], ctrl2[0],ctrl2[1],end[0] , end[1]);
        this.context.lineWidth = width;
        this.context.strokeStyle = color;
        this.context.stroke();
    }

}


