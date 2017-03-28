
	function Hero(x,y,direct)
	{
		this.x=x;
		this.y=y;
		this.direct=direct;
		this.moveUp=function(){
			this.y--;
			this.direct=0;
		};
		this.moveRight=function(){
			this.x++;
			this.direct=1;
		};
		this.moveDown=function(){
			this.y++;
			this.direct=2;
		};
		this.moveLeft=function(){
			this.x--;
			this.direct=3;
		};
	}

	function drawTank(tank)
	{
		 
		
		if(tank.direct==0||tank.direct==2)
		{
			cxt.fillStyle="#B97622";
			cxt.fillRect(tank.x, tank.y, 5, 30);
			cxt.fillRect(tank.x+17, tank.y, 5, 30);
			cxt.fillRect(tank.x+6, tank.y+5, 10, 20);
			cxt.fillStyle="#E6DB74";
			//圆盘
			//cxt.arc(x, y, radius, startAngle, endAngle, anticlockwise)
			cxt.arc(tank.x+11, tank.y+15, 4, 0, Math.PI*2, true);
			cxt.fill();//*****
			//炮筒
			cxt.strokeStyle="#E6DB74";
			cxt.lineWidth=2;
			cxt.beginPath();
			cxt.moveTo(tank.x+11, tank.y+15);
			cxt.lineTo(tank.x+11, tank.y+tank.direct*15);
			cxt.closePath();
			cxt.stroke();//***
		}
		else//1 or 3
		{
			cxt.fillStyle="#B97622";
			cxt.fillRect(tank.x, tank.y, 30, 5);
			cxt.fillRect(tank.x, tank.y+17, 30, 5);
			cxt.fillRect(tank.x+5, tank.y+6, 20, 10);
			cxt.fillStyle="#E6DB74";
			//圆盘
			//cxt.arc(x, y, radius, startAngle, endAngle, anticlockwise)
			cxt.arc(tank.x+15, tank.y+11, 4, 0, Math.PI*2, true);
			cxt.fill();//*****
			//炮筒
			cxt.strokeStyle="#E6DB74";
			cxt.lineWidth=2;
			cxt.beginPath();
			cxt.moveTo(tank.x+15, tank.y+11);
			cxt.lineTo(tank.x+15+(2-tank.direct)*15, tank.y+11);
			cxt.closePath();
			cxt.stroke();//***
		}
		
	}