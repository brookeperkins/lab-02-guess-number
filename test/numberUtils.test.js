import { compareNumbers } from '../numberUtils.js';

const test = QUnit.test;

test('should take in a number and compare it to another number, yielding 1 if higher, -1 if lower, 0 if equal', (expect) => {
    const userNumber1 = 3;
    const userNumber2 = 11;
    const userNumber3 = 9;
    const computerNumber1 = 3;
    const computerNumber2 = 8;
    const computerNumber3 = 10;

    const expected1 = 0;
    const expected2 = 1;
    const expected3 = -1;

    const actual1 = compareNumbers(userNumber1, computerNumber1);
    const actual2 = compareNumbers(userNumber2, computerNumber2);
    const actual3 = compareNumbers(userNumber3, computerNumber3);

    expect.equal(actual1, expected1);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3);
});

