import { createActions } from 'redux-actions';
// export const incCounter = createAction('INCREMENT_COUNTER');
// export const decCounter = createAction('DECREMENT_COUNTER');
// export const addWord = createAction(TYPES.ADD_WORD); //same as createAction(TYPES.DECREMENT_COUNTER, payload => payload );
// export const deleteWord = createAction(TYPES.DELETE_WORD);

const rootActionCreator = createActions({
  APP: {
    COUNTER: { INC_COUNTER: null, DEC_COUNTER: null },
    WORDS: { ADD_WORD: null, DELETE_WORD: null },
  },
  USERS: {
    GET_USERS_COUNT: null,
    GET_USERS: null,
    SET_USERS: null,
    ADD_USER: null,
    DELETE_USER: null,
    CLEAR_USERS: null,
  },
});

export const {
  app: {
    counter: { incCounter: increment_counter, decCounter: decrement_counter },
    words: { addWord: add_word, deleteWord: delete_word },
  },
  users: {
    getUsers: get_users,
    getUsersCount: get_users_count,
    addUser: add_user,
    setUsers: set_users,
    deleteUser: delete_user,
    clearUsers: clear_users,
  },
} = rootActionCreator;

export const fetch_users = () => {
  return (dispatch) => {
    // console.log('im in get users creator');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((Response) => Response.json())
      .then((result) => {
        console.log('im in fetch users thunk creator');
        dispatch(set_users(result));
      });
  };
};
