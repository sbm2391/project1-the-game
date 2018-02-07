function Column(canvas, posX, posY, width, height, color) {
    this.posX = posX;
    this.posY = posy;
    this.width = width;
    this.height = height;
    this.color = color;
    this.ctx = canvas;
}

Column.prototype.drawColumn = function (){
    this.ctx.fillStyle=color;
    this.ctx.fillRect(this.posX,this.posY,width,height);
}

