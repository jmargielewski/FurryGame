var Play= require('./game.js');

var play= new Play();
play.startGame();
play.showFurry();
play.showCoin();
// play.startGame();

document.addEventListener('keydown', function(event){
    play.newPosition(event);
});
