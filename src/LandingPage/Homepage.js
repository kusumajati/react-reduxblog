import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import {Link} from 'react-router-dom'

export default class Homepage extends React.Component{

    render(){
        return(
            <div>
      <Jumbotron>
        <h1 className="display-3">Hello, {this.props.match.params.name}</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
            <Link to='/user/'>
          <Button color="primary">Show Profile</Button>
          </Link>
        </p>
      </Jumbotron>                
            </div>
        )
    }
}