console.log('player is here');
var playerDestroyAnimation = [
  'images/exp1.png',
  'images/exp2.png',
  'images/exp3.png',
  'images/exp4.png'
];
var Player = function() {
    // this.sprite = 'images/spaceship2.png';
    this.sprite = function(){
      return 'images/spaceship2.png';
    };
    this.init = function(){
        this.x = 0;
        this.y = 120;
        this.hp = 5;
    }
    this.init();

};
var Flame = function() {


    var flameAnimation = [
      'images/flame.gif',
      'images/flame1.gif',
      'images/flame2.gif',
      'images/flame3.gif'
    ];
    // this.sprite = 'images/flame.gif';
    this.sprite = function(){
      index = getRandomInt(0, 4);
      return flameAnimation[index];
    }
    this.init = function(){
        this.x = player.x-8;
        this.y = player.y+10;
    }
    this.init();

};

Flame.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite()), player.x-8, player.y+10);
  }
  // console.log("SHOT: ",this.x, this.y);



  Player.prototype.update = function(dt) {
    if(player.hp < 1){

      this.sprite = function(){
        index = getRandomInt(0, 4);
        var gameOver = function(){
          setTimeout(function stop(){
            play = false;
            endGame = true;
            console.log(play, endGame);
          }, 700)
        }()
        return playerDestroyAnimation[index];
      }



      // play = false;
    }
    if(player.y < -15){
      this.y = 390;
    }
    if(player.y > 390){
      this.y = -10;
    }
    if(player.x < 0){
      this.x = 0;
    }
    if(player.x > 560){
      this.x = 560;
    }
  };



Player.prototype.render = function() {
      ctx.drawImage(Resources.get(this.sprite()), this.x, this.y);

};


Player.prototype.handleInput = function(action) {
    if (action === 'left'){
        this.x -= 20;
    }
    else if (action === 'right'){
        this.x += 20;
    }
    if (action === 'up'){
        this.y -= 15;
    }
    else if (action === 'down'){
        this.y += 15;
    }
    if(action == 'fire'){
      // console.log("BITCH WORK");
      score -= 1;
      shoot = new Shoot();
      // console.log(shoot);
      allShoots.push(shoot);
    }
};
// player = new Player();
// flame = new Flame();

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        32: 'fire',

    };
    if(player){
      player.handleInput(allowedKeys[e.keyCode]);
    }
});
