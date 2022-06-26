import React from 'react';
import ReactDOM from 'react-dom';
//import { createStore, applyMiddleware } from 'redux';
//import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { reducerSearchRobots } from './redux/reducer'
import { Home } from './pages/Home/Home';
import { Shop } from './pages/Shop/Shop'
import { Profile } from './pages/Profile/Profile'
import { Bag } from './pages/Bag/Bag'
import { Favorites } from './pages/Favorites/Favorites'

//import thunkMiddleware from 'redux-thunk';

//const store = createStore(reducerSearchRobots, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <React.StrictMode>

    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/src/pages/Shop' element={<Shop />} />
        <Route exact path='/src/pages/Profile/' element={<Profile />} />
        <Route exact path='/src/pages/Bag/' element={<Bag />} />
        <Route exact path='/src/pages/Favorites/' element={<Favorites />} />
      </Routes>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
