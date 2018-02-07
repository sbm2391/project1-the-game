function Door(canvas, posX, posY, width, height) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.ctx = canvas;
    this.drawDoor();
}

Door.prototype.drawDoor = function (){
     //door
    this.ctx.fillStyle="#542E04";
    this.ctx.fillRect(this.posX-10, this.posY-10,this.width+20,this.height+10);
    this.ctx.fillStyle="#00A1F1";
    this.ctx.fillRect(this.posX,this.posY,this.width,this.height);
}