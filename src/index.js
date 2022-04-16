import React from 'react';
import ReactDOM from 'react-dom';
//import { createStore, applyMiddleware } from 'redux';
//import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { reducerSearchRobots } from './redux/reducer'
import { Home } from './pages/Home.tsx';
//import thunkMiddleware from 'redux-thunk';

//const store = createStore(reducerSearchRobots, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <React.StrictMode>
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();