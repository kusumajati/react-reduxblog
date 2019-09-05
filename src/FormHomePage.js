import React from 'react'
import {Button, Form, FormGroup, Label, Input, Container} from 'reactstrap'
import{Link} from 'react-router-dom'
export default function FormHomePage(props){

    return(
        <div>
        <Form  inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Enter Your Name</Label>
          <Input onChange={props.handleChangeName} name="password" id="examplePassword" placeholder="don't tell!" />
        </FormGroup>
        <Link to={`/homepage/${props.name}`}>
        <Button>Submit</Button>
        </Link>
      </Form>  
      <br/>

      </div>
    )
}