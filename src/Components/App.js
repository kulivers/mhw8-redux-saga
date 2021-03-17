import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  authoritize,
  signOut,
  getUsersFailture,
  getUsersRequest,
  getUsersSuccess,
  getTestRequest,
} from '../redux/actionsCreators';
import './App.css';

export class App extends Component {
  state = {
    username: '111',
    showComponent: true,
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.getTestRequest();
          }}
        >
          3 FORK saga to getUsersRequest (takeEvery)
        </button>
        <button onClick={() => this.props.getTestRequest()}>
          push me three times (take)
        </button>
        <div>check console</div>
        <hr />
        <h1>some try to login/logout, if user isLogged - cout users</h1>
        <h1> wrong working auth</h1>
        <input
          autoFocus={true}
          name="username"
          value={this.state.username}
          onChange={(e) => {
            this.setState({ [e.target.name]: e.target.value });
          }}
          placeholder="egor/111/222/333"
        ></input>
        <button
          onClick={() => {
            this.props.authoritize(this.state.username);
          }}
        >
          authoritize
        </button>
        <button onClick={this.props.signOut}> sign out</button>
        <div>
          you are: {this.props.isLogged ? 'logged in' : 'not logged in'}
        </div>
        <div>
          <button
            onClick={() => {
              this.props.getUsersRequest();
            }}
          >
            simulate request
          </button>
          {this.props.isLogged && (
            <ul>
              {this.props.users.map((user) => (
                <li key={user.id}>
                  {user.id}, {user.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <hr />
        <h1>Component for tests</h1>
        <button>show Component</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    loadingState: state.requestState,
    isLogged: state.isLogged,
  };
};

const mapDispatchToProps = {
  getUsersRequest,
  getTestRequest,
  getUsersSuccess,
  getUsersFailture,
  authoritize,
  signOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
