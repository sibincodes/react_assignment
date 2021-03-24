import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registration from "./components/Register/Register";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./Store/Reducers";
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Registration />
          </Route>
                  <Route path="/edit">
            <Registration />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
