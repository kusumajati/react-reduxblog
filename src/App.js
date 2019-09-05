import React from 'react';
import LandingPage from './LandingPage'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './common/Header'
import Homepage from './LandingPage/Homepage';
import Show from './Projects/Show'
import Projects from './Projects'
import AddProject from './AddProject'
import {Container} from 'reactstrap'

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Container >
          <br></br>
          <Route exact path='/' component={LandingPage}></Route>
          <Route exact path='/homepage/:name' component={Homepage} ></Route>
          <Route path='/projects/:id' component={Show} ></Route>
          <Route exact path='/projects' component={Projects}></Route>
          <Route path='/addproject' component={AddProject}></Route>

        </Container>
      </Router>
    </div>
  );
}

export default App;
