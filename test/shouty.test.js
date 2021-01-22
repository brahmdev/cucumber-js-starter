const assert = require('assert');
const Coordinate = require('../lib/coordinate');
const Shouty = require('../lib/shouty');

const ARBITARY_MESSAGE = 'Hello, world';
let shouty = new Shouty();

describe('Shouty', () => {
  it('should not hear own shout', () => {
    const name = 'Lucy';
    shouty.shout(name, ARBITARY_MESSAGE);
    assert.strictEqual(shouty.getShoutsHeardBy(name).size, 0);
  });
});
