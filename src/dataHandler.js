class DataHandler {
  constructor(dispatch, actions, baseUrl) {
    this.dispatch = dispatch;
    this.actions = actions;
    this.baseUrl = baseUrl;
  }

  getAll = () => {
    this.dispatch(this.actions.requestGetItems());

    return fetch(this.baseUrl)
      .then((res) => res.json())
      .then((json) => this.dispatch(this.actions.requestGetItemsSuccess(json)));
  };
}

export default DataHandler;
