function Lava(canvas, posX, posY, color1, color2) {
    this.posX = posX;
    this.posY = posY;
    this.colorInside = color1;
    this.colorOutside = color2;
    this.ctx = canvas;
    this.drawLava();
}

Lava.prototype.drawLava = function (){
/*lava*/

    for(var i = 0; i < 180; i+=20) {
    this.ctx.fillStyle=this.colorOutside;
    this.ctx.fillRect(this.posX + i,this.posY+10,10,10); 
    }

    for(var i = 10; i < 180; i+=20) {
    this.ctx.fillStyle=this.colorInside;
    this.ctx.fillRect(this.posX + j,this.posY+10,10,10); 
    }

    for(var i = 10; i < 180; j+=20) {
    this.ctx.fillStyle=this.colorOutside;
    this.ctx.fillRect(this.posX + j,this.posY,10,10); 
    }

    for(var i = 6; i < 180; i+=20) {
    this.ctx.fillStyle=this.colorOutside;
    this.ctx.fillRect(this.posX + j,this.posY+6,4,4); 
    }
    for(var i = 20; i < 180; i+=20) {
    this.ctx.fillStyle=this.colorOutside;
    this.ctx.fillRect(this.posX + j,this.posY+6,4,4); 
    } 

}