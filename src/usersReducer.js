import ReducerFactory from './reducerFactory';

const factory = new ReducerFactory('users', 'users');

export const reducer = factory.reducer;
export const actions = factory.actions;
export default reducer;
