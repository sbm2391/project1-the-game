var canvas;
var myGame;
var fps = 60;
var mySound;
var totalScore=0;
var myMusic;

$(document).ready(function(){
        canvas = document.getElementById("board").getContext('2d');
        myGame = new Game(canvas);  
        myMusic = new Audio("music/background-music.mp3");
        myMusic.volume = 0.3;
        myMusic.play();
        
        
        keyListener();
        
        
        var a = setInterval(function(e) {
            myGame.board.drawBoard();
            
            //lemming
            myGame.player1.drawPlayer();
            myGame.army1.moveArmy();
            //game over
            myGame.army1.gameOver();
            myGame.player1.gameOver();
            
            score();
            followLemming();

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

}
// 
function followLemming(){
        if(myGame.player1.position[0].x === myGame.army1.posX) {
          console.log("entra2");
          myGame.army1.ArmyDig();
        } else {
            return;
        }
}

function score() {
    totalScore = myGame.army1.points + myGame.player1.points;
    if (totalScore === 2){
        console.log(totalScore)
        $(".win").css("opacity", "100");
        $(".win p").text(`Score: ${totalScore}`);
        $("#score").text(`Score: ${totalScore}`);
        myMusic.pause();
    }

}