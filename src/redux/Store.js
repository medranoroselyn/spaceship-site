
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from './reducers';

const Store = (initialState) => {
  return createStore(
    productsReducer,
    initialState,
    compose(applyMiddleware(thunk),
      window.devToolsExtension && process.env.NODE_ENV === 'development'
        ?
        window.devToolsExtension() : f => f),
  );
};

export default Store;