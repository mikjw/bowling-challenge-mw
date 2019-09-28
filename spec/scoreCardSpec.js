describe("ScoreCard", function() {

  beforeEach(function() {
    scoreCard = new ScoreCard();
  })

  it("scores 0 for gutter game", function() {
    for (i=0; i<20; i++) {
      scoreCard.addThrow(0);
    }
    expect(scoreCard.getScore()).toEqual(0);
  })

  it("scores 20 for game of ones", function() {
    for (i=0; i<20; i++) {
      scoreCard.addThrow(1);
    }
    expect(scoreCard.getScore()).toEqual(20);
  })
});