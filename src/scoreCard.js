'use strict';

var ScoreCard = function() {
  this._score = 0;
  this._numFrames = 10;
}

ScoreCard.prototype.getScore = function(pinsDown) {
  
  var i = 0;
  for (var j=0; j<this._numFrames; j++) {
    // add bonus for spares
    if (pinsDown[i] + pinsDown[i+1] === 10) {
      this._score += (10 + pinsDown[i+2]);
      i += 2;
    // add bonus for strikes
    } else if (pinsDown[i] === 10) {
      this._score += (10 + pinsDown[i+1] + pinsDown[i+2]);
      i += 1;
    } else {
      this._score += (pinsDown[i] + pinsDown[i+1]);
      i += 2;
    }
  }
  return this._score;
}