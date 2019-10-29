const insertionSort = require('../challenges/class26/class26');

describe('testing insertion sort function', () => {

  it('sorts numbers in order from least to greatest', () => {
    let result = insertionSort([1, 50, 34, 7, 2, 16, 5]);
    expect(result).toEqual([1, 2, 5, 7, 16, 34, 50]);
  });

});