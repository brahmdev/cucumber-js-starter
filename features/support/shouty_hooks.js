const { Before, After } = require('@cucumber/cucumber');

Before(() => {
  console.log('in BEFORE');
});

After(() => {
  console.log('in AFTER');
});

Before({ tags: '@ShoutHeard or @ShoutNotHeard' }, () => {
  console.log('in ANOTHER ***  BEFORE ');
});

After(() => {
  console.log('in ANOTHER *** AFTER');
});
