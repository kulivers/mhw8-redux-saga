import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import sagas from './sagas';
import createSagaMiddleware from 'redux-saga';

const createAppStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  sagaMiddleware.run(sagas);
  return store;
};

export default createAppStore;
