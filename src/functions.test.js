const {sum} = require('./functions.js');
const {test, expect} = require('@jest/globals');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
