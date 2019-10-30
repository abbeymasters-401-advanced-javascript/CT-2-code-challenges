const { quickSort } = require('../challenges/class28/class28');

describe('testing quickSort function', () => {

  it('sorts in order', () => {
    const array = [3, 6, 7, 10, 40, 32, 1];
    quickSort(array, 0, 6);
    expect(array).toEqual([1,  3,  6, 7, 10, 32, 40]);
  });

});