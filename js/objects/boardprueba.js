
function Board(canvas,width,height) {
    this.height = height;
    this.width = width;
    this.ctx = canvas;
    this.drawBoard1();
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
   
    
      //grass 2
    //      for(var i = 0; i < 740; i+=20) {
    //     this.ctx.fillStyle="#3D7D29";
    //     this.ctx.fillRect(x + i,410,10,10); 
    //     }
     
    //   for(var i = 10; i < 740; i+=20) {
    //     this.ctx.fillStyle="#5BBB3D";
    //     this.ctx.fillRect(x + i,410,10,10); 
    //     }
     
    //   for(var i = 10; i < 740; i+=20) {
    //     this.ctx.fillStyle="#3D7D29";
    //     this.ctx.fillRect(x + i,400,10,10); 
    //     }
     
    //   for(var i = 6; i < 740; i+=20) {
    //     this.ctx.fillStyle="#3D7D29";
    //     this.ctx.fillRect(x + i,406,4,4); 
    //     }
    //   for(var i = 20; i < 740; i+=20) {
    //     this.ctx.fillStyle="#3D7D29";
    //     this.ctx.fillRect(x + i,406,4,4); 
    //     }
        this.row1 = new Row(canvas,0,210,800,30,"#E88E0C");   
        this.row1m = new Row(canvas,0,420,800,30,"#96989A"); 
        this.grass1 = new Grass(canvas,30,190,"#5BBB3D","#3D7D29");
        this.grass2 = new Grass(canvas,30,400,"#5BBB3D","#3D7D29");
        this.door = new Door(canvas,700,320,60,100);
    }
    
    //gap
    // if(myGame.player1.isDiggin){
    //   this.ctx.fillStyle="#8A4B07";
      
    
    //   this.ctx.fillRect(myGame.player1.position[0].x - 4,  myGame.player1.position[0].y + 20,25,65);
    // }
    
    