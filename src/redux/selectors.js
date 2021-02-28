export const get_users_phones = (state) => {
  return state.userReducer.users.map((user) => user.phone);
};
