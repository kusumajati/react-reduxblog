import React from 'react';
import LandingPage from './LandingPage'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './common/Header'
import Show from './Projects/Show'
import Projects from './Projects/Projects'
import AddProject from './AddProject'

function App() {
  return (
    <div>
      <Router>
        <Header></Header>

          <br></br>
          <Route exact path='/' component={LandingPage}></Route>
          <Route path='/projects/:id' component={Show} ></Route>
          <Route exact path='/projects' component={Projects}></Route>
          <Route path='/addproject' component={AddProject}></Route>

      </Router>
    </div>
  );
}

export default App;
