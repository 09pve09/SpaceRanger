console.log("destroy is here");
var Destroy = function(enemy) {
    var DestroyAnimation = [
      'images/boom.gif',
      'images/boom1.gif',
      'images/boom2.gif',
      'images/boom3.gif'
    ];
    this.sprite = function(){
      index = getRandomInt(0, 4);
      return DestroyAnimation[index];
    }
    this.init = function(){
        this.x = enemy.x;
        this.y = enemy.y;
        this.speed = enemy.speed;
        this.distance = 70;
    }
    this.init();
};

var allDestroys = [];


Destroy.prototype.update = function(){
  this.x= this.x-this.speed;
  this.distance -= this.speed;
  for(var destroy of allDestroys){
    if(destroy.distance < 0){
      allDestroys.splice(allDestroys.indexOf(destroy), 1);
    }
  }
}

Destroy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite()), this.x, this.y);
  // console.log("SHOT: ",this.x, this.y);
}
