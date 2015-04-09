describe('scrabbleScore', function() {
    it("will return 1 with an input of 'a'", function() {
        expect(scrabbleScore("a")).to.equal(1);
    });

    it("will return 2 with an input of 'aa'", function() {
      expect(scrabbleScore("aa")).to.equal(2);
    });

    it("will return 3 with an input of 'ars'", function() {
      expect(scrabbleScore("ars")).to.equal(3);
    });

    it("will return 2 with an input of 'd'", function() {
      expect(scrabbleScore("d")).to.equal(2);
    });

    it("will return 3 with an input of 'ad'", function() {
      expect(scrabbleScore("ad")).to.equal(3);
    });

    it("will return 1 with an input of 'A'", function() {
      expect(scrabbleScore("A")).to.equal(1);
    });

    it("will return 33 with an input of 'AdbFKjQ'", function() {
      expect(scrabbleScore("AdbFKjQ")).to.equal(33);
    });
    it("will return 14 with an input of 'scrabble'", function() {
      expect(scrabbleScore("scrabble")).to.equal(14);
    });
});
