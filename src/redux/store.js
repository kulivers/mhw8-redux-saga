import { compose, createStore, applyMiddleware } from 'redux';
import { loggerWare } from './middlewares';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
const createAppStore = () => {
  return createStore(
    rootReducer,
    compose(
      // applyMiddleware(loggerWare),
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
};

export default createAppStore;
