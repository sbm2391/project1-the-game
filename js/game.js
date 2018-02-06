function Game(canvas){
    this.board = new Board(canvas,800,450);
    this.player1 = new Player (canvas, 100, -47);
    this.army1 = new Army (canvas, 100, -500);
    // this.army2 = new Army (canvas, 100, -1000);
    // this.army3 = new Army (canvas, 100, -1500);
    //this.mySound = new sound("bounce.mp3");
}



