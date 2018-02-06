function Board(canvas,width,height) {
    this.height = height;
    this.width = width;
    this.ctx = canvas;

}

Board.prototype.clearBoard = function (){
  this.ctx.clearRect(0,0,this.width,this.height)
}

Board.prototype.drawBoard1 = function() {
//marco
//cielo
this.ctx.fillStyle="#00A1F1";
this.ctx.fillRect(60,0,90,30);
//marco cafe
this.ctx.fillStyle="#E88E0C";
this.ctx.fillRect(0,0,60,30);
this.ctx.fillRect(150,0,650,30);
this.ctx.fillRect(0,0,30,450);
this.ctx.fillRect(770,0,30,450);
this.ctx.fillRect(0,420,800,30);
this.ctx.fillStyle="#8A4B07";
this.ctx.fillRect(30,30,740,390);

//background
this.ctx.fillStyle="#8A4B07";
this.ctx.fillRect(30,30,740,180);
//Grass
var x=30
if (x >= 30 && x <= 760) {
    for(var i = 0; i < 740; i+=20) {
        this.ctx.fillStyle="#3D7D29";
        this.ctx.fillRect(x + i,200,10,10); 
    }
 
  for(var i = 10; i < 740; i+=20) {
    this.ctx.fillStyle="#5BBB3D";
    this.ctx.fillRect(x + i,200,10,10); 
    }
 
  for(var i = 10; i < 740; i+=20) {
    this.ctx.fillStyle="#3D7D29";
    this.ctx.fillRect(x + i,190,10,10); 
    }
 
  for(var i = 6; i < 740; i+=20) {
    this.ctx.fillStyle="#3D7D29";
    this.ctx.fillRect(x + i,196,4,4); 
    }
  for(var i = 20; i < 740; i+=20) {
    this.ctx.fillStyle="#3D7D29";
    this.ctx.fillRect(x + i,196,4,4); 
    } 
  //grass 2
     for(var i = 0; i < 740; i+=20) {
    this.ctx.fillStyle="#3D7D29";
    this.ctx.fillRect(x + i,410,10,10); 
    }
 
  for(var i = 10; i < 740; i+=20) {
    this.ctx.fillStyle="#5BBB3D";
    this.ctx.fillRect(x + i,410,10,10); 
    }
 
  for(var i = 10; i < 740; i+=20) {
    this.ctx.fillStyle="#3D7D29";
    this.ctx.fillRect(x + i,400,10,10); 
    }
 
  for(var i = 6; i < 740; i+=20) {
    this.ctx.fillStyle="#3D7D29";
    this.ctx.fillRect(x + i,406,4,4); 
    }
  for(var i = 20; i < 740; i+=20) {
    this.ctx.fillStyle="#3D7D29";
    this.ctx.fillRect(x + i,406,4,4); 
    }  
}
//inside
//ground
this.ctx.fillStyle="#E88E0C";
this.ctx.fillRect(0,210,800,30);
this.ctx.fillRect(385,210,30,210);
//door
this.ctx.fillStyle="#542E04";
this.ctx.fillRect(690,310,80,110);
this.ctx.fillStyle="#00A1F1";
this.ctx.fillRect(700,320,60,100);

//gap
if(myGame.player1.isDiggin){
  this.ctx.fillStyle="#8A4B07";
  

  this.ctx.fillRect(myGame.player1.position[0].x - 4,  myGame.player1.position[0].y + 20,25,65);
}

}

