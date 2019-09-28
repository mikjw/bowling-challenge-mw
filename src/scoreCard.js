'use strict';

var ScoreCard = function() {
  this._score = 0;
  this._throws = [];
  this._throwNumber = 0;
}

ScoreCard.prototype.addThrow = function(pinsDown) {
  this._throws.push(pinsDown);
  this._score = this._throws.reduce(summer);
  
  function summer(total, num) {
    return total + num;
  }
}

ScoreCard.prototype.getScore = function() {
  return this._score;
}