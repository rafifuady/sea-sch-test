import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Provider } from 'react-redux';

import './App.css';

import Landing from "./pages/Landing";

import reduxStore from './redux/store';


function App() {
  return (  
    <React.Fragment>
      <Provider store={reduxStore}>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={() => <div>404 Not Found ErrorPage</div>} />
          </Switch>
        </Router>
      </Provider>
    </React.Fragment>
  );
}

export default App;
