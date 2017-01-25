
console.log("engine is here");

var Engine = (function(global) {
    //  var endGame = false;
    var doc = global.document,
        win = global.window,
        canvas = doc.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        lastTime;

    canvas.width = 600;
    canvas.height = 400;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    doc.body.appendChild(canvas);


    function main() {

        var now = Date.now(),
            dt = (now - lastTime) / 1000.0;


        if (play == true){
          update(dt),
          render()
        }
        if(play == false){
          background.render();
        }

        lastTime = now;


        requestId = win.requestAnimationFrame(main);
    }


    function init() {

        // reset();
        lastTime = Date.now();
        main();
    }

     function update(dt) {
         updateEntities(dt);
         checkCollisions();
     }


     function updateEntities(dt) {
         allEnemies.forEach(function(enemy) {
             enemy.update(dt);
         });

         allShoots.forEach(function(shoot) {
             shoot.update(dt);
        });

         allDestroys.forEach(function(destroy) {
             destroy.update(dt);
        });
         player.update(dt);
     }

     function checkCollisions() {
         allEnemies.forEach(function(enemy) {
             enemy.checkCollision(player);
         });

         allShoots.forEach(function(shoot) {
             shoot.checkCollision(allEnemies);
         });
     }



    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      renderEntities();
    }


    function renderEntities() {

        background.render();

        allEnemies.forEach(function(enemy) {
            enemy.render();
        });

         allShoots.forEach(function(shoot) {
             shoot.render();
        });

        allDestroys.forEach(function(destroy) {
            destroy.render();
       });

        player.render();
        flame.render();
    }


    // function reset() {
    //     allEnemies.forEach(function(enemy) {
    //         enemy.init();
    //     });
    //     if(player){
    //       player.init();
    //     }
    // }

    // function

    Resources.load([
        'images/spaceship2.png',// player
        'images/spaceships_241R.gif', //shoot
        'images/allien2.png',  //allien1
        'images/space1.png', //background
        'images/flame.gif',//flame
        'images/flame1.gif',//flame
        'images/flame2.gif',//flame
        'images/flame3.gif', //flame
        'images/boom.gif', //destroy
        'images/boom1.gif', //destroy
        'images/boom2.gif',//destroy
        'images/boom3.gif',//destroy
        'images/logo.png', //logo
        'images/asteroid1.png', //asteroid
        'images/asteroid2.png', //asteroid
        'images/asteroid3.png', //asteroid
        'images/asteroid4.png', //asteroid
        'images/exp1.png', //player explosion
        'images/exp2.png', //player explosion
        'images/exp3.png', //player explosion
        'images/exp4.png', //player explosion


    ]);
    Resources.onReady(init);

    global.ctx = ctx;
})(this);

// function callTest(){
//     play = !play;
// }
