console.log('enemies are here');
var EnemyInstances = 0;
var score = 0;

var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

var Enemy = function(x, y, speed, sprite) {
    var AsteroidAnimation = [
      'images/asteroid1.png', //asteroid
      'images/asteroid2.png', //asteroid
      'images/asteroid3.png', //asteroid
      'images/asteroid4.png', //asteroid
    ];
    this.id = ++EnemyInstances;
    this.sprite = function(){
      if(this.speed < 4){
        index = getRandomInt(1, 4);
        return AsteroidAnimation[index];
      }
      else{
        return 'images/allien2.png';
      }
    }
    // this.sprite = 'images/allien2.png';

    this.init = function(){
        this.x = x; //600     // form -101 to 505
        this.y = y;// this.y = 25*(this.id % 10 + 1); // 83*1 or 83*2 or 83*3
        this.v = Math.floor((Math.random() * 250) + 50); // from 50 to 250
        this.hit = 1;
        this.speed = speed;
        this.hp = 1;

    };
    this.init();
    console.log('Enemy #'+this.id+' is created');
    // console.log(this);
};


Enemy.prototype.update = function(dt) {
  this.x= this.x-this.speed;
  // console.log(this.x);
  if(this.x < -40){
    // console.log('inside of if');
    this.x = getRandomInt(600,620);
    this.y = getRandomInt(20,380);
  }
};


Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite()), this.x, this.y);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.checkCollision = function(player) {
    var EnemyX1 =  Math.floor(this.x);
    var EnemyX2 =  Math.floor(this.x+30);
    var EnemyY1 =  Math.floor(this.y);
    var EnemyY2 =  Math.floor(this.y+20);
    var PlayerX1 = Math.floor(player.x);
    var PlayerX2 = Math.floor(player.x+30);
    var PlayerY1 = Math.floor(player.y);
    var PlayerY2 = Math.floor(player.y+20);
    // console.log("OLOLO",EnemyX1, EnemyX2, EnemyY1, EnemyY2);
    ctx.rect(EnemyX1,EnemyY1,EnemyX2,EnemyY2);

    if ((Math.max(EnemyX1, PlayerX1)<Math.min(EnemyX2, PlayerX2)) &&
        (Math.max(EnemyY1, PlayerY1)<Math.min(EnemyY2, PlayerY2)) ){
          // console.log('Detection collisions for Enemy#' + this.id +
          //     '(' + EnemyX1 + ', ' + EnemyY1 + ') - ' + '(' + EnemyX2 + ', '+ EnemyY2 + ')' +
          //     ' and Player: ' +
          //     '(' + PlayerX1 + ', ' + PlayerY1 + ') - ' + '(' + PlayerX2 + ', '+ PlayerY2 + ')');
          player.hp -= this.hit;
          score += 10;
          destroy = new Destroy(this);
          allDestroys.push(destroy);
          allEnemies.splice(allEnemies.indexOf(this), 1);
    }

};
var allEnemies = [];
// setInterval(function, 7000)
function spawn(){
  // random = getRandomInt(7,13);
  if(play){
    for(var i=0;i<11;i++){
      var x = getRandomInt(600,620);
      var y = getRandomInt(20,380);
      var speed = getRandomInt(2,6);
      // console.log('X: ', x,'Y: ',y, ' speed:', speed);
      enemy = new Enemy(x, y, speed);
      allEnemies.push(enemy);
    }
  }
};
// spawn();
