[Source](https://robkendal.co.uk/blog/2020-01-21-react-redux-components-apis-and-handler-utilities/)

- The user clicks a button to load a list of users
- The React component calls the data handler to give it some data
- The data handler calls the API using a GET request to something like '/users'
- The API fetches the data and returns its Promise to the data handler
- The data handler then dispatches a Redux action with the API payload (e.g the list of users)
- Redux updates app state with the list of users it has been passed
- The state change is noticed by the component, which takes action to refresh, updating itself with the shiny list of users.
