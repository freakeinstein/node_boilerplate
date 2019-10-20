import sum from '../../src/sum';

const assert = require('assert');

describe('Sum', function() {
  describe('#sum()', function() {
    it('should return 2 when given input 1', function() {
      assert.equal(sum(1), 2);
    });
  });
});
