var canvas;
var myGame;
var fps = 30;

$(document).ready(function(){
    canvas = document.getElementById("board").getContext('2d');
    myGame = new Game(canvas);
    myGame.board.drawBoard();
    $("#btn").on("click", function(){
        // canvas = document.getElementById("board").getContext('2d');
        
        
    });


    
});
