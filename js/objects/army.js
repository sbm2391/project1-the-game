function Army(canvas, posX, posY) {
    this.ctx = canvas;
    this.posX = posX;
    this.posY = posY;
    this.velY = 0;
    this.velX = 0;
    this.direction="";
     
}

//Game Over
Army.prototype.gameOver = function (){
    if (this.posY > (myGame.board.row11.posY + 156) && this.posX < (myGame.board.col1m.posX - 25)) {
        console.log("you lost the game!")
        $(".win").css("opacity", "100");
        $(".win h2").text(`You lost! try again`);
        $(".win p").text(`Score: ${this.points}`);
    } 
}

//move army
Army.prototype.moveArmy = function (){
    
    //console.log(this)
    if(this.posY <= (myGame.board.row11.posY- 55) || this.posY > (myGame.board.row11.posY + 30) && this.posY < (myGame.board.row21.posY-52)) {
        /*leming*/
        this.drawArmy();
        this.posY+=3;
    } else  {
        
        if (this.direction ==="left") {
            if(this.posX === (myGame.board.col1.posX + 40) || (this.posY > (myGame.board.row11.posY + 150) && this.posX === (myGame.board.col1m.posX + 35))) {
                this.direction ="right";
                this.drawArmyRight();
            } else {
                this.drawArmyLeft();
                this.posX-=1
            }
        } else if (this.direction ==="right") {
            if(this.posX === (myGame.board.col2.posX - 30) || (this.posY > (myGame.board.row11.posY + 150) && this.posX === (myGame.board.col1m.posX - 25))) {
                this.direction ="left"
                this.drawArmyLeft();
            } else {
                this.drawArmyRight();
                this.posX+=1
            }
            
        } else {
            this.drawArmy();
             this.direction="right"
        }  
    }
    myGame.army.forEach(function(element, index){
    if (element.posY > 308 && element.posX > 710) {
            totalScoreArmy+=1;
           myGame.army.splice(index, 1)
           console.log(totalScoreArmy)
        } 
    });
    
    }


Army.prototype.ArmyDig = function (){
    if (this.posY < (myGame.board.row11.posY + 40)) {
        //this.drawGround();
        this.posY += 2;
        this.direction="up"
    } else { 
        return;
    }
}

//Nivel2
Army.prototype.ArmyDigBoard2 = function (){
    if (this.posY < (myGame.board.row11.posY + 40)) {
        //this.drawGround();
        this.posY += 2;
        this.direction="up"
    } else if (this.posY < (myGame.board.row21.posY + 40)){ 
        this.posY += 2;
        this.direction="up"
    } else { 
        return;
    }
}
//draw lemmings

Army.prototype.drawArmy = function (){
    //leming-head
    this.ctx.fillStyle="#ED9C80";
    this.ctx.fillRect(this.posX + this.velX,this.posY + 8 + this.velY,15,15);
    //leming-hear
    this.ctx.fillStyle="#8A077B";
    this.ctx.fillRect(this.posX + 11 + this.velX,this.posY + 8 + this.velY,8,8);
    this.ctx.fillRect(this.posX - 4 + this.velX,this.posY + 8 + this.velY,8,8);
    this.ctx.fillRect(this.posX + 2 + this.velX,this.posY + this.velY,11,8);
    //leming-body
    this.ctx.fillStyle="#073C70";
    this.ctx.fillRect(this.posX + this.velX,this.posY + 23 + this.velY,15,23);
    this.ctx.fillRect(this.posX + 11 + this.velX,this.posY + 45 + this.velY,8,8);
    this.ctx.fillRect(this.posX - 4 + this.velX,this.posY + 45 + this.velY,8,8);
    //leming-hand
    this.ctx.fillStyle="#ED9C80";
    this.ctx.fillRect(this.posX + 15 + this.velX,this.posY + 28 + this.velY,5,5);
    this.ctx.fillRect(this.posX - 5 + this.velX,this.posY + 28 + this.velY,5,5);
}

Army.prototype.drawArmyRight = function (){
    /*lemming-right*/
    //leming-right-head
    this.ctx.fillStyle="#ED9C80";
    this.ctx.fillRect(this.posX + this.velX ,this.posY + this.velY + 8,15,15);
    this.ctx.fillRect(this.posX + this.velX + 15,this.posY + this.velY + 16,7,7);
    this.ctx.fillRect(this.posX + this.velX,this.posY + this.velY + 23,7,7);
    //leming-right-hear
    this.ctx.fillStyle="#8A077B";
    this.ctx.fillRect(this.posX + this.velX + 15,this.posY + this.velY + 8,8,8);
    this.ctx.fillRect(this.posX + this.velX,this.posY + this.velY + 8,8,8);
    this.ctx.fillRect(this.posX + this.velX + 6,this.posY + this.velY,11,8);
    //leming-right-body
    this.ctx.fillStyle="#073C70";
    this.ctx.fillRect(this.posX + this.velX + 7,this.posY + this.velY + 23,8,7);
    this.ctx.fillRect(this.posX + this.velX,this.posY + this.velY + 30,15,15);
    this.ctx.fillRect(this.posX + this.velX + 11,this.posY + this.velY + 45,8,8);
    this.ctx.fillRect(this.posX + this.velX - 4,this.posY + this.velY + 45,8,8);
    //leming-right-hand
    this.ctx.fillStyle="#ED9C80";
    this.ctx.fillRect(this.posX + this.velX - 5,this.posY + this.velY + 28,5,5);
}

Army.prototype.drawArmyLeft = function (){
    /*leming-left*/
    //leming-left-head
    this.ctx.fillStyle="#ED9C80";
    this.ctx.fillRect(this.posX + this.velX,this.posY + this.velY + 8,15,15);
    this.ctx.fillRect(this.posX + this.velX - 5,this.posY + this.velY + 16,7,7);
    this.ctx.fillRect(this.posX + this.velX + 8,this.posY + this.velY + 23,7,7);
    //leming-left-hear
    this.ctx.fillStyle="#8A077B";
    this.ctx.fillRect(this.posX + this.velX + 7,this.posY + this.velY + 8,8,8);
    this.ctx.fillRect(this.posX + this.velX - 8,this.posY + this.velY + 8,8,8);
    this.ctx.fillRect(this.posX + this.velX - 2,this.posY + this.velY,11,8);
    //leming-left-body
    this.ctx.fillStyle="#073C70";
    this.ctx.fillRect(this.posX + this.velX,this.posY + this.velY + 23,8,8);
    this.ctx.fillRect(this.posX + this.velX,this.posY + this.velY + 30,15,15);
    this.ctx.fillRect(this.posX + this.velX + 11,this.posY + this.velY + 45,8,8);
    this.ctx.fillRect(this.posX + this.velX - 4,this.posY + this.velY + 45,8,8);
    //leming-left-hand
    this.ctx.fillStyle="#ED9C80";
    this.ctx.fillRect(this.posX + this.velX + 15,this.posY + this.velY + 28,5,5);
}