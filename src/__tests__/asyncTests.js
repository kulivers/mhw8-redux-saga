import delay from 'redux-saga';
jest.setTimeout(30000);

describe('asyncs', () => {
  it('should done', (done) => {
    setTimeout(done, 1);
  });
  it('should promise', () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 1);
    });
  });
  it('should delay', async () => {
    await delay(20000);
  });
});
