var canvas;
var myGame;
var fps = 30;

$(document).ready(function(){
    canvas = document.getElementById("board").getContext('2d');
    myGame = new Game(canvas);
    
        setInterval(function() {
            myGame.board.drawBoard()
            myGame.player1.drawPlayer()
        },1000/fps)
    
    $("#btn").on("click", function(){
        
        
        ;
    });


    
});
