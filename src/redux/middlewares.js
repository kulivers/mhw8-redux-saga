export const stateChangeLogger = (state) => (next) => (action) => {
  const prevState = state.getState();
  console.log('prevState: ', prevState);
  const result = next(action);
  const afterState = state.getState();
  console.log('afterState: ', afterState);
  console.log('----------------------------');
  return result;
};
