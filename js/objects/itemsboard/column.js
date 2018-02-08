function Column(canvas, posX, posY, width, height, material) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.color;
    this.ctx = canvas;
    this.material = material;
    this.checkmetal();
    this.drawColumn();
}

Column.prototype.drawColumn = function (){
 
    this.ctx.fillStyle=this.color;
    this.ctx.fillRect(this.posX,this.posY,this.width,this.height);
}
 Column.prototype.checkmetal= function (){
     if (this.material === "metal") {
        this.color = "#96989A";
     } else if (this.material === "ground"){
        this.color = "#E88E0C";
     }
}