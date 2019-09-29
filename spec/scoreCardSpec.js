describe("ScoreCard", function() {

  beforeEach(function() {
    scoreCard = new ScoreCard();
  })

  it("scores 0 for gutter game", function() {
    var pinsDown = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    expect(scoreCard.getScore(pinsDown)).toEqual(0);
  })

  it("scores 20 for 1 on every throw", function() {
    var pinsDown = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

    expect(scoreCard.getScore(pinsDown)).toEqual(20);
  })

  it("scores 29 with spare in 1st frame", function() {
    var pinsDown = [1,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

    expect(scoreCard.getScore(pinsDown)).toEqual(29);
  })

  it("scores 38 with spares in 1st and 5th", function() {
    var pinsDown = [1,9,1,1,1,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1];

    expect(scoreCard.getScore(pinsDown)).toEqual(38);
  })

});