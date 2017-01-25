console.log("shoot is here");
var ShootInstances = 0;
var Shoot = function() {
    this.sprite = 'images/spaceships_241R.gif';
    this.init = function(){
        this.x = player.x;
        this.y = player.y+10;
        this.id = ++ShootInstances;
    }
    this.init();
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

    // console.log('shot is created');
    // console.log("SHOT: ",this.x, this.y);
};

var allShoots = [];

Shoot.prototype.update = function(dt) {
  this.x= this.x+5;
  for(var shoot of allShoots){
    if(shoot.x > 620){
      allShoots.splice(allShoots.indexOf(shoot), 1);
    }
  }
}

Shoot.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  // console.log("SHOT: ",this.x, this.y);
}

Shoot.prototype.checkCollision = function() {
    var ShootX1 =  Math.floor(this.x);
    var ShootX2 =  Math.floor(this.x+13);
    var ShootY1 =  Math.floor(this.y);
    var ShootY2 =  Math.floor(this.y+7);
    ctx.rect(ShootX1,ShootY1,ShootX2,ShootY2);

    for(var enemy of allEnemies){
      if ((Math.max(ShootX1, enemy.x)<Math.min(ShootX2, enemy.x+30)) &&
          (Math.max(ShootY1, enemy.y)<Math.min(ShootY2, enemy.y+20)) ){
            allShoots.splice(allShoots.indexOf(this), 1);
            destroy = new Destroy(enemy);
            score += 5;
            allDestroys.push(destroy);
            allEnemies.splice(allEnemies.indexOf(enemy), 1);
            console.log('Detection collisions for Shoot# ' + this.id + ",and Enemy# " + enemy.id)
            // player.hp -= this.hit;
      }
    }

};
