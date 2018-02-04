function Player (canvas, posX, posY) {
    this.ctx = canvas;
    this.posX = posX;
    this.posY = posY;
    this.velY = 0;
}

Player.prototype.drawPlayer = function (){
    if(this.velY < 204) {
        /*leming*/
        //leming-head
        this.ctx.fillStyle="#ED9C80";
        this.ctx.fillRect(this.posX,this.posY + 8 + this.velY,15,15);
        //leming-hear
        this.ctx.fillStyle="#8A077B";
        this.ctx.fillRect(this.posX + 11,this.posY + 8 + this.velY,8,8);
        this.ctx.fillRect(this.posX - 4,this.posY + 8 + this.velY,8,8);
        this.ctx.fillRect(this.posX + 2,this.posY + this.velY,11,8);
        //leming-body
        this.ctx.fillStyle="#073C70";
        this.ctx.fillRect(this.posX,this.posY + 23 + this.velY,15,23);
        this.ctx.fillRect(this.posX + 11,this.posY + 45 + this.velY,8,8);
        this.ctx.fillRect(this.posX - 4,this.posY + 45 + this.velY,8,8);
        //leming-hand
        this.ctx.fillStyle="#ED9C80";
        this.ctx.fillRect(this.posX + 15,this.posY + 28 + this.velY,5,5);
        this.ctx.fillRect(this.posX - 5,this.posY + 28 + this.velY,5,5);
        this.velY+=5;
    } else {
        this.velY===0;
        //leming-head
        this.ctx.fillStyle="#ED9C80";
        this.ctx.fillRect(this.posX,this.posY + 8 + this.velY,15,15);
        //leming-hear
        this.ctx.fillStyle="#8A077B";
        this.ctx.fillRect(this.posX + 11,this.posY + 8 + this.velY,8,8);
        this.ctx.fillRect(this.posX - 4,this.posY + 8 + this.velY,8,8);
        this.ctx.fillRect(this.posX + 2,this.posY + this.velY,11,8);
        //leming-body
        this.ctx.fillStyle="#073C70";
        this.ctx.fillRect(this.posX,this.posY + 23 + this.velY,15,23);
        this.ctx.fillRect(this.posX + 11,this.posY + 45 + this.velY,8,8);
        this.ctx.fillRect(this.posX - 4,this.posY + 45 + this.velY,8,8);
        //leming-hand
        this.ctx.fillStyle="#ED9C80";
        this.ctx.fillRect(this.posX + 15,this.posY + 28 + this.velY,5,5);
        this.ctx.fillRect(this.posX - 5,this.posY + 28 + this.velY,5,5);
        
    }
   
}

Player.prototype.moveRight = function (){
    if(this.posX > 30){
        this.posX += 3;
    }else{ 
        console.log("detente!")
        return;
    }
}


Player.prototype.moveLeft = function (){
    if(this.posX < 770){
        this.posX -= 3;
    }else{ 
        console.log("detente!")
        return;
    }
}


