const { Given } = require('@cucumber/cucumber');
const Coordinate = require('../../lib/coordinate');

/* Given('{word} is at {int}, {int}', function (name, x, y) {
  this.shouty.setLocation(name, new Coordinate(x, y));
}); */

Given('{word} is at {coordinate}', function (name, coordinate) {
  this.shouty.setLocation(name, coordinate);
});

Given('people are located at', function (dataTable) {
  console.log('DataTable :: ', dataTable.rows());
  dataTable.hashes().forEach((row) => {
    const { name, x, y } = row;
    this.shouty.setLocation(name, new Coordinate(x, y));
  });
});
