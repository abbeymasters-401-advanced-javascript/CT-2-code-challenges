const { mergeSort } = require('../challenges/class27/class27');

describe('testing mergeSort function', () => {

  it('sorts in order', () => {
    const array = [3, 6, 7, 10, 40, 32, 1];
    mergeSort(array);
    expect(array).toEqual([1,  3,  6, 7, 10, 32, 40]);

  });

});