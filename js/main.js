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
           
            myGame.army1.moveArmy();
            myGame.army2.moveArmy();
            myGame.army3.moveArmy();
            //game over
            myGame.player1.gameOver();
            //win
            myGame.player1.winGame();
            score();
        },1000/fps)
    $("#btn").on("click", function(){       
    });

    
});
function score(){
    $("#score").text(`Score: ${myGame.player1.points}`)
}
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

    //function follow
    // function followLeming(){
    //     if(myGame.player1.position.lenght > 0) {

    //     }else{
    //         return;
    //     }
    // }
}
// 