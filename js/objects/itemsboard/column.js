function Column(canvas, posX, posY, width, height, color) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.color = color;
    this.ctx = canvas;
    this.drawColumn();
}

Column.prototype.drawColumn = function (){
 
    this.ctx.fillStyle=this.color;
    this.ctx.fillRect(this.posX,this.posY,this.width,this.height);
}

