function sum(x, y) {
  return x + y;
}
function mockFn(fn, x, y) {
  return fn(x, y);
}

describe('default tests', () => {
  // beforeAll(() => {
  //   console.log('before all');
  // });
  it('toEqual', () => {
    expect(sum(2, 3)).toEqual(5.0);
  });
  it('toBe', () => {
    expect(sum(2, 3)).toBe(5);
  });
  it('toMatchSnapshot', () => {
    expect(sum(2, 3)).toMatchSnapshot();
  });
  it('toBeGreaterThan', () => {
    expect(sum(2, 3)).toBeGreaterThan(1);
  });
  it('Mocking function', () => {
    const jestFn = jest.fn((x, y) => x + y);
    expect(mockFn(jestFn, 1, 1)).toBe(2);
    expect(jestFn).toBeCalledWith(1, 1);
  });
  it('not', () => {
    expect(1).not.toBe(2);
  });
});
