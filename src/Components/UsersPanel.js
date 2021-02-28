import React, { Component } from 'react';

class UsersPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], show_users: false };
  }
  render() {
    const { users, fetchUsers } = this.props;

    return (
      <div>
        <h1>By fetch query:</h1>
        <button
          onClick={() => {
            this.setState({ show_users: !this.state.show_users });
            console.clear();
            // setUsers([{ name: 'fakin', fam: 'bic' }]);
            fetchUsers();
          }}
        >
          get_users
        </button>
        {this.state.show_users && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )}
        <hr />
        <button></button>
      </div>
    );
  }
}

export default UsersPanel;
