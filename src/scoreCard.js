'use strict';

var ScoreCard = function() {
  this._score = 0;
}

ScoreCard.prototype.addThrow = function(pinsDown) {
  this._score += pinsDown;
}

ScoreCard.prototype.getScore = function() {
  return 0;
};