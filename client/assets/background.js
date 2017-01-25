console.log("background is here");

var Background = function() {
    this.sprite = 'images/space1.png';
    this.init = function(){
        this.x = 0;
        this.y = 0;
    }
    this.init();
};

Background.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    this.x= this.x-0.5;
    // console.log(this.x);
    if(this.x < -1200){
      // console.log('inside of if');
      this.x = 0;
      this.y = 0;
    }
};

Background.prototype.update = function(dt) {
  return true;
};

background = new Background();
