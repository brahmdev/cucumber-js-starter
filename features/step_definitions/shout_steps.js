const assert = require('assert');
const { When, Then, Before, After } = require('@cucumber/cucumber');

const ARBITARY_MESSAGE = 'Hello, world';

Before(() => {
  console.log('shouty BEFORE hook');
});

After(() => {
  console.log('shouty AFTER hook');
});

When('{string} shouts', function (name) {
  this.shouty.shout(name, ARBITARY_MESSAGE);
});

Then('Lucy should hear Sean', function () {
  assert.strictEqual(this.shouty.getShoutsHeardBy('Lucy').size, 1);
});

Then('Lucy should not hear Oscar', function () {
  const shoutsHeard = this.shouty.getShoutsHeardBy('Lucy');
  assert.strictEqual(shoutsHeard.has('Oscar'), false);
});

Then('Lucy should hear nothing', function () {
  assert.strictEqual(this.shouty.getShoutsHeardBy('Lucy').size, 0);
});

Then('Lucy should not hear own shout', function () {
  const shoutsHeard = this.shouty.getShoutsHeardBy('Lucy');
  assert.strictEqual(shoutsHeard.has('Lucy'), false);
});

Then('Lucy should hear {int} shouts from Sean', function (shoutCount) {
  console.log('shouts :: ', this.shouty.getShoutsHeardBy('Lucy'));
  assert.strictEqual(
    this.shouty.getShoutsHeardBy('Lucy').get('Sean').length,
    shoutCount
  );
});
