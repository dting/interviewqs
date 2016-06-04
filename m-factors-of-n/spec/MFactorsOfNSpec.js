xdescribe('PROBLEM:', () => {
  xdescribe(PROBLEM, noop);
});

xdescribe('EXAMPLE:', () => {
  xdescribe(EXAMPLE, noop);
});

const checkExpectation = (n, m, expected) => {
  const results = mFactorsOfN(n, m);

  expected.forEach(factors => {
    it(`should contain [${factors}]`, () => {
      expect(results).toContain(factors);
    });
  });

  it(`should only have ${expected.length} factor arrays`, () => {
    expect(results.length).toBe(expected.length);
  });
};

describe('mFactorsOfN', () => {
  describe('When n = 12, m = 1', () => {
    const expected = [
      [12]
    ];
    checkExpectation(12, 1, expected);
  });

  describe(`When n = 12, m = 2`, () => {
    const expected = [
      [1, 12],
      [2, 6],
      [3, 4]
    ];
    checkExpectation(12, 2, expected);
  });

  describe(`When n = 12, m = 3`, () => {
    const expected = [
      [1, 1, 12],
      [1, 2, 6],
      [1, 3, 4],
      [2, 2, 3]
    ];
    checkExpectation(12, 3, expected);
  });

  describe(`When n = 100, m = 5`, () => {
    const expected = [
      [1, 1, 1, 1, 100],
      [1, 1, 1, 2, 50],
      [1, 1, 1, 4, 25],
      [1, 1, 1, 5, 20],
      [1, 1, 1, 10, 10],
      [1, 1, 2, 2, 25],
      [1, 1, 2, 5, 10],
      [1, 1, 4, 5, 5],
      [1, 2, 2, 5, 5]
    ];
    checkExpectation(100, 5, expected);
  });
});
