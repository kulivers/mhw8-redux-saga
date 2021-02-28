import React, { Component } from 'react';
import { get_users_phones } from '../redux/selectors';
import {
  increment_counter,
  decrement_counter,
  add_word,
  delete_word,
  fetch_users,
  set_users,
} from '../redux/actionsCreators';
import { connect } from 'react-redux';
import './App.css';
import UsersPanel from './UsersPanel';

export class App extends Component {
  state = { word: '' };
  render() {
    const {
      increment_counter,
      decrement_counter,
      add_word,
      delete_word,
      set_users,
      users_phones,
      words,
      fetch_users,
      counter,
      users,
    } = this.props;

    return (
      <div>
        <div>
          <button onClick={increment_counter}>+1</button>
          <button onClick={decrement_counter}>-1</button>
        </div>
        <div>Counter: {counter}</div>
        <hr />
        <input
          value={this.state.word}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              add_word(this.state.word);
            }
          }}
          onChange={(e) => {
            this.setState({ word: e.target.value });
          }}
          autoFocus
          onFocus={(e) => e.currentTarget.select()}
        />
        <button
          onClick={() => {
            add_word(this.state.word);
          }}
        >
          Добавить
        </button>
        <button
          onClick={() => {
            delete_word();
          }}
        >
          Удалить
        </button>
        <button
          onClick={() => {
            console.log(users);
          }}
        >
          show users in console
        </button>
        <button
          onClick={() => {
            console.log(users_phones);
          }}
        >
          show users phones in console
        </button>
        <div>{words}</div>
        <hr />
        <UsersPanel
          users={users}
          fetchUsers={fetch_users}
          setUsers={set_users}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.countReducer.counter,
    words: state.wordReducer.words,
    users: state.userReducer.users,
    users_phones: get_users_phones(state),
  };
};

const mapDispatchToProps = {
  increment_counter,
  decrement_counter,
  add_word,
  delete_word,
  fetch_users,
  set_users,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
