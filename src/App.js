import React from 'react';
import UploadImage from './components/UploadImage';
import ViewImages from './components/ViewImages';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/upload"><UploadImage/></Route>
        <Route path="/view"><ViewImages/></Route>
      </Switch>
    </Router>
  );
}

export default App;
