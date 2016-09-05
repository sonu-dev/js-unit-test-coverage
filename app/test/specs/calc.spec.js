
var chai = require('chai');
var Math = require('../../src/calc.js');
var expect = chai.expect;

describe("Calc", function() {
  describe("addition", function() {
    it("addition of two integers", function() {      
      expect(Math.calc.add(5, 7)).to.equal(12);
    });

    it("addition of two real numbers", function() {      
      expect(Math.calc.add(5.5, 7.5)).to.equal(13);
    });

  });
});
