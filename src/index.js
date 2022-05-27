import React from 'react';
import ReactDOM from 'react-dom';
//import { createStore, applyMiddleware } from 'redux';
//import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { reducerSearchRobots } from './redux/reducer'
import { Home } from './pages/Home/Home.tsx';
import { Shop } from './components/Shop/Shop.tsx'
import { Profile } from './pages/Profile/Profile.tsx'
import { Bag } from './pages/Bag/Bag.tsx'
import { Favourites } from './pages/Favourites/Favourites'

//import thunkMiddleware from 'redux-thunk';

//const store = createStore(reducerSearchRobots, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <React.StrictMode>
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/src/components/Shop' element={<Shop />} />
          <Route exact path='/src/pages/Profile/' element={<Profile />} />
          <Route exact path='/src/pages/Bag/' element={<Bag />} />
          <Route exact path='/src/pages/Favourites/' element={<Favourites />} />

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
