import React from 'react';
import { connect } from 'react-redux';

import { actions } from './usersReducer';
import DataHandler from './dataHandler';

import './App.css';

function App({ dataHandler, loading, users }) {
  const handleLoadUsersClick = () => {
    dataHandler.getAll();
  };

  return (
    <div className="App">
      <h1>React, Redux, and Data Handling</h1>
      <h2>An example</h2>
      <p>
        Click the load users button below to start loading users from the api
      </p>
      <p>
        <button onClick={() => handleLoadUsersClick()}>Load users</button>
      </p>
      <hr />
      <h3>Users</h3>
      {loading ? <p>loading...</p> : null}
      {!loading && users ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> | {user.email}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users.list,
  loading: state.users.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  dataHandler: new DataHandler(
    dispatch,
    actions,
    'https://jsonplaceholder.typicode.com/users'
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
