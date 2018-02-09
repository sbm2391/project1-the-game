
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
    this.row11 = new Row(canvas,0,210,800,30,"#E88E0C","ground");    
    this.grass1 = new Grass(canvas,30,190,"#5BBB3D","#3D7D29");
    this.grass2 = new Grass(canvas,30,400,"#5BBB3D","#3D7D29");
    this.col1m = new Column(canvas,385,210,30,210,"#E88E0C", "ground");
    this.door = new Door(canvas,700,320,60,100);
    this.col1 = new Column(canvas,0,0,30,450,"#E88E0C","ground");
    this.col2 = new Column(canvas,770,0,30,450,"#E88E0C","ground");
    this.row21 = new Row(canvas,0,420,800,30,"#96989A", "metal"); 
    //gap
    console.log(myGame.player1)
    if(myGame.player1.isDiggin){
        this.ctx.fillStyle="#8A4B07";
        this.ctx.fillRect(myGame.player1.position[0].x - 4,  myGame.player1.position[0].y + 20,25,65);
      }
    }
    

    
//Nivel 2 board
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
    //cielo player
    // this.ctx.fillStyle="#00A1F1";
    // this.ctx.fillRect(650,0,90,30);
    //items
    //marcos
    this.col1 = new Column(canvas,0,0,30,450,"#E88E0C", "ground");
    this.col2 = new Column(canvas,770,0,30,450,"#E88E0C", "ground");
    //rows
    
    this.row11 = new Row(canvas,30,130,800,30,"#96989A", "metal");  
    this.row12 = new Row(canvas,360,130,800,30,"#E88E0C", "ground");

    this.row31 = new Row(canvas,0,420,800,30,"#96989A", "metal"); 
    this.row21 = new Row(canvas,0,280,500,30,"#E88E0C", "ground"); 
    this.row22 = new Row(canvas,500,280,270,30,"#96989A");
    //grass
    this.grass1 = new Grass(canvas,30,110,"#5BBB3D","#3D7D29", 740);
    this.grass2 = new Grass(canvas,30,260,"#5BBB3D","#3D7D29", 740);
    this.grass3 = new Grass(canvas,30,400,"#5BBB3D","#3D7D29", 740);
    
    //cols
    this.col11 = new Column(canvas,330,30,30,100,"#96989A", "metal");
    this.col21 = new Column(canvas,300,160,30,120,"#96989A", "metal");
    this.col22 = new Column(canvas,500,160,30,120,"#96989A", "metal");
    this.col31 = new Column(canvas,470,310,30,120,"#96989A", "metal");
    //door
    this.door = new Door(canvas,700,320,60,100);

}
