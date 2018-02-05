function Player (canvas, posX, posY) {
    this.ctx = canvas;
    this.posX = posX;
    this.posY = posY;
    this.velY = 0;
    this.velX = 0;
}

Player.prototype.drawPlayer = function (){
    if(this.velY <= 202 || this.velY > 279 && this.velY < 413) {
        /*leming*/
        this.drawLemming();
        this.velY+=3;
    } else  {
        this.drawLemming();
        
    } 
   
}
//move lemmings || this.vel < 204)
Player.prototype.moveRight = function (){
    
    if(this.velX <  647){
     
        this.velX += 5;
    } else {
        return;
    }
}


Player.prototype.moveLeft = function (){
    if(this.velY === 204 && this.velX > -63){
        this.velX -= 5;
    }else if(this.velY > 204 && this.velX > 320){
        this.velX -= 5;
    } else {
        return;
    }
}

Player.prototype.dig = function (){
    if (this.velY < 280 && (this.velX < 270 || this.velX > 318)) {
        this.velY += 5;
    } else { 
        return;
    }
        
 }
//draw lemmings

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
    this.ctx.fillRect(this.posX + this.velX + 6,this.posY + this.velY + 16,7,7);
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

