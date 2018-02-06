function Player (canvas, posX, posY) {
    this.ctx = canvas;
    this.posX = posX;
    this.posY = posY;
    this.velY = 0;
    this.velX = 0;
    this.points= 0;
    this.direction="up";
    this.position = [];
    
}



Player.prototype.drawPlayer = function (){
    console.log(this)
    if(this.posY <= 155 || this.posY > 240 && this.posY < 366) {
        /*leming*/
        this.drawLemming();
        this.posY+=3;
    } else  {
        if (this.direction==="left") {
            this.drawLemmingLeft();
        } else if (this.direction==="right") {
            this.drawLemmingRight();
        } else {
            this.drawLemming(); 
        }
        
    } 
   
}

//Game Over
Player.prototype.gameOver = function (){
    if (this.posY > 366 && this.posX < 360) {
        console.log("you lost the game!")
        $(".win").css("opacity", "100");
        $(".win h2").text(`You lost! try again`);
        $(".win p").text(`Score: ${this.points}`);
    } 
}
//win game
Player.prototype.winGame = function (){
    if (this.posY > 308 && this.posX > 710) {
        console.log("you win!")
        this.points=1;
        $(".win").css("opacity", "100");
        $(".win p").text(`Score: ${this.points}`);
    } 
}


//move lemmings 
Player.prototype.moveRight = function (){
    if(this.posX <  745){
        this.posX += 10;
        this.direction="right"
    } else {
        return;
       
    }
}


Player.prototype.moveLeft = function (){
    if(this.posY < 158 && this.posX > 40){
        this.posX -= 10;
        this.direction="left"

    }else if(this.posY < 400 && this.posX > 420){
        this.posX -= 10;
        this.direction="left"
    } else {
        return;
    }
}

Player.prototype.dig = function (){
    if (this.posY < 250 && (this.posX < 360 || this.posX > 420)) {
        //this.drawGround();
        this.position.push({x:this.posX,y:this.posY})
        this.posY += 5;
        this.direction="up"
    } else { 
        return;
    }
        
 }
//draw lemmings

Player.prototype.drawGround = function (){
    this.ctx.fillStyle="#8A4B07";
    this.ctx.fillRect(this.posX - 4 + this.velX,this.posY + 45 + this.velY,24,5);
}

Player.prototype.drawLemming = function (){
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

Player.prototype.drawLemmingRight = function (){
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

Player.prototype.drawLemmingLeft = function (){
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



