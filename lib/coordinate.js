class Coordinate {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distanceFrom(other) {
    // TODO: actually calculate distance between the coordinates.
    //       e.g. return Math.abs(this.x - other.x);

    //return 0
    //console.log('THis :: ', this);
    //console.log('OTHER :: ', other);
    return Math.hypot(this.x - other.x, this.y - other.y);
  }
}

module.exports = Coordinate;
