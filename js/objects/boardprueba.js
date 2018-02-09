
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
    this.ctx.fillStyle="#00A1F1";
    this.ctx.fillRect(650,0,90,30);
    //items
    //marcos
    this.col1 = new Column(canvas,0,0,30,450,"#E88E0C");
    this.col2 = new Column(canvas,770,0,30,450,"#E88E0C");
    //rows
    
    this.row1 = new Row(canvas,30,130,800,30,"#96989A");  
    this.row12 = new Row(canvas,360,130,800,30,"#E88E0C");

    this.row3 = new Row(canvas,0,420,800,30,"#96989A"); 
    this.row2 = new Row(canvas,0,280,500,30,"#E88E0C"); 
    this.row2metal = new Row(canvas,500,280,270,30,"#96989A");
    //grass
    this.grass1 = new Grass(canvas,30,110,"#5BBB3D","#3D7D29", 740);
    this.grass2 = new Grass(canvas,30,260,"#5BBB3D","#3D7D29", 740);
    this.grass3 = new Grass(canvas,30,400,"#5BBB3D","#3D7D29", 740);
    
    //cols
    this.col1metal = new Column(canvas,330,30,30,100,"#96989A");
    this.col21metal = new Column(canvas,300,160,30,120,"#96989A");
    this.col22metal = new Column(canvas,500,160,30,120,"#96989A");
    this.col3metal = new Column(canvas,470,310,30,120,"#96989A");
    //door
    this.door = new Door(canvas,700,320,60,100);

}
