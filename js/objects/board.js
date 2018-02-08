
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
    this.row1 = new Row(canvas,0,210,800,30,"ground");    
    this.grass1 = new Grass(canvas,30,190,"#5BBB3D","#3D7D29", 740);
    this.grass2 = new Grass(canvas,30,400,"#5BBB3D","#3D7D29", 740);
    this.col1m = new Column(canvas,385,210,30,210,"ground");
    this.door = new Door(canvas,700,320,60,100);
    this.col1 = new Column(canvas,0,0,30,450,"ground");
    this.col2 = new Column(canvas,770,0,30,450,"ground");
    this.row2 = new Row(canvas,0,420,800,30,"metal"); 
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
        //cielo player
        this.ctx.fillStyle="#00A1F1";
        this.ctx.fillRect(650,0,90,30);
        //items
        //marcos
        this.col1 = new Column(canvas,0,0,30,450,"ground");
        this.col2 = new Column(canvas,770,0,30,450,"ground");
        //rows
        
        this.row1 = new Row(canvas,0,130,800,30,"ground");
        this.row1metal = new Row(canvas,30,130,330,30,"metal");  
        this.row3 = new Row(canvas,0,420,800,30,"metal"); 
        this.row2ground = new Row(canvas,0,280,500,30,"ground"); 
        this.row2metal = new Row(canvas,500,280,270,30,"metal");
        //grass
        this.grass1 = new Grass(canvas,30,110,"#5BBB3D","#3D7D29", 740);
        this.grass2 = new Grass(canvas,30,260,"#5BBB3D","#3D7D29", 740);
        this.grass3 = new Grass(canvas,30,400,"#5BBB3D","#3D7D29", 740);
        
        //cols
        this.col1metal = new Column(canvas,330,30,30,100,"metal");
        this.col21metal = new Column(canvas,300,160,30,120,"metal");
        this.col22metal = new Column(canvas,500,160,30,120,"metal");
        this.col3metal = new Column(canvas,470,310,30,120,"metal");
        //door
        this.door = new Door(canvas,700,320,60,100);

    }

    Board.prototype.drawBoard3 = function() {
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
        this.col1 = new Column(canvas,0,0,30,450,"ground");
        this.col2 = new Column(canvas,770,0,30,450,"ground");
        //grass
        this.grass1 = new Grass(canvas,30,110,"#5BBB3D","#3D7D29", 740);
        this.grass2 = new Grass(canvas,30,260,"#5BBB3D","#3D7D29", 740);
        this.lava = new Lava(canvas,30,400,"#7D1702","#EB2B04",660);
        //door
        this.door = new Door(canvas,700,320,60,100);
        //rows
       
        //en prueba
        this.row1 = new Row(canvas,30,130,740,30,"ground");
        this.row1metal = new Row(canvas,30,130,330,30,"metal");

        this.row2 = new Row(canvas,30,280,740,30,"ground"); 
        this.row2metal = new Row(canvas,500,280,270,30,"metal");
        this.row31metal = new Row(canvas,100,355,150,30,"metal");
        this.row32metal = new Row(canvas,350,355,340,30,"metal");
        //cols
        this.col1metal = new Column(canvas,330,30,30,100,"metal");
        this.col21metal = new Column(canvas,300,160,30,120,"metal");
        this.col22metal = new Column(canvas,500,160,30,120,"metal");
      
    }
    
    Board.prototype.drawBoard4 = function() {
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
        this.col1 = new Column(canvas,0,0,30,450,"ground");
        this.col2 = new Column(canvas,770,0,30,450,"ground");
        //grass
        this.grass11 = new Grass(canvas,30,110,"#5BBB3D","#3D7D29", 350);
        this.grass12 = new Grass(canvas,430,110,"#5BBB3D","#3D7D29", 340);
        this.grass21 = new Grass(canvas,30,260,"#5BBB3D","#3D7D29", 310);
        this.grass22 = new Grass(canvas,530,260,"#5BBB3D","#3D7D29", 240);
        this.grass3 = new Grass(canvas,30,400,"#5BBB3D","#3D7D29", 740);
        //lava
        this.lava = new Lava(canvas,380,110,"#7D1702","#EB2B04",50);
        this.lava = new Lava(canvas,340,260,"#7D1702","#EB2B04",160);
        //rows
        this.row1ground = new Row(canvas,30,130,740,30,"ground");
        this.row2ground = new Row(canvas,0,280,500,30,"ground"); 
        this.row2metal = new Row(canvas,500,280,270,30,"metal");
        this.row3 = new Row(canvas,0,420,800,30,"metal"); 
         //cols
         this.col1metal = new Column(canvas,280,30,30,100,"metal");
         this.col2metal = new Column(canvas,500,160,30,120,"metal");
         this.col3metal = new Column(canvas,470,280,30,140,"metal");
         //door
        this.door = new Door(canvas,700,320,60,100);
    }
    
    