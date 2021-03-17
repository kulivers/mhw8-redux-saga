jest.genMockFromModule('redux-actions');
export const createAction = jest.fn(() => {
  return { type: 'test' };
});

export const authoritize = jest.fn(() => {
  return { type: 'AUTHORITIZE' };
});
export const authoritizeSuccess = jest.fn(() => {
  return { type: 'AUTHORITIZE_SUCCESS' };
});
export const authoritizeFailture = jest.fn(() => {
  return { type: 'AUTHORITIZE_FAILTURE' };
});
export const getUsersRequest = jest.fn(() => {
  return { type: '' };
});
export const getUsersSuccess = jest.fn(() => {
  return { type: '' };
});
export const getUsersFailture = jest.fn(() => {
  return { type: '' };
});
export const signOut = jest.fn(() => {
  return { type: '' };
});
