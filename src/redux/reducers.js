import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { handleAction } from 'redux-actions';
import {
  increment_counter,
  decrement_counter,
  add_word,
  delete_word,
  set_users,
} from '../redux/actionsCreators';

const initialState = { counter: 0, words: 'some very good text', users: [] };

const userReducer = handleActions(
  {
    [set_users.toString()]: (state, action) => {
      console.log('im in set_users reducer');
      // console.log(action);
      return { users: action.payload };
    },
  },
  initialState
);

const countReducer = handleActions(
  {
    [increment_counter.toString()]: (state) => ({
      counter: state.counter + 1,
    }),
    [decrement_counter.toString()]: (state) => ({
      counter: state.counter - 1,
    }),
  },
  initialState
);

const wordReducer = handleActions(
  {
    [add_word.toString()]: (state, { payload }) => {
      let newWords = state.words.split(' ');
      newWords.push(payload);
      newWords = newWords.join(' ');
      return { ...state, words: newWords };
    },
    [delete_word.toString()]: (state) => {
      let newWords = state.words.split(' ');
      newWords.pop();
      newWords = newWords.join(' ');
      return { ...state, words: newWords };
    },
  },
  initialState
);

export default combineReducers({
  countReducer: countReducer,
  wordReducer: wordReducer,
  userReducer: userReducer,
});
