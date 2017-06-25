/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var Coin= __webpack_require__(2);
var Furry= __webpack_require__(3);

function Game(){
  this.board= [...document.querySelectorAll('section#board div')];
  this.furry= new Furry();
  this.coin= new Coin();
  this.score= 0;
  this.index= function(x,y) {
    return x + (y * 10);
  }
  this.showFurry= function(){
    this.board[ this.index(this.furry.x,this.furry.y) ].classList.add('furry');
  }
  this.showCoin= function(){
    this.board[ this.index(this.coin.x,this.coin.y) ].classList.add('coin');
  }
  this.startGame= function(){
    var self= this;
    this.idSetInterval= setInterval(function(){
      self.moveFurry();
    }, 250);
  }
  this.moveFurry= function(){
    this.hideVisibleFurry();
    if(this.furry.direction === "right") {
        this.furry.x= this.furry.x + 1;
        this.gameOver();
    }else if ( this.furry.direction === "left") {
        this.furry.x= this.furry.x - 1;
        this.gameOver();
    }else if ( this.furry.direction === "top") {
        this.furry.y= this.furry.y - 1;
        this.gameOver();
    }else if ( this.furry.direction === "down") {
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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Play= __webpack_require__(0);

var play= new Play();
play.startGame();
play.showFurry();
play.showCoin();
// play.startGame();

document.addEventListener('keydown', function(event){
    play.newPosition(event);
});


/***/ }),
/* 2 */
/***/ (function(module, exports) {

function Coin(){
  this.x= Math.floor(Math.random() * 10);
  this.y= Math.floor(Math.random() * 10);
}
module.exports= Coin;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

function Furry(){
  this.x= 0;
  this.y= 0;
  this.direction= "right";
}
module.exports= Furry;


/***/ })
/******/ ]);