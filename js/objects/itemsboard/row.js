function Row(canvas, posX, posY, width, height, color, material) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.color = color;
    this.ctx = canvas;
    this.material = material;
    this.drawRow()
}

Row.prototype.drawRow = function (){
    
    this.ctx.fillStyle=this.color;
    this.ctx.fillRect(this.posX,this.posY,this.width,this.height);
}