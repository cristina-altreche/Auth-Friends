import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import thunk from 'redux-thunk'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import NewFriend from "./components/NewFriend";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList}/>
         
          <Route path="/login" component={Login} />
          <Route component={Login} />
          
        </Switch>
        {/* <NewFriend/> */}
      </div>
    </Router>
  );
}


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
