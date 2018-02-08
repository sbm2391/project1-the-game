
function Board(canvas,width,height) {
    this.height = height;
    this.width = width;
    this.ctx = canvas;
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
    this.ctx.fillRect(0,420,800,30);
    this.ctx.fillStyle="#8A4B07";
    this.ctx.fillRect(30,30,740,390);
    
    //background
    this.ctx.fillStyle="#8A4B07";
    this.ctx.fillRect(30,30,740,180);
    //items
    this.row1 = new Row(canvas,0,210,800,30,"#E88E0C");    
    this.grass1 = new Grass(canvas,30,190,"#5BBB3D","#3D7D29");
    this.grass2 = new Grass(canvas,30,400,"#5BBB3D","#3D7D29");
    this.col1m = new Column(canvas,385,210,30,210,"#E88E0C");
    this.door = new Door(canvas,700,320,60,100);
    this.col1 = new Column(canvas,0,0,30,450,"#E88E0C");
    this.col2 = new Column(canvas,770,0,30,450,"#E88E0C");
    this.row2 = new Row(canvas,0,420,800,30,"#96989A"); 
    //gap
    console.log(myGame.player1)
    if(myGame.player1.isDiggin){
        this.ctx.fillStyle="#8A4B07";
        this.ctx.fillRect(myGame.player1.position[0].x - 4,  myGame.player1.position[0].y + 20,25,65);
      }
    }
    
    Board.prototype.drawBoard2 = function() {
        //marco
        //cielo
        this.ctx.fillStyle="#00A1F1";
        this.ctx.fillRect(60,0,90,30);
        //marco cafe
        this.ctx.fillStyle="#E88E0C";
        this.ctx.fillRect(0,0,60,30);
        this.ctx.fillRect(150,0,650,30);
        this.ctx.fillRect(0,420,800,30);
        this.ctx.fillStyle="#8A4B07";
        this.ctx.fillRect(30,30,740,390);
        
        //background
        this.ctx.fillStyle="#8A4B07";
        this.ctx.fillRect(30,30,740,180);
        //items
    }
    
    
    
    