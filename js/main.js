var canvas;
var myGame;
var fps = 60;
var mySound;
$(document).ready(function(){
    
    canvas = document.getElementById("board").getContext('2d');
    myGame = new Game(canvas);
        keyListener();
        var a = setInterval(function(e) {
            myGame.board.clearBoard();
            myGame.board.drawBoard();
            
            //lemming
            myGame.player1.drawPlayer();
         
            
        },1000/fps)
    
    
        
        $("#btn").on("click", function(){   
        
    });
    
});

//Funcion para escuchar eventos del teclado
function keyListener(){
    document.addEventListener("keydown", function(e){
        switch (e.keyCode) {
            case 39: //->
                myGame.player1.moveRight() 
                break;
            case 37: //<-
                myGame.player1.moveLeft();
                break;
            case 40: //down
                myGame.player1.dig();
                break;
            default:
                break;
        }
    });
}
