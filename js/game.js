var Coin= require('./coin.js');
var Furry= require('./furry.js');

function Game(){
  this.board= [...document.querySelectorAll('section#board div')];
  this.furry= new Furry();
  this.coin= new Coin();
  this.score= 0;
  this.index= function(x, y) {
    return x + (y * 10);
  }
  this.showFurry= function(){
    this.board[ this.index(this.furry.x, this.furry.y) ].classList.add('furry');
  }
  this.showCoin= function(){
    this.board[ this.index(this.coin.x, this.coin.y) ].classList.add('coin');
  }
  this.startGame= function(){
    var self= this;
    this.idSetInterval = setInterval(function(){
      self.moveFurry();
    }, 250);
  }
  this.moveFurry= function(){
    this.hideVisibleFurry();
    if(this.furry.direction === 'right') {
        this.furry.x= this.furry.x + 1;
        this.gameOver();
    }else if ( this.furry.direction === 'left') {
        this.furry.x= this.furry.x - 1;
        this.gameOver();
    }else if ( this.furry.direction === 'top') {
        this.furry.y= this.furry.y - 1;
        this.gameOver();
    }else if ( this.furry.direction === 'down') {
        this.furry.y= this.furry.y + 1;
        this.gameOver();
    }
    this.showFurry();
    this.checkCoinCollision();
  }
  this.hideVisibleFurry= function(){
    var oldPosition= document.querySelector('.furry');
    oldPosition.classList.remove('furry');
  }
  this.newPosition= function(event){
    switch(event.which) {
      case 37:
        this.furry.direction= 'left';
        break;
      case 38:
        this.furry.direction= 'top';
        break;
      case 39:
        this.furry.direction= 'right';
        break;
      case 40:
        this.furry.direction= 'down';
        break;
      default: this.furry.direction= 'right';
    } // switch
  } // newPosition
  this.checkCoinCollision= function(){
    if((this.furry.x === this.coin.x) && (this.furry.y === this.coin.y)){

      var takeCoin= document.querySelector('.coin');
      takeCoin.classList.remove('coin');

      this.score++;
      var addPoint= document.querySelector('#score div strong');
      addPoint.innerText= this.score;

      this.coin= new Coin();
      this.showCoin();
    } // if
  } // checkCoinCollision
  this.gameOver= function(){
    if(this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9){
      clearInterval(this.idSetInterval);
      var bayBay= document.querySelector('#over');
      bayBay.classList.remove('invisible');
      bayBay.querySelector('p  strong').textContent= this.score;
    } // if
  } // gameOver
} // funkcja game
module.exports= Game;
