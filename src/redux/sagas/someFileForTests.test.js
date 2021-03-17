import { testAction } from './someFileForTests';
it('a', () => {
  expect(testAction('testssaaa')).toEqual({ type: 'test' });
});
